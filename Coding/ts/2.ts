/*
  ### Question
  
  Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F. C is expected to be either true or false while T and F can be any type.
  
  For example:
  
 
ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  
*/

/* ___ Your Code Here ___ */

type If<C, T, F> = < C ? T : F>;

/* ___ Test Cases ___ */

type cases = [
  If<true, "a", "b">, "a",
  If<false, "a", 2>, 2
];

// @ts-ignore
type error = If<null, "a", "b">;