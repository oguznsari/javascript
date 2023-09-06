const RandomIntArrayGenerator = require('./unsortedArray');
const bubbleSort = require('./bubble');
const insertionSort = require('./insertion');
const selectionSort = require('./selection');
const mergeSort = require('./merge');
const quickSort = require('./quick');
const radixSort = require('./radix');

const header = ["arrayLength"];
const algorithms = {
  bubbleSort: bubbleSort,
  insertionSort: insertionSort,
  selectionSort: selectionSort,
  mergeSort: mergeSort,
  quickSort: quickSort,
  radixSort: radixSort,
};

// Create an array of array length values
const arrayLengths = Array.from({ length: 5 }, (_, i) => Math.pow(10, i + 1));

// Measure execution times for each algorithm and array length
const data = {};

for (const [algorithmName, sortFunction] of Object.entries(algorithms)) {
  data[algorithmName] = {};
  
  for (const length of arrayLengths) {
    const generator = new RandomIntArrayGenerator(length);
    const unsortedArray = generator.generateArray(1, length * 10);
    
    const startTime = performance.now();
    const sortedArray = sortFunction([...unsortedArray]);
    const endTime = performance.now();
    
    const executionTime = endTime - startTime;
    data[algorithmName][length] = executionTime.toFixed(4) + 'ms';
  }
}

// Convert data to an array of objects for console.table
const tableData = arrayLengths.map((length) => {
  const rowData = { arrayLength: length };
  for (const algorithmName of Object.keys(data)) {
    rowData[algorithmName] = data[algorithmName][length];
  }
  return rowData;
});

// Print the table
console.table(tableData);