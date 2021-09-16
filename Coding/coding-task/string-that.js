function stringThat(separator, ...args) {
  let result = args.join(separator);
  console.log(result);
}

stringThat("!", 4, -10, 34, 0);
