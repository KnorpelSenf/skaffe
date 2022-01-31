import { createWriteStream } from "fs";
import { Readable } from "stream";

export { lstat as stat } from "fs";
export { basename, join } from "path";

export async function writeData(
  target: string,
  data: AsyncIterable<Uint8Array>,
) {
  const stream = Readable.from(data);
  const file = createWriteStream(target, { encoding: "utf8" });
  stream.pipe(file);
  await new Promise((resolve, reject) => {
    stream.on("end", resolve);
    stream.on("error", reject);
  });
}
