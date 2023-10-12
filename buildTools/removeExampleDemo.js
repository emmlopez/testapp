// This script removes demo app files
const rimraf = require("rimraf");
const fs = require("fs");
const chalk = require("chalk");
/* eslint-disable no-console */

const pathsToRemove = [
  "./src",
  "./public/mockServiceWorker.js",
  "./cypress/integration",
];

function removePath(path, callback) {
  rimraf(path, (error) => {
    if (error) throw new Error(error);
    callback();
  });
}

function moveTemplates() {
  fs.mkdirSync("./src/components", { recursive: true });
  fs.renameSync(
    "./buildTools/templates/HomePage.js",
    "./src/components/HomePage.js"
  );
  fs.renameSync("./buildTools/templates/index.scss", "./src/index.scss");
  fs.renameSync("./buildTools/templates/srcIndex.js", "./src/index.js");
}

function removePackageJsonScriptEntry(scriptName) {
  const packageJsonPath = "./package.json";
  const fileData = fs.readFileSync(packageJsonPath, "utf-8");
  const content = JSON.parse(fileData);
  delete content.scripts[scriptName];
  fs.writeFileSync(packageJsonPath, JSON.stringify(content, null, 2) + "\n");
}

try {
  let numPathsRemoved = 0;
  pathsToRemove.forEach((path) => {
    removePath(path, () => {
      numPathsRemoved++;
      if (numPathsRemoved === pathsToRemove.length) {
        // All paths have been processed
        // Now we can create files since we're done deleting.
        // Move templates over to their proper place
        moveTemplates();

        // Now that we're done, let's delete the buildTools folder
        removePath("./buildTools", () => {
          // console.log('Build tools deleted');
        });
      }
    });
  });

  removePackageJsonScriptEntry("remove-demo");
  removePackageJsonScriptEntry("removeDemo:Examples");
  removePackageJsonScriptEntry("removeDev:reinstall");

  console.log(chalk.green("Demo app removed."));
} catch (e) {
  console.log("Removing the demo app failed");
}
