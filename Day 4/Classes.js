/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

    class Polygon {
        constructor(array) {
            this.array = array;
        }
        
        perimeter() {
            for (var i = 0, sum = 0; i < this.array.length; ++i) {
                sum += this.array[i];
            }
            return sum;
        }
    }