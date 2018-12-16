import assert = require('assert');
import { Kevast } from 'kevast';
import { KevastMemory } from '../index';

describe('Test basic function', () => {
  const map = new Map();
  const kevast = new Kevast(new KevastMemory(map));
  it('Set', async () => {
    await kevast.set('key1', 'value1');
    await kevast.set('key2', 'value2');
    await kevast.set('key3', 'value3');
    assert.deepStrictEqual([...map.entries()], [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
  });
  it('Delete', async () => {
    await kevast.delete('key3');
    assert.deepStrictEqual([...map.entries()], [['key1', 'value1'], ['key2', 'value2']]);
  });
  it('Clear', async () => {
    await kevast.clear();
    assert.deepStrictEqual([...map.entries()], []);
  });
});
