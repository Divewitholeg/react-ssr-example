import express from "express";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import path from "path";
import fs from "fs";
import App from "./src/App";

global.window = {};

const app = express();

app.use(express.static("./build", { index: false }));

const articles = [
  {
    id: 1,
    title: "Article 1",
    content: "This is article 1",
  },
  {
    id: 2,
    title: "Article 2",
    content: "This is article 2",
  },
  {
    id: 3,
    title: "Article 3",
    content: "This is article 3",
  },
];

app.get("/api/articles", (req, res) => {
  const loadedArticles = articles;
  res.json(loadedArticles);
});

app.get("/*", (req, res) => {
  const sheet = new ServerStyleSheet();
  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    const articlesString = articles;

    return res.send(
      data
        .replace(
          '<div id="root"></div>',
          `<script>window.preloadedArticles = ${JSON.stringify(
            articlesString
          )};</script></script><div id="root">${reactApp}</div>`
        )
        .replace("{{ styles }}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
