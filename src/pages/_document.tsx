import Document, { Head, Html, Main, NextScript } from "next/document";
import React, { useState } from "react";

export default function MainDocument(props: any) {
  const [locale, _] = useState(props.locale);
  return (
    <Html dir={locale === "fa" ? "rtl" : "ltr"} lang={locale}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Mono&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
        <meta name="theme-color" content="#f9fafb" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="portal"></div>
      </body>
    </Html>
  );
}

MainDocument.getInitialProps = async (ctx: any) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || "en" };
};
