// 행렬 계산 값 확인
const arr1 = [[1, 4], [3, 2]];
const arr2 = [[3, 3], [3, 3]];

// 행렬 덧셈 확인
const result_add = [[4, 7], [6, 5]];

const result1 = addMatrix(arr1, arr2);

if (result_add === result1) {
    console.log("덧셈 성공");
} else console.log("덧셈 실패");

// 행렬 뺄셈 확인
const result_minus = [[-2, 1], [0, -1]];

const result2 = minusMatrix(arr1, arr2);

if(result_minus === result2){
    console.log("뺄셈 성공");
} else console.log("뺄셈 실패");

// 행렬 곱셈 확인
const result_mul = [[15, 15],[15, 15]];

const result3 = multiMatrix(arr1, arr2);

if(result_mul === result3){
    console.log("곱셈 성공");
} else console.log("곱셈 실패");
