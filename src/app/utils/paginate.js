import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

function getLowerCase(str) {
  const res = [];
  const arr = str.split("");

  for (let i = 0; i <= arr.length; i++) {
    arr[i];
    if (arr[i].toLowerCase() === arr[i]) {
      res.push(arr[i]);
    }
  }
}

getLowerCase("UcUNFYGaFYFYGtNUH");
