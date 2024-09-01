type MyExclude<T, U> = T extends U? never: T

// 분배 조건부 타입을 배워서 품
// 조건부 타입이 유니온에 적용될 때 그 유니온 타입의 개별 요소에 조건을 분배하여 평가후 합침
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>의 경우 분배가 아래와 같이 이루어짐
// ("a" extends U ? never : "a") | ("b" extends U ? never : "b") | ("c" extends U ? never : "c")
