// var x, y;
// x = 10;
// y = 5;
// var sum = x + y;
// var sub = x - y;
// var mul = x * y;
// var div = x / y;
// console.log("value x =" + x);
// console.log("value y =" + y);
// console.log("Sum = " + sum);
// console.log("sub = " + sub);
// console.log("mul = " + mul);
// console.log("div = " + div); 

// var id = 101;
// var name = "Dara";
// var gender = "Male";
// var salary = 500.5;
// var position = "IT";
// var address = "#23344 34st PP";
// var isActive = true;


// var display = id + "\t" + name + "\t" + gender + "\t" + salary + "\t" + position + "\t" + address;
// console.log(display);


var A = [1, 2, 4, 56, 78, 100, 3, 4, 5, 6, 5555, 10, 999, 222];//array
console.log(A.length);//get length of array
console.log(A[0]);
console.log(A[A.length - 1]);//get last element of array

for (var i = 0; i < A.length; i++) {
    if (A[i] == 5555) {
        console.log("5555 at index :" + i);
        break;
    }
}