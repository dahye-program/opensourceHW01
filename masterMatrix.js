// 2X2 행렬 덧셈 함수
const addMatrix = (arr1, arr2) => {
    let answer = Array();

    for(let i=0; i<arr1.length; i++){
        answer[i] = [];
        for(let j=0; j<arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
    // return arr1.map((a,i)=>a.map((b,j)=>b+arr2[i][j]));
}

// 2X2 행렬 뺄셈 함수
const minusMatrix = (arr1, arr2) => {
    let answer = Array();

    for(let i=0; i<arr1.length; i++){
        answer[i] = [];
        for(let j=0; j<arr1[0].length; j++){
            answer[i][j] = arr1[i][j] - arr2[i][j];
        }
    }
    return answer;
    // return arr1.map((a,i)=>a.map((b,j)=>b-arr2[i][j]));
}