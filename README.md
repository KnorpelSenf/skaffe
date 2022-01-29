# Skaffe—building block for hybrid scaffolding tools

This library provides a simple way to copy around files that were shipped with
your hybrid Deno/Node scaffolding CLI.

You can easily try this library from Deno.

```shellscript
deno run -A https://raw.githubusercontent.com/KnorpelSenf/skaffe/main/example.ts
```

This will demo the scaffolding by copying the example file itself into the
current working directory.

## Deno Example

Use the following code.

```ts
import { scaffold } from "https://deno.land/x/skaffe@v1.0.0/mod.ts";
import { join } from "https://deno.land/std@0.123.0/path/mod.ts";

const thisFile = import.meta.url;
const targetFile = join(Deno.cwd(), "target-file.ts");

// Will copy this very source file into the working directory
await scaffold(thisFile, targetFile);
```

## Node Example

Run

```shellscript
npm i skaffe
```

and use the following code.

```ts
const { scaffold } = require("skaffe");
const { join } = require("path");

const thisFile = __filename;
const targetFile = join(process.cwd(), "target-file.js");

// Will copy this very source file into the working directory
scaffold(thisFile, targetFile);
```

## Why?

Deno modules can be on a remote host. They can also be local files. Node modules
are always local.

Writing files works differently on Deno and Node, too.

When you are writing a scaffolding tool that ships a number of config files and
source files, you can use `skaffe` to simply copy these files into the user's
working directory. The library will download the file from a remote host if
you're running a Deno script from remote, and it will copy over the files if
you're running a local Deno script or if you're using Node.

As a result, you can focus on building an intuitive scaffolding tool for Deno
and Node, and let `skaffe` do the nasty part.

## What's in a Name?

The word _skaffe_ is Norwegian and means _provide_.
It also looks similar to the prefix of _scaffolding_.
