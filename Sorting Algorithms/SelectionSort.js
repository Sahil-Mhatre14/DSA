const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

 function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestValueIndex = i
        for (let j = i; j < array.length; j++) {
            if (array[j]<array[smallestValueIndex]) {
                smallestValueIndex = j
            }
        }
        let temp = array[i];
        array[i] = array[smallestValueIndex];
        array[smallestValueIndex] = temp
    }

    return array
 }

 selectionSort(numbers);
 console.log("Sorted array", numbers)