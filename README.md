# kevast-memory.js
[![Build Status](https://img.shields.io/travis/kevast/kevast-memory.js.svg?style=flat-square)](https://travis-ci.org/kevast/kevast-memory.js)
[![Coverage Status](https://img.shields.io/coveralls/github/kevast/kevast-memory.js.svg?style=flat-square)](https://coveralls.io/github/kevast/kevast-memory.js?branch=master)
[![Dependencies](https://img.shields.io/david/kevast/kevast-memory.js.svg?style=flat-square)](https://david-dm.org/kevast/kevast-memory.js)
[![Dev Dependencies](https://img.shields.io/david/dev/kevast/kevast-memory.js.svg?style=flat-square)](https://david-dm.org/kevast/kevast-memory.js?type=dev)
[![Package Version](https://img.shields.io/npm/v/kevast-memory.svg?style=flat-square)](https://www.npmjs.com/package/kevast-memory)
[![Open Issues](https://img.shields.io/github/issues-raw/kevast/kevast-memory.js.svg?style=flat-square)](https://github.com/kevast/kevast-memory.js/issues)
[![MIT License](https://img.shields.io/npm/l/kevast-memory.svg?style=flat-square)](https://github.com/kevast/kevast-memory.js/blob/master/LICENSE)

A memory storage for [kevast.js](https://github.com/kevast/kevast.js).

## Installation
### Node.js
Using yarn
```bash
yarn add kevast-memory
```

Using npm
```bash
npm install kevast-memory
```

### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/kevast-memory/dist/index.min.js"></script>
```

## Usage
```javascript
const { Kevast } = require('kevast');
const { KevastMemory } = require('kevast-memory');
const assert = require('assert');

(async () => {
  const kevast = new Kevast(new KevastMemory());
  await kevast.set('key', 'value');
  assert(await kevast.get('key') === 'value');
})();
```

Specify Map:
```javascript
const { Kevast } = require('kevast');
const { KevastMemory } = require('kevast-memory');
const assert = require('assert');

(async () => {
  const map = new Map();
  const kevast = new Kevast(new KevastMemory(map));
  await kevast.set('key', 'value');
  assert(map.get('key') === 'value');
})();
```
