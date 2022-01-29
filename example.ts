import { scaffold } from "https://deno.land/x/skaffe@v1.0.0/mod.ts";
import { join } from "https://deno.land/std@0.123.0/path/mod.ts";

const thisFile = import.meta.url;
const targetFile = join(Deno.cwd(), "example.ts");

// Will copy this very source file into the working directory
await scaffold(thisFile, targetFile);
