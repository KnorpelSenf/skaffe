import { scaffold } from "https://deno.land/x/skaffe@v1.0.0/mod.ts";

const thisFile = import.meta.url;
const targetDirectory = Deno.cwd(); // using a dir will infer the file name

// Will copy this very source file into the working directory
await scaffold(thisFile, targetDirectory);
