const BubbleSort = ( numberArr:number[] ): number[] => {
  if(numberArr.length > 1) {
    for(let i = 0; i < numberArr.length - 1; i++) {
      for(let j = 0; j < numberArr.length - 1 - i; j++) {
        if(numberArr[j] > numberArr[j + 1]){
          numberArr[j + 1] = numberArr[j + 1] + numberArr[j]
          numberArr[j] = numberArr[j + 1] - numberArr[j]
          numberArr[j + 1] = numberArr[j + 1] - numberArr[j]
        }
      }
    }
    return numberArr
  } else {
    return numberArr
  }
}

console.log(BubbleSort([2,3,1,4,5,1,3,4,9]))
