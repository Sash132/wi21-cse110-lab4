1. On line 11, `i` will be logged to the console and will therefore log `4` when using the args from Question 4. This is because `i` was declared with `var` and variables declared with `var` have no block scope so even though `i` was declared within a for loop, that variable will continue to exist in the function even when the for loop has finished.

2. On line 12, `discountedPrice` will be logged to the console and will therefore log `150` when using the args from Question 4. This is because `discountedPrice` was declared with `var` and variables declared with `var` have no block scope so even though `discountedPrice` was declared within a for loop, that variable will continue to exist in the function even when the for loop has finished.

3. On line 13, `finalPrice` will be logged to the console and will therefore log `150` when using the args from Question 4. This is because the variable is declared at the beginning of the function and is also logged within that same function. Therefore, the variable is inside the scope of the function the entire time.

4. If we call `discountPrices([100,200,300],.5)`, the function will use a for loop to iterate through the elements of `prices` which are 100, 200, and 300. Then, it will take each of these elements and multiply it by 0.5 in the for loop. Next, it will take each of these newly calculated values and round them to two decimal places. Then finally, each of these elements are pushed to a variable `discounted` which will then be returned containing `[50, 100, 150]`.

5. On line 11, `i` will not be logged to the console and you will instead be presented with an error. This is because `i` was declared with `let` and variables declared with `let` are only visible inside of the code block in which they are declared. So, since `i` was declared within a for loop, that variable will not be visible to line 11 because it is not in the code block.

6. On line 12, `discountedPrice` will not be logged to the console and you will instead be presented with an error. This is because `discountedPrice` was declared with `let` and variables declared with `let` are only visible inside of the code block in which they are declared. So, since `discountedPrice` was declared within a for loop, that variable will not be visible to line 12 because it is not in the code block.

7. On line 13, `finalPrice` will be logged to the console and will therefore log `150` when using the args from Question 8. This is because the variable is declared at the beginning of the function outside of any block and is also logged within that same function. Therefore, the variable is inside the scope of the function the entire time.

8. Assuming assignments from previous questions were successful, if we call `discountPrices([100,200,300],.5)`, the function will use a for loop to iterate through the elements of `prices` which are 100, 200, and 300. Then, it will take each of these elements and multiply it by 0.5 in the for loop. Next, it will take each of these newly calculated values and round them to two decimal places. Then finally, each of these elements are pushed to a variable `discounted` which will then be returned containing `[50, 100, 150]`.

9. On line 11, `i` will not be logged to the console and you will instead be presented with an error. This is because `i` was declared with `const` and variables declared with `const` are only visible inside of the code block in which they are declared. So, since `i` was declared within a for loop, that variable will not be visible to line 11 because it is not in the code block.

10. On line 12, `discountedPrice` will not be logged to the console and you will instead be presented with an error. This is because `discountedPrice` was declared with `const` and variables declared with `const` are only visible inside of the code block in which they are declared. So, since `discountedPrice` was declared within a for loop, that variable will not be visible to line 12 because it is not in the code block.

11. On line 13, `finalPrice` will not be logged to the console and you will instead be presented with an error. This is because `finalPrice` was declared with `const` and variables declared with `const` cannot have their values changed after declaration. Since the function attempts to change the value of `finalPrice` in the for loop, you will be presented with an error.

12. Assuming assignments from previous questions were successful, if we call `discountPrices([100,200,300],.5)`, the function will use a for loop to iterate through the elements of `prices` which are 100, 200, and 300. Then, it will take each of these elements and multiply it by 0.5 in the for loop. Next, it will take each of these newly calculated values and round them to two decimal places. Although, when it attempts to assign these values to `finalPrices`, we will be presented with an error because we cannot reassign the value of a variable decalred with `const`. Therefore, the function will not return anything.

13. 
  - A. `student.name`
  - B. `student['Grad Year']`
  - C. `student.greeting()`
  - D. `student['Favorite Teacher'].name`
  - E. `student.courseLoad[0]`

14.
  - A. `32` since the `+` operation will concatenate `2` to the already existing string `'3'`.
  - B. `1` since the `-` operation will convert the existing string `'3'` to a number and then subtract `2` from it.
  - C. `3` since the `+` operation will convert `null` to `0` and then add it to the already existing number `3`.
  - D. `3null` since the `+` operation will convert `null` to a string and then concatenate it to the already existing string `'3'`.
  - E. `4` since the `+` operation will convert `true` to `1` and then add it to the already existing number `3`.
  - F. `0` since the `+` operation will convert both `false` and `null to `0` and then add them together.
  - G. `3undefined` since the `+` operation will convert `undefined` to a string and then concatenate it to the already existing string `"3"`.
  - H. `NaN` since the `-` operation will convert the existing string `"3"` to a number and `undefined` to `NaN`, leading the subtraction operation to result in `NaN`.
  
15.
  - A. `true` since the '>' operation converts the existing string `'2'` to a number which will then check to verify if 2 is greater than 1.
  - B. `false` since the comparison of strings through lexicographic order would indicate that `'2'` is "larger" than `'12'`.
  - C. `true` since the `==` operation converts the existing string `'2'` to a number which will then check to verify if 2 is equal to 2.
  - D. `false` since the `===` operation will compare both values without performing any type conversions (leading to a comparison of a number to a string).
  - E. `false` since the `==` operation converts `true` to `1` which will then check to verify if 1 is equal to 2.
  - F. `true` since the `===` operation will compare both values without performing any type conversions unless explicitly stated. Since there is an explicit Boolean type conversion for `2`, it will be converted to `true` to then verify if `true` is indeed equal to `true.
  
16. The `==` operator will perform equality comparisons and will also perform type conversions if it is necessary to be done before a comparison can be made. The `===` will also perform equality comparisons but unlike the `==` operator, it will not perform any type conversions unless they are explicitly stated.

17. From the code snippet provided, the phrase "How are you?" will be logged to the console. This is because the first if statement will attempt to compare `2` with `true` using an `==` operation. The `==` operation will convert `true` to `1` at which point with will check if `2` is equal to `1`. Since it is not, the comparison will return false and therefore, the if statement condition is false. Then, the next else if statement is checked. The condition of this statement is `2`. Since it is in an if statement condition, it will be converted to a Boolean value and since `2` is not equal to `0`, it will be converted to `true`. Thus, this if statement will be entered the console will log the phrase "How are you?". Since the remainder of the code is an else statement, nothing else will be logged.

18. The answer to this question can be found in the file `part1-question18.js`.

19. If the function provided is called with as `modifyArray([1,2,3], doSomething)`, then `2` will be added to every value of the array as it will enter the doSomething function. Then, once it exits the doSomething function, each value will be multiplied by 2. After both of these operations are complete, the values will be pushed to the newArr which is which what will be returned at the end of the function call. This newArr array will be `[6,8,10]` because each value of the inputted array will be summed with 2 and then doubled.

20. The answer to this question can be found in the file `part1-question20.js`.

21. The order in which the numbers are logged are as follows: `1`, `4`, `3`, and `2`. The first number that is logged to the console is `1`. This is because it is the first line of code and isn't part of a setTimeout function. The second number that is logged is `4`. This is because it also is not part of a setTimeout function; even though `3`'s timeout delay is 0 milliseconds, the act of using the setTimeout function with a `0` or omission of the parameter indicates that it belongs to the next event cycle. Since `4` is part of the same event cycle as `1` because they both are not in setTimeout functions, `4` will be the number that is logged to the console after `1`. The next number that is logged to the console is `3` because it has the shortest delay out of the numbers that are in a setTimeout function. The last number that is logged to the console is `2` because it has a delay of 1000 milliseconds, the longest out of the four numbers being logged in this code snippet.
