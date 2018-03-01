/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let s1 = (expressions[1] + (Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0]))) / 4;
    let s2 = (expressions[1] - (Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0]))) / 4;
    let res = [s1, s2];
    res = res.sort();
    console.log(res[0] + '\n' + res[1]);
}