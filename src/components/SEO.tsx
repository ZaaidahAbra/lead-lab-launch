// // src/components/SEO.tsx
// import { Helmet } from 'react-helmet-async';

// interface SEOProps {
//   title: string;
//   description: string;
//   canonicalUrl?: string;
//   ogImage?: string;
//   ogType?: string;
// }

// export default function SEO({ 
//   title, 
//   description, 
//   canonicalUrl, 
//   ogImage = "/og-image.jpg",
//   ogType = "website"
// }: SEOProps) {
//   const siteTitle = "Abrahams & CoLead Lab - Smart Lead Generation";
//   const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
//   const siteUrl = "https://leadlab.yourdomain.com"; // Change this
  
//   return (
//     <Helmet>
//       {/* Basic Meta Tags */}
//       <title>{fullTitle}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content="lead generation, marketing, sales, business growth" />
      
//       {/* Open Graph / Facebook */}
//       <meta property="og:type" content={ogType} />
//       <meta property="og:title" content={fullTitle} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={ogImage} />
//       <meta property="og:url" content={canonicalUrl || siteUrl} />
//       <meta property="og:site_name" content={siteTitle} />
      
//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={fullTitle} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={ogImage} />
      
//       {/* Canonical URL */}
//       <link rel="canonical" href={canonicalUrl || siteUrl} />
      
//       {/* Additional SEO tags */}
//       <meta name="robots" content="index, follow" />
//       <meta name="language" content="English" />
//       <meta name="author" content="Lead Lab" />
      
//       {/* Viewport - Important for mobile SEO */}
//       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//     </Helmet>
//   );
// }