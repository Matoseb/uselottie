
declare global {
  type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;
  type Callback = (event?: any) => void;
}

export {};