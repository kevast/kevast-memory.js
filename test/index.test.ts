import assert = require('assert');
import Kevast = require('kevast');
import KevastMemory = require('../index');

describe('Test basic function', () => {
  const kevast = new Kevast.KevastSync(new KevastMemory());
  it('Get', () => {
    assert(kevast.get('key1') === null);
    assert(kevast.get('key1', 'default') === 'default');
  });
  it('Set', () => {
    kevast.set('key1', 'value1');
    assert(kevast.get('key1') === 'value1');
  });
  it('Has', () => {
    assert(kevast.has('key1') === true);
    assert(kevast.has('key2') === false);
  });
  it('Size', () => {
    kevast.set('key2', 'value2');
    kevast.set('key3', 'value3');
    kevast.set('key4', 'value4');
    assert(kevast.size() === 4);
  });
  it('Delete', () => {
    assert(kevast.has('key4') === true);
    kevast.delete('key4');
    assert(kevast.has('key4') === false);
  });
  it('Entries', () => {
    const source = [...kevast.entries()];
    const target = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
    assert.deepStrictEqual(source, target);
  });
  it('Keys', () => {
    const source = [...kevast.keys()];
    const target = ['key1', 'key2', 'key3'];
    assert.deepStrictEqual(source, target);
  });
  it('Values', () => {
    const source = [...kevast.values()];
    const target = ['value1', 'value2', 'value3'];
    assert.deepStrictEqual(source, target);
  });
  it('Clear', () => {
    kevast.clear();
    assert(kevast.size() === 0);
  });
});
