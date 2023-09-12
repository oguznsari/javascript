#!/usr/bin/env node

import yargs from "yargs";
import fs from "fs";
import { error } from "console";
import { stderr, stdout } from "process";
import { exec } from "child_process";

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
  .command("build", "Run npm run build")
  .help().argv as { _: string[] };

if (argv._.includes("create")) {
  createStyleCSS();
}

if (argv._.includes("build")) {
  exec("npm run build", (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`Error: ${stderr}`);
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
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
