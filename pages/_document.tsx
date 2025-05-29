import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kathan Parag Shah" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Kathan Parag Shah - Computer Science & Economics Student" />
        <meta property="og:description" content="Personal portfolio of Kathan Parag Shah, a passionate Computer Science and Economics student at Arizona State University specializing in modern web development." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Kathan Parag Shah - Computer Science & Economics Student" />
        <meta property="twitter:description" content="Personal portfolio of Kathan Parag Shah, a passionate Computer Science and Economics student at Arizona State University specializing in modern web development." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}