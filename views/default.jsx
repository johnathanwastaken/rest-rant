const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Burgertopia</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>
        {html.children}
        <footer>
          Designed and Programmed by
          <a href="https://www.linkedin.com/in/johnathan-ortiz-flores-a9545823b/">
            Johnathan Ortiz-Flores
          </a>
        </footer>
      </body>
    </html>
  );
}

module.exports = Def;
