#!/usr/bin/env node

import yargs from "yargs";
import fs from "fs";

const argv = yargs
  .command({
    command: "create",
    describe: "Create a style.css file",
    aliases: ["c"],
    builder: {},
    handler: function (argv) {
      createStyleCSS();
    },
  })
  .help().argv as { _: string[] };

if (argv._.includes("create")) {
  createStyleCSS();
}

function createStyleCSS() {
  const defaultCSS = `
    *{
        margin: 0;
        padding: 0;
    }
    `;

  fs.writeFileSync("style.css", defaultCSS);
  console.log("style.css has been created");
}
