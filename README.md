# kevast-memory.js
A memory storage for [kevast.js](https://github.com/kevast/kevast.js).

Unless you are testing or in some special cases, try not to use this storage, because kevast uses memory by default.

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
  const kevast = await Kevast.create(new KevastMemory());
  await kevast.set('key', 'value');
  assert(kevast.get('key') === 'value');
})();
```

Specify Map:
```javascript
const { Kevast } = require('kevast');
const { KevastMemory } = require('kevast-memory');
const assert = require('assert');

(async () => {
  const map = new Map();
  const kevast = await Kevast.create(new KevastMemory(map));
  await kevast.set('key', 'value');
  assert(map.get('key') === 'value');
})();
```
