type First<T extends any[]> = T extends {length:0}?never:T[0]

// 답지보니 이런 풀이도 있음 이게 의도한 답인듯
// 타입스크립트에서 spread 문법과 infer를 사용해서 평가를 늦추는 방법
// type First<T extends any[]> = T extends [infer P,...unknown[]]?P:never;