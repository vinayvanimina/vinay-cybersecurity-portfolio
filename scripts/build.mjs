import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(projectRoot, "dist");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  await cp(resolve(projectRoot, file), resolve(outputDir, file));
}

await cp(resolve(projectRoot, "assets"), resolve(outputDir, "assets"), {
  recursive: true,
});

console.log("Built static assets in dist/");
