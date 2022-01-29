import { writeData } from "./platform.deno.ts";

export async function scaffold(source: string | URL, target: string) {
  const data: AsyncIterable<Uint8Array> = await getFile(source);
  await writeData(target, data);
}

export async function getFile(
  source: string | URL,
): Promise<AsyncIterable<Uint8Array>> {
  if (typeof source === "string") source = new URL(source);
  const resource = await fetch(source);
  const data = resource.body;
  if (data === null) {
    throw new Error(`Resource at ${source.href} could not be accessed!`);
  }
  return data;
}
