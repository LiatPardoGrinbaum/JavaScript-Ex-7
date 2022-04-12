const arr = [3, 4, 4, 3, 6, 3];

const removeDupli = (arr) => {
  const arrNew = [];

  for (let x of arr) {
    if (arrNew.indexOf(x) === -1) {
      arrNew.push(x);
    }
  }
  return arrNew;
};

console.log(removeDupli(arr));
