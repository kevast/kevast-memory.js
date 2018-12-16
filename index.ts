import { Pair } from 'kevast/dist/Pair';
import { IMutationEvent, IStorage } from 'kevast/dist/Storage';

export class KevastMemory implements IStorage {
  private storage: Map<string, string>;
  public constructor(storage: Map<string, string> = new Map()) {
    this.storage = storage;
  }
  public mutate(event: IMutationEvent) {
    for (const pair of event.added) {
      this.storage.set(pair[0], pair[1]);
    }
    for (const pair of event.changed) {
      this.storage.set(pair[0], pair[1]);
    }
    for (const pair of event.removed) {
      this.storage.delete(pair[0]);
    }
  }
  public init(): Map<string, string> {
    return this.storage;
  }
}
