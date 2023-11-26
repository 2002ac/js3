/* 1-ci hisse */

console.log(Fun([1,2,3,4,5], 4));

function Fun(array, nummbers) {

  let newArr = [];

  for (let i = 0; i < nummbers; i++) {
    newArr.push(array[i]);
  }

  return newArr;
}

  /* 2-ci hisse */

  console.log(findMultiples(2, 6));
  console.log(findMultiples(5, 30));

  function findMultiples(number , limit) {

  let array = [];

  for (let i = number; i <= limit; i *= 2) {
    array.push(i);
  }

  return array;
}

/* 3-cu hisse */

console.log(count(10)); 

  function count(nomre) {
  const result = [];

  for (let i = 1; i <= nomre; i++) {
    result.push(i);
    
  }

  return result;
}


