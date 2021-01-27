1. On line 11, `i` will be logged to the console and will therefore log `4` when using the args from Question 4. This is because `i` was declared with `var` and variables declared with `var` have no block scope so even though `i` was declared within a for loop, that variable will continue to exist in the function even when the for loop has finished.

2. On line 12, `discountedPrice` will be logged to the console and will therefore log `150` when using the args from Question 4. This is because `discountedPrice` was declared with `var` and variables declared with `var` have no block scope so even though `discountedPrice` was declared within a for loop, that variable will continue to exist in the function even when the for loop has finished.

3. On line 13, `finalPrice` will be logged to the console and will therefore log `150` when using the args from Question 4. This is because the variable is declared at the beginning of the function and is also logged within that same function. Therefore, the variable is inside the scope of the function the entire time.

4. If we call `discountPrices([100,200,300],.5)`, the function will use a for loop to iterate through the elements of `prices` which are 100, 200, and 300. Then, it will take each of these elements and multiply it by 0.5 in the for loop. Next, it will take each of these newly calculated values and round them to two decimal places. Then finally, each of these elements are pushed to a variable `discounted` which will then be returned containing `[50, 100, 150]`.

5. On line 11, `i` will not be logged to the console and you will instead be presented with an error. This is because `i` was declared with `let` and variables declared with `let` are only visible inside of the code block in which they are declared. So, since `i` was declared within a for loop, that variable will not be visible to line 11 because it is not in the code block.

6. On line 12, `discountedPrice` will not be logged to the console and you will instead be presented with an error. This is because `discountedPrice` was declared with `let` and variables declared with `let` are only visible inside of the code block in which they are declared. So, since `discountedPrice` was declared within a for loop, that variable will not be visible to line 12 because it is not in the code block.

7. On line 13, `finalPrice` will be logged to the console and will therefore log `150` when using the args from Question 4. This is because the variable is declared at the beginning of the function outside of any block and is also logged within that same function. Therefore, the variable is inside the scope of the function the entire time.

8. If we call `discountPrices([100,200,300],.5)`, the function will use a for loop to iterate through the elements of `prices` which are 100, 200, and 300. Then, it will take each of these elements and multiply it by 0.5 in the for loop. Next, it will take each of these newly calculated values and round them to two decimal places. Then finally, each of these elements are pushed to a variable `discounted` which will then be returned containing `[50, 100, 150]`.

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
