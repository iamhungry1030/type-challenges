type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited2<U> : never;

type MyAwaited2<T> = T extends Promise<infer U> ? MyAwaited2<U> : T