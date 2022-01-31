import {
  copy,
  readerFromIterable,
} from "https://deno.land/std@0.123.0/streams/mod.ts";

export { basename, join } from "https://deno.land/std@0.123.0/path/mod.ts";
export const isDirectory = (path: string) =>
  Deno.stat(path).then((info) => info.isDirectory);

export async function writeData(
  target: string,
  data: AsyncIterable<Uint8Array>,
) {
  const reader = readerFromIterable(data);
  const writer = await Deno.open(target, { createNew: true, write: true });
  try {
    await copy(reader, writer);
  } finally {
    writer.close();
  }
}
