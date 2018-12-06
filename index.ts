import {ISyncStorage} from 'kevast/dist/nodejs/Storage'

export = class KevastMemory implements ISyncStorage {
  private map: Map<string, string>;
  public constructor() {
    this.map = new Map();
  }
  public clear(): void {
    this.map.clear();
  }
  public has(key: string): boolean {
    return this.map.has(key);
  }
  public delete(key: string): void {
    this.map.delete(key);
  }
  public entries(): IterableIterator<[string, string]> {
    return this.map.entries();
  }
  public get(key: string): string | undefined {
    return this.map.get(key);
  }
  public keys(): IterableIterator<string> {
    return this.map.keys();
  }
  public set(key: string, value: string): void {
    this.map.set(key, value);
  }
  public size(): number {
    return this.map.size;
  }
  public values(): IterableIterator<string> {
    return this.map.values();
  }
}
