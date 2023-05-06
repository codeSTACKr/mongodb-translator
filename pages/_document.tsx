import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Translate human language to MongoDB queries in seconds."
          />
          <meta
            property="og:site_name"
            content="MongoDB Query API Translator"
          />
          <meta
            property="og:description"
            content="Translate human language to MongoDB queries in seconds."
          />
          <meta property="og:title" content="MongoDB Query API Translator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="MongoDB Query API Translator" />
          <meta
            name="twitter:description"
            content="Translate human language to MongoDB queries in seconds."
          />
        </Head>
        <body className="dark:bg-black bg-gray-100 text-gray-800 dark:text-white font-sans transition-colors">
          <div className="max-w-4xl mx-auto px-4">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
