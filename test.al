fw A = [[1,2],[3,4]]
fw B = [[5,6],[7,8]]
fw C = [[0,0],[0,0]]

ts n = 2

milk(i = 0; i < n; i = i + 1){

  milk(j = 0; j < n; j = j + 1){

    fw sum = 0

    milk(k = 0; k < n; k = k + 1){
      sum = sum + A[i][k] * B[k][j]
    }

    C[i][j] = sum

  }

}

gugugaga("Result Matrix:")

milk(i = 0; i < n; i = i + 1){
  fw row = ""

  milk(j = 0; j < n; j = j + 1){
    row = row + C[i][j] + " "
  }

  gugugaga(row)
}