type MyAwaited<T> = T extends Promise<infer U> ? U : never;

