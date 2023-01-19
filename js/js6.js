let arr = [1, "str" ,3 ,{a:1, b:2}, 5];
let sum = 1;
for (let i = -1; arr.length > i; i++) {
    if (arr.length == '1') {
        console.log("В массиве 1 элемент");
        break;
    } else if (arr[i] == arr[i + 1]) {
        sum += 1;
        continue;
    } 
}
if (sum == arr.length) {
    console.log("Весь массив одинаковый");
} else{
    console.log("Весь массив разный");
}