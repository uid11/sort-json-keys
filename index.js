#!/usr/bin/env node

'use strict';

const {readFileSync, writeFileSync} = require('fs');

const {compare} = new Intl.Collator('en');

const sortJsonKeys = (json) => {
  if (Array.isArray(json)) {
    return json.map(sortJsonKeys);
  }

  if (json !== null && typeof json === 'object') {
    const keys = Object.keys(json).sort(compare);
    const result = {};

    for (const key of keys) {
      result[key] = sortJsonKeys(json[key]);
    }

    return result;
  }

  return json;
};

const sortFile = (pathToFile, indent) => {
  const fileText = readFileSync(pathToFile, 'utf8');
  const json = JSON.parse(fileText);

  const sortedJson = sortJsonKeys(json);
  const sortedJsonText = JSON.stringify(sortedJson, null, indent);

  writeFileSync(pathToFile, sortedJsonText);
};

if (require.main && require.main.id === module.id) {
  let indent;
  const args = process.argv.slice(2);
  const files = [];

  while (args.length !== 0) {
    const arg = args.shift();

    if (arg === '--indent') {
      indent = Number(args.shift());
    } else {
      files.push(arg);
    }
  }

  for (const file of files) {
    sortFile(file, indent === 0 ? 0 : indent || 2);
  }
}

module.exports = sortJsonKeys;
module.exports.default = sortJsonKeys;
module.exports.sortJsonKeys = sortJsonKeys;
