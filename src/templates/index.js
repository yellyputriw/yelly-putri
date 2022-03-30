const Config = require('../config');

// eslint-disable-next-line func-names
module.exports = function (templateParams) {
  const html = /* html */ `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${templateParams.htmlWebpackPlugin.options.title}</title>
        <meta name="description" content="${Config.DESCRIPTION}" />
        <meta name="image" content="${Config.HOST}/og.png" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Rancho&display=swap"
          rel="stylesheet"
        />
        <noscript>You need to enable JavaScript!</noscript>
      </head>
      <body>
        <div id="__yell">
          <yell-navbar></yell-navbar>
          <yell-hero></yell-hero>
          <yell-about></yell-about>
          <yell-tools></yell-tools>
          <yell-project></yell-project>
          <yell-contact></yell-contact>
          <yell-footer></yell-footer>
        </div>
      </body>
    </html>
  `;

  return html;
};
