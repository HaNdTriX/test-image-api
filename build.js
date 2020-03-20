const fs = require("fs");
const { html } = require("common-tags");
const remark = require("remark");
const remarkHTML = require("remark-html");
const package = require("./package.json");

const src = "./README.md";
const dist = "./public/index.html";

const markdown = fs.readFileSync(src, "utf8");

remark()
  .use(remarkHTML)
  .process(markdown, (err, file) => {
    fs.writeFileSync(
      dist,
      html`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <title>${package.name}</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"
              integrity="sha256-gzohnzxILb7OZZch6c8mySnK1r0yFviwmBR+1E5O0RM="
              crossorigin="anonymous"
            />
            <style>
              body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 980px;
                margin: 0 auto;
                padding: 45px;
              }
            </style>
          </head>
          <body class="markdown-body">
            ${String(file)}
          </body>
        </html>
      `
    );
  });
