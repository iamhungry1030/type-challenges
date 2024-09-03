type If<C extends boolean, T, F> = C extends boolean?C extends true ? T : F: never;
