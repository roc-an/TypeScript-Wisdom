Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/packages/B/package.json]
{"main":"lib/index.js","types":"lib/index.d.ts"}

//// [/user/username/projects/myproject/packages/A/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true,"preserveSymlinks":true},"include":["src"],"references":[{"path":"../B"}]}

//// [/user/username/projects/myproject/packages/B/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true,"preserveSymlinks":true},"include":["src"]}

//// [/user/username/projects/myproject/packages/A/src/index.ts]
import { foo } from '@issue/b';
import { bar } from '@issue/b/lib/bar';
foo();
bar();


//// [/user/username/projects/myproject/packages/B/src/index.ts]
export function foo() { }

//// [/user/username/projects/myproject/packages/B/src/bar.ts]
export function bar() { }

//// [/user/username/projects/myproject/node_modules/@issue/b] symlink(/user/username/projects/myproject/packages/B)

/a/lib/tsc.js --w --p /user/username/projects/myproject/packages/A/tsconfig.json
Output::
>> Screen clear
[[90m12:00:45 AM[0m] Starting compilation in watch mode...

[[90m12:00:55 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/packages/A/src/index.ts"]
Program options: {"outDir":"/user/username/projects/myproject/packages/A/lib","rootDir":"/user/username/projects/myproject/packages/A/src","composite":true,"preserveSymlinks":true,"configFilePath":"/user/username/projects/myproject/packages/A/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/packages/B/src/index.ts
/user/username/projects/myproject/packages/B/src/bar.ts
/user/username/projects/myproject/packages/A/src/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/packages/B/src/index.ts
/user/username/projects/myproject/packages/B/src/bar.ts
/user/username/projects/myproject/packages/A/src/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/packages/b/src/index.ts (used version)
/user/username/projects/myproject/packages/b/src/bar.ts (used version)
/user/username/projects/myproject/packages/a/src/index.ts (used version)

WatchedFiles::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/packages/A/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/packages/B/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/packages/a/src/index.ts:
  {"fileName":"/user/username/projects/myproject/packages/A/src/index.ts","pollingInterval":250}
/user/username/projects/myproject/packages/b/src/index.ts:
  {"fileName":"/user/username/projects/myproject/packages/B/src/index.ts","pollingInterval":250}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {"fileName":"/user/username/projects/myproject/packages/B/src/bar.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/packages/b/package.json:
  {"fileName":"/user/username/projects/myproject/packages/b/package.json","pollingInterval":250}
/user/username/projects/myproject/packages/b/lib/bar/package.json:
  {"fileName":"/user/username/projects/myproject/packages/b/lib/bar/package.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/packages/b/src:
  {"directoryName":"/user/username/projects/myproject/packages/b/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/packages/a/src:
  {"directoryName":"/user/username/projects/myproject/packages/A/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
  {"directoryName":"/user/username/projects/myproject/packages/a/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/packages/a/node_modules:
  {"directoryName":"/user/username/projects/myproject/packages/A/node_modules","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/packages/node_modules:
  {"directoryName":"/user/username/projects/myproject/packages/node_modules","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules:
  {"directoryName":"/user/username/projects/myproject/node_modules","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/packages/A/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/packages/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/packages/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/packages/A/lib/index.js]
"use strict";
exports.__esModule = true;
var b_1 = require("@issue/b");
var bar_1 = require("@issue/b/lib/bar");
(0, b_1.foo)();
(0, bar_1.bar)();


//// [/user/username/projects/myproject/packages/A/lib/index.d.ts]
export {};


//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../b/src/index.ts","../b/src/bar.ts","./src/index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"4646078106-export function foo() { }","1045484683-export function bar() { }","8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n"],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,1]],"semanticDiagnosticsPerFile":[1,4,3,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../b/src/index.ts",
      "../b/src/bar.ts",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "../b/src/index.ts",
        "../b/src/bar.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../b/src/index.ts": {
        "version": "4646078106-export function foo() { }",
        "signature": "4646078106-export function foo() { }"
      },
      "../b/src/bar.ts": {
        "version": "1045484683-export function bar() { }",
        "signature": "1045484683-export function bar() { }"
      },
      "./src/index.ts": {
        "version": "8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n",
        "signature": "8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {
      "./src/index.ts": [
        "../b/src/index.ts",
        "../b/src/bar.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/index.ts": [
        "../b/src/index.ts",
        "../b/src/bar.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/index.ts",
      "../b/src/bar.ts",
      "../b/src/index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 916
}

