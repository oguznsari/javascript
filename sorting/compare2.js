const RandomIntArrayGenerator = require('./unsortedArray');
const bubbleSort = require('./bubble');
const insertionSort = require('./insertion');
const selectionSort = require('./selection');
const mergeSort = require('./merge');
const quickSort = require('./quick');
const radixSort = require('./radix');

const header = ["arrayLength"];
const bubbleSortTimes = ["bubbleSortTime"];
const insertionSortTimes = ["insertionSortTime"];
const selectionSortTimes = ["selectionSortTime"];
const mergeSortTimes = ["mergeSortTime"];
const quickSortTimes = ["quickSortTime"];
const radixSortTimes = ["radixSortTime"];

for (let i = 10; i < 100000; i *= 10) {
    header.push(i);

    const generator = new RandomIntArrayGenerator(i);

    const unsortedArray = generator.generateArray(1, i * 10);
    const unsortedArray2 = [...unsortedArray];
    const unsortedArray3 = [...unsortedArray];
    const unsortedArray4 = [...unsortedArray];
    const unsortedArray5 = [...unsortedArray];
    const unsortedArray6 = [...unsortedArray];

    // Bubble Sort
    const bubbleSortStartTime = performance.now();
    const bubbleSorted = bubbleSort(unsortedArray);
    const bubbleSortEndTime = performance.now();
    bubbleSortTimes.push(bubbleSortEndTime - bubbleSortStartTime);

    // Insertion Sort
    const insertionSortStartTime = performance.now();
    const insertionSorted = insertionSort(unsortedArray2);
    const insertionSortEndTime = performance.now();
    insertionSortTimes.push(insertionSortEndTime - insertionSortStartTime);

    // Selection Sort
    const selectionSortStartTime = performance.now();
    const selectionSorted = selectionSort(unsortedArray3);
    const selectionSortEndTime = performance.now();
    selectionSortTimes.push(selectionSortEndTime - selectionSortStartTime);

    // Merge Sort
    const mergeSortStartTime = performance.now();
    const mergeSorted = mergeSort(unsortedArray4);
    const mergeSortEndTime = performance.now();
    mergeSortTimes.push(mergeSortEndTime - mergeSortStartTime);

    // Quick Sort
    const quickSortStartTime = performance.now();
    const quickSorted = quickSort(unsortedArray5);
    const quickSortEndTime = performance.now();
    quickSortTimes.push(quickSortEndTime - quickSortStartTime);

    // Radix Sort
    const radixSortStartTime = performance.now();
    const radixSorted = radixSort(unsortedArray6);
    const radixSortEndTime = performance.now();
    radixSortTimes.push(radixSortEndTime - radixSortStartTime);
}

const final = [
    bubbleSortTimes,
    insertionSortTimes,
    selectionSortTimes,
    mergeSortTimes,
    quickSortTimes,
    radixSortTimes
];

console.table(final);
