export const mergeSort = async (array, setArray, delay = 600) => {
  const merge = async (arr, left, mid, right) => {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
      L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  };

  const mergeSortRec = async (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);

      await mergeSortRec(arr, left, mid);
      await mergeSortRec(arr, mid + 1, right);

      await merge(arr, left, mid, right);
    }
  };

  await mergeSortRec(array, 0, array.length - 1);
};
