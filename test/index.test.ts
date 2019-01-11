import assert = require('assert');
import { Kevast } from 'kevast';
import { KevastMemory } from '../index';

describe('Test basic function', () => {
  let kevast: Kevast;
  let map: Map<string, string>;
  before(async () => {
    map = new Map();
    kevast = new Kevast(new KevastMemory(map));
  });
  it('Construction', async () => {
    let kevastMemory: KevastMemory;
    kevastMemory = new KevastMemory();
    const tmp = new Kevast(kevastMemory);
    await tmp.set('key', 'value');
    assert(await tmp.get('key') === 'value');
    assert.throws(() => {
      const _ = new KevastMemory('string' as any as Map<string, string>);
    });
  });
  it('Get', async () => {
    map.set('key', 'value');
    assert(await kevast.get('key') === 'value');
    kevast.remove('key');
  });
  it('Set', async () => {
    await kevast.set('key1', 'value1');
    await kevast.set('key2', 'value2');
    await kevast.set('key3', 'value3');
    assert.deepStrictEqual([...map.entries()], [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
  });
  it('Delete', async () => {
    await kevast.remove('key3');
    assert.deepStrictEqual([...map.entries()], [['key1', 'value1'], ['key2', 'value2']]);
  });
  it('Clear', async () => {
    await kevast.clear();
    assert.deepStrictEqual([...map.entries()], []);
  });
});
