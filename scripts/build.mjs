import { cp, mkdir, rm, readdir } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(projectRoot, "dist");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const rootFiles = await readdir(projectRoot, { withFileTypes: true });
for (const entry of rootFiles) {
  if (!entry.isFile()) continue;
  const extension = extname(entry.name);
  if ([".html", ".css", ".js"].includes(extension)) {
    await cp(resolve(projectRoot, entry.name), resolve(outputDir, entry.name));
  }
}

await cp(resolve(projectRoot, "assets"), resolve(outputDir, "assets"), { recursive: true });

console.log("Built multi-page static portfolio in dist/");
