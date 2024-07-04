const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800"]
function mul2(num){
  return num * 2
}
let result1 = array1.map(mul2)

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
function string(num){
  return num = num.toString()
}
let result2 = array2.map(string)

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
function typeOf(num){
  return num = typeof num
}
let result3 = array3.map(typeOf)
