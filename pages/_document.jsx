import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Covid19 - Tracker</title>

          <meta name="description" content="Corona Virus, Tracker" />
          <meta name="robots" content="noindex" />
          <meta name="AdsBot-Google" content="noindex" />

          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
