import { basename, join, stat, writeData } from "./platform.deno.ts";

export async function scaffold(source: string | URL, target: string) {
  const file = await toFile(source, target);
  const data: AsyncIterable<Uint8Array> = await getFile(source);
  await writeData(file, data);
}

export async function getFile(
  source: string | URL,
): Promise<AsyncIterable<Uint8Array>> {
  const resource = await fetch(source);
  const data = resource.body;
  if (data === null) {
    throw new Error(`Resource at ${source} could not be accessed!`);
  }
  return data;
}

export async function toFile(
  sourceFile: string | URL,
  targetDirectoryOrFile: string,
): Promise<string> {
  let result = targetDirectoryOrFile;
  try {
    // If the given target is an existing directory ...
    const { isDirectory } = await stat(targetDirectoryOrFile);
    if (isDirectory) {
      // ... use the source file name in the directory.
      const path = typeof sourceFile === "string"
        ? sourceFile
        : sourceFile.pathname;
      result = join(targetDirectoryOrFile, basename(path));
    }
  } catch {
    // Failed to stat, do not infer filename
  }
  return result;
}
