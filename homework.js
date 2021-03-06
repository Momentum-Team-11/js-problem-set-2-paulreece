// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(students, name) {
    let newArray = []
    console.log(students)
    for (let student of students) {
    if (student != name) {
    newArray.push(student)
} console.log(newArray)
}
return newArray
}
// function remove(students){
//     let newarray = []
//     for (let student of students){
//       if (students.indexOf(student) > -1){
//         newarray.push(student)
//           }
//         else {
//             return students
//         }
//         console.log(newarray)
//         return newarray
//     }


// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbs , single) {
    let sum = 0
    for (let single of numbs) {
        sum = sum + single
    }
    return sum
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
    let average = 0
    for (let number of numbers) {
    return average = sum(numbers) / numbers.length
    }
    }

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
    let minimum = Infinity
    for (let number of numbers) {
    return minimum = Math.min(...numbers)
    }
    }
    console.log('minimum: $(min)')

// // function minimum(numbers){
// // let minimum = Infinity
// // for (var i = 0; i < numbers.length; i++) {
// //     if (numbers[i] < minimum) {
// //         minimum = numbers[i];
// //     }
// //     console.log(minimum)
// // }
// // }

// function minimum(numbers) {
//     return Math.min.apply(...numbers)
    
// }


// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(names) {
    return names.toString()
}

