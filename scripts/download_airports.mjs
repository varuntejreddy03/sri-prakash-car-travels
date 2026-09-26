import fs from 'fs';
import path from 'path';

const files = [
  {
    title: 'File:Rajahmundry_Airport_1.jpg',
    target: 'public/images/airport-rajahmundry.jpg'
  },
  {
    title: 'File:Vizag_airport_terminal_full_view.jpg',
    target: 'public/images/airport-vizag.jpg'
  },
  {
    title: 'File:Vijayawada_Airport_Entrance.jpg',
    target: 'public/images/airport-vijayawada.jpg'
  },
  {
    title: 'File:Rajiv_Gandhi_International_Airport.jpg',
    target: 'public/images/airport-hyderabad.jpg'
  },
  {
    title: 'File:Papikondalu_scenic_beauty_1.jpg',
    target: 'public/images/tour-papikondalu.jpg'
  },
  {
    title: 'File:Charminar-night-illuminated.jpg',
    target: 'public/images/tour-hyderabad.jpg'
  }
];

async function main() {
  for (const item of files) {
    try {
      const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&format=json`;
      const res = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'SriPrakashTravelsBot/1.0 (contact@sriprakashcartravelskkd.com)'
        }
      });
      const data = await res.json();
      const pages = data.query.pages;
      let imgUrl = null;
      for (const k in pages) {
        if (pages[k].imageinfo && pages[k].imageinfo[0]) {
          imgUrl = pages[k].imageinfo[0].url;
          break;
        }
      }

      if (imgUrl) {
        console.log(`Downloading ${item.title} from ${imgUrl}`);
        const imgRes = await fetch(imgUrl, {
          headers: {
            'User-Agent': 'SriPrakashTravelsBot/1.0 (contact@sriprakashcartravelskkd.com)'
          }
        });
        const arrayBuffer = await imgRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(item.target, buffer);
        console.log(`Saved to ${item.target} (${buffer.length} bytes)`);
      } else {
        console.log(`Could not find URL for ${item.title}`);
      }
    } catch (err) {
      console.error(`Error for ${item.title}:`, err.message);
    }
  }
}

main();
