import { createReadStream } from "fs";
import { URL } from "url";
export { URL };

interface FetchResult {
  body: AsyncIterable<Uint8Array>;
}

export function fetch(source: string | URL): Promise<FetchResult> {
  if (typeof source !== "string" && source.protocol !== "file:") {
    throw new Error("Can only read local files!");
  }
  const body = createReadStream(source, { encoding: "utf8" });
  return Promise.resolve({ body });
}
