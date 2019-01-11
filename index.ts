import { MutationEvent, Storage } from 'kevast/dist/Storage';

export class KevastMemory implements Storage {
  private storage: Map<string, string>;
  public constructor(storage: Map<string, string> = new Map()) {
    if (!(storage instanceof Map)) {
      throw new TypeError('Storage must be a map');
    }
    this.storage = storage;
  }
  public mutate(event: MutationEvent): Promise<void> | void {
    for (const pair of event.set) {
      this.storage.set(pair.key, pair.value as string);
    }
    for (const key of event.removed) {
      this.storage.delete(key);
    }
    if (event.clear) {
      this.storage.clear();
    }
  }
  public get(key: string): Promise<string | undefined> | (string | undefined) {
    return this.storage.get(key);
  }
}
