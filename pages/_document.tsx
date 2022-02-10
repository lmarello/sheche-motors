import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const isDevelopmentEnvironment =
      process.env.NEXT_PUBLIC_ENVIRONMENT === "development";

    return (
      <Html>
        <title>
          Sheche Motors - Taller de servicio y mantenimiento de vehículos
          livianos y medianos
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Taller de servicio y mantenimiento de vehículos livianos y medianos. Merlo - Bs.As."
          />
          <meta
            name="keywords"
            content="taller mecanico, sheche motors, autos, merlo, reparacion"
          />

          <link rel="icon" href="/favicon.ico" />

          {!isDevelopmentEnvironment && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                        `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          <img className="smoke-top" src="/top-pink.svg" />
          <img className="smoke-bottom" src="/bottom-blue.svg" />
        </body>
      </Html>
    );
  }
}
