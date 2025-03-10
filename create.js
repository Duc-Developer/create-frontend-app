#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { execSync } = require("child_process");
const cliProgress = require("cli-progress");

const prompt = inquirer.createPromptModule();

const TEMPLATES_DIR = path.join(__dirname, "templates");

function getTemplateNames() {
  return fs
    .readdirSync(TEMPLATES_DIR)
    .filter((file) =>
      fs.lstatSync(path.join(TEMPLATES_DIR, file)).isDirectory()
    );
}

function getTemplateDescriptions() {
  const descriptions = {};
  const templateNames = getTemplateNames();

  templateNames.forEach((templateName) => {
    const packageJsonPath = path.join(TEMPLATES_DIR, templateName, "package.json");
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      descriptions[templateName] = packageJson.description ? ` - (${packageJson.description})` : "";
    } else {
      descriptions[templateName] = "";
    }
  });

  return descriptions;
}

function generateGitIgnore(targetDir) {
  const gitignoreContent = `
node_modules
dist
build
.bun
.bun.lock
.bun.lockb
.yarn.lock
package-lock.json
yarn-error.log
npm-debug.log
.DS_Store
.idea
  `;
  fs.writeFileSync(path.join(targetDir, '.gitignore'), gitignoreContent.trim());
}

const DIRTY_FILES = [
  "node_modules",
  "dist",
  "build",
  ".bun",
  ".bun.lock",
  ".bun.lockb",
  ".yarn.lock",
  "package-lock.json",
  "yarn-error.log",
  "npm-debug.log",
  ".DS_Store",
  '.idea',
];

function copyTemplateFiles(templateName, targetDir, progressBar, totalFiles) {
  const templatePath = path.join(TEMPLATES_DIR, templateName);
  const files = fs.readdirSync(templatePath);

  files.forEach((file) => {
    const src = path.join(templatePath, file);
    const dest = path.join(targetDir, file);

    if (DIRTY_FILES.includes(file)) {
      return;
    }

    if (fs.lstatSync(src).isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      copyTemplateFiles(
        path.join(templateName, file),
        dest,
        progressBar,
        totalFiles
      );
    } else {
      if (!fs.existsSync(src)) {
        console.warn(`Warning: File ${src} is missing.`);
        return;
      }
      fs.copyFileSync(src, dest);
      progressBar.increment();
      const percentage = (progressBar.value / totalFiles) * 100;
      progressBar.update(progressBar.value, {
        percentage: percentage.toFixed(2),
      });
    }
  });
}

async function createProject() {
  const templateNames = getTemplateNames();
  const templateDescriptions = getTemplateDescriptions();

  console.log(`
  ===================================================================
  |                                                                 |
  |           Welcome to the create-frontend package!               |
  |       It's useful for quickly generate a base project           |
  |           🏠 \x1b]8;;https://github.com/Duc-Developer\x1b\\https://github.com/Duc-Developer\x1b]8;;\x1b\\                   |
  |                                                                 |
  ===================================================================
  `);

  const choices = templateNames.map((name) => ({
    name: `${name}${templateDescriptions[name]}`,
    value: name,
  }));

  const answers = await prompt([
    {
      type: "list",
      name: "template",
      message: "Select a template to generate the project:",
      choices,
    },
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "my-app",
    },
    {
      type: "confirm",
      name: "installDependencies",
      message: "Do you want to install dependencies after generated?",
      default: true,
    },
  ]);

  const targetDir = path.join(process.cwd(), answers.projectName);
  const selectedTemplate = answers.template;

  if (fs.existsSync(targetDir)) {
    console.error("Directory already exists! Please choose a different name.");
    process.exit(1);
  }

  fs.mkdirSync(targetDir);

  const totalFiles = countFiles(path.join(TEMPLATES_DIR, selectedTemplate));
  const progressBar = new cliProgress.SingleBar(
    {
      format: "Generating [{bar}] {percentage}% | {value}/{total} files",
    },
    cliProgress.Presets.shades_classic
  );

  progressBar.start(totalFiles, 0);
  copyTemplateFiles(selectedTemplate, targetDir, progressBar, totalFiles);
  progressBar.stop();
  
  generateGitIgnore(targetDir);

  console.log(
    `Project "${answers.projectName}" created from template "${selectedTemplate}"`
  );

  if (answers.installDependencies) {
    const packageManager =
      fs.existsSync(path.join(targetDir, "bun.lockb")) ||
      fs.existsSync(path.join(targetDir, "bun.lock"))
        ? "bun"
        : "npm";
    console.log(`Installing dependencies using ${packageManager}...`);
    execSync(`${packageManager} install`, { cwd: targetDir, stdio: "inherit" });
  }

  console.log("Project setup complete!");
}

function countFiles(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      count += countFiles(filePath);
    } else {
      count += 1;
    }
  });

  return count;
}

createProject().catch((error) => {
  console.error("An error occurred:", error);
});
