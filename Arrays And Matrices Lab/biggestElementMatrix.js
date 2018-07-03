function biggestElementInMatrix(matrix) {


  let biggestElement=Number.NEGATIVE_INFINITY;matrix.forEach(
      row=>row.forEach(
          col=>biggestElement=Math.max(col,biggestElement)
      )
  )

console.log(biggestElement)

}

biggestElementInMatrix([[2,3,5,6,10],[100,5,1,5,7,1,5,8,1]]);