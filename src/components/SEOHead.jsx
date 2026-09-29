import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sriprakashcartravelskakinada.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/logo-badge.png`;
const SITE_NAME = 'Sri Prakash Car Travels';
const PHONE = '+91 9848903025';

export default function SEOHead({ 
  title, 
  description, 
  canonical, 
  image = DEFAULT_IMAGE,
  keywords = '' 
}) {
  const fullTitle = title.includes('Sri Prakash') 
    ? title 
    : `${title} | ${SITE_NAME} Kakinada`;
  const fullCanonical = canonical 
    ? `${SITE_URL}${canonical}` 
    : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />
    </Helmet>
  );
}
