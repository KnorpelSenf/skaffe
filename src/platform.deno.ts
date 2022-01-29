import {
  copy,
  readerFromIterable,
} from "https://deno.land/std@0.123.0/streams/mod.ts";

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
