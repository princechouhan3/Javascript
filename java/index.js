// function abcd(){
//     for(var i=1; i=12; i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// abcd()
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function compare(a: Number, b: Number): Number {
//     if (a < b) {
//         console.log("a chota hai b sey")
//         return b
//     }
//     else {
//         console.log("b chota hai a sey")
//         return a
//     }
// }
// console.log(compare(1, 2))
var a = [1, 2, 3, 4, 5];
var b = __spreadArray([], a, true);
b.pop();
console.log(a);
