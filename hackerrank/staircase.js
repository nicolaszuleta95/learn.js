function staircase(n) {
  let str = "#";
  const space = " ";
  for (let i = 1; i <= n; i++) {
    let line = str.repeat(i);
    let inSpace = space.repeat(n - i);
    let full = inSpace.concat(line);

    console.log(full);
  }
}

staircase(4);
