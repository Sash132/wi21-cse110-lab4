# DevTools - Debugging
- The bug in this situation was that the two inputs that were provided by the user were being treated as strings so whenever the `+` operation was attempting to add them, it would treat the inputs as strings and would instead concatenate them together. This is why when you would try to add numbers like `4` and `3` together, the result would come out to `43` when it should have been `7`.
- The change I made to the code was explicitly type casting both `num1` and `num2` to Number variables such that when the `+` operation takes place, it will add them instead of concatenating. Below is the image of the fix I implemented:
![code_fix](https://github.com/Sash132/wi21-cse110-lab4/blob/master/part3/code_fix.jpg)
