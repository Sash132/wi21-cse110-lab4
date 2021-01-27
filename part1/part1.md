1. On line 11, `console.log(i)` will print prices.length. This is because variables declared with `var` have no block scope so even though `i` was declared within a for loop, that variable will continue to exist in the function even when the for loop has finished. Therefore, it will print whatever the last value of `i` was by the time it exited the for loop.
2. On line 12, `console.log(discountedPrice)` will print `prices[prices.length-1] * (1 - discount)`. This is because variables declared with `var` have no block scope so even though `discountedPrice` was declared within a for loop, that variable will continue to exist in the function even when the for loop has finished. Therefore, it will print whatever the last value of `discountedPrice` was by the time it exited the for loop.
3. 
4.
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
15.
16.
17.
18.
19.
20.
21.
