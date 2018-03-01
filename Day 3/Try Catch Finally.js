/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }
    catch (error) {
        console.log("s.split is not a function");
    }
    finally {
        console.log(s);
    }
}