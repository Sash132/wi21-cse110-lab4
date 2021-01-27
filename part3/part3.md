# DevTools - Debugging
- The bug in this situation was that the two inputs that were provided by the user were being treated as strings so whenever the `+` operation was attempting to add them, it would treat the inputs as strings and would instead concatenate them together. This is why when you would try to add numbers like `4` and `3` together, the result would come out to `43` when it should have been `7`.
- The change I made to the code was explicitly type casting both `num1` and `num2` to Number variables such that when the `+` operation takes place, it will add them instead of concatenating. Below is the image of the fix I implemented:
![code_fix](https://github.com/Sash132/wi21-cse110-lab4/blob/master/part3/code_fix.jpg)

# DevTools - Network Tab
1. The name of the new json file is **`citylots.json`**.
2. The file that initiated the download of the new file is **`part2.js`**.
3. The file size is **`11.7`** megabytes.
4. It took **`146`** milliseconds for the file to download.
5. My User-Agent for the browser that made the request was: **Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36**
6. The server that the response came from was: **Apache**.
7. The file was last modified on the following date: **Tue, 26 Jan 2021 22:14:13 GMT**
8. The Content-Type of the file is: **application/json**
9. The method that made the request inside the initiating file was: **FetchData**.
