import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, '../public/images');

async function optimizeImages() {
  try {
    if (!fs.existsSync(imagesDir)) {
      console.log('Directory does not exist:', imagesDir);
      return;
    }
    
    const files = fs.readdirSync(imagesDir);
    let totalSaved = 0;
    
    for (const file of files) {
      if (file.startsWith('temp_')) continue;
      
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const filePath = path.join(imagesDir, file);
        const statsBefore = fs.statSync(filePath);
        const sizeBefore = statsBefore.size;

        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Resize if width > 1200
        let pipeline = image;
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
        }

        // WebP version
        const webpPath = path.join(imagesDir, `${path.basename(file, ext)}.webp`);
        await pipeline.webp({ quality: 80 }).toFile(webpPath);
        const statsWebp = fs.statSync(webpPath);

        // Optimized original format
        const tempOriginalPath = path.join(imagesDir, `temp_${file}`);
        if (ext === '.jpg' || ext === '.jpeg') {
          await pipeline.jpeg({ quality: 80 }).toFile(tempOriginalPath);
        } else if (ext === '.png') {
          await pipeline.png({ quality: 80, compressionLevel: 8 }).toFile(tempOriginalPath);
        }
        
        // Replace original with optimized original
        fs.renameSync(tempOriginalPath, filePath);
        const statsAfter = fs.statSync(filePath);
        
        totalSaved += (sizeBefore - statsAfter.size);

        console.log(`Optimized ${file}:`);
        console.log(`  Original: ${(sizeBefore / 1024).toFixed(2)} KB -> ${(statsAfter.size / 1024).toFixed(2)} KB`);
        console.log(`  WebP: ${(statsWebp.size / 1024).toFixed(2)} KB`);
      }
    }
    console.log('Optimization complete!');
    console.log(`Total space saved on original formats: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
