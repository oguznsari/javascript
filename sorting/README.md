# TODO
Since the performance changes with the data. <br>
We can provide data into comparison script and pick the best sorting algorithm as for our needs.

|bubbleSort|insertionSort|selectionSort|mergeSort|quickSort|radixSort|
|---|---|---|---|---|---|
|$O(n^2)$|$O(n^2)$|$O(n^2)$|$O(n log(n))$|$O(n log(n))$| ??? |

### Run
``` javascript
node compare.js
```

### Output
``` javascript
┌─────────┬─────────────┬────────────────┬───────────────┬───────────────┬───────────────┬─────────────┬─────────────┐
│ (index) │ arrayLength │   bubbleSort   │ insertionSort │ selectionSort │   mergeSort   │  quickSort  │  radixSort  │
├─────────┼─────────────┼────────────────┼───────────────┼───────────────┼───────────────┼─────────────┼─────────────┤
│    0    │     10      │   '0.1183ms'   │  '0.0925ms'   │  '0.2563ms'   │  '0.1634ms'   │ '0.1451ms'  │ '0.2216ms'  │
│    1    │     100     │   '0.1711ms'   │  '0.0893ms'   │  '0.1195ms'   │  '0.1496ms'   │ '0.0652ms'  │ '0.0886ms'  │
│    2    │    1000     │   '2.0928ms'   │  '1.7851ms'   │  '2.9058ms'   │  '1.9384ms'   │ '0.7556ms'  │ '0.8054ms'  │
│    3    │    10000    │  '111.1685ms'  │  '24.6585ms'  │  '60.5355ms'  │  '13.9647ms'  │ '16.5485ms' │ '5.2359ms'  │
│    4    │   100000    │ '18382.1162ms' │ '2594.0800ms' │ '5168.1765ms' │ '9470.5450ms' │ '53.5282ms' │ '17.7985ms' │
└─────────┴─────────────┴────────────────┴───────────────┴───────────────┴───────────────┴─────────────┴─────────────┘
```

