# sort-json-keys

[![NPM version][npm-image]][npm-url]
[![dependencies: none][dependencies-none-image]][dependencies-none-url]
[![code style: prettier][prettier-image]][prettier-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![License MIT][license-image]][license-url]

Sort JSON keys alphabetically at all levels (for example for sorting `package-lock.json`).

## Install

Requires `node@14` or higher:

```sh
npm install sort-json-keys --save-dev
```

## Usage

### CLI

Sort all keys in the `foo.json` file in alphabetical order, indented by two spaces (default indentation):

```sh
npx sort-json-keys foo.json
```

For example this converts a JSON-file

```json
{ "b": 1, "a": { "y": 2, "x": 3 }, "c": 4 }
```

to a file

```json
{
  "a": {
    "x": 3,
    "y": 2
  },
  "b": 1,
  "c": 4
}
```

Sort all keys in `foo.json` and `baz/bar.json` files in alphabetical order, indented by two spaces:

```sh
npx sort-json-keys foo.json baz/bar.json
```

Sort all keys in `foo.json` and `bar.json` files, indented by four spaces:

```sh
npx sort-json-keys foo.json bar.json --indent 4
```

Sort all keys in `foo.json` files without indentation (as a one-line file):

```sh
npx sort-json-keys foo.json --indent 0
```

### JavaScript/TypeScript API (CommonJS)

```js
import sortJsonKeys from "sort-json-keys";
// or
import { sortJsonKeys } from "sort-json-keys";

const json = { b: 1, a: 2 };

const sortedJson = sortJsonKeys(json); // { a: 2, b: 1 }
```

## License

[MIT][license-url]

[conventional-commits-image]: https://img.shields.io/badge/Conventional_Commits-1.0.0-yellow.svg "Conventional Commits"
[conventional-commits-url]: https://conventionalcommits.org
[dependencies-none-image]: https://img.shields.io/badge/dependencies-none-success.svg "No dependencies"
[dependencies-none-url]: https://github.com/uid11/sort-json-keys/blob/main/package.json
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg "The MIT License"
[license-url]: https://github.com/uid11/sort-json-keys/blob/main/LICENSE
[npm-image]: https://img.shields.io/npm/v/sort-json-keys.svg "sort-json-keys"
[npm-url]: https://www.npmjs.com/package/sort-json-keys
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg "Prettier code style"
[prettier-url]: https://github.com/prettier/prettier
