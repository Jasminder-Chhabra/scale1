let arr = [1, 5, 8, 10, 20, 40, 50, 78, 100];
// 100 , 78 , 50 , 40 , 20  10 , 8  5, 1
let target = 80;

function findCeilNumber(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left / 2));

    if (arr[mid] == num) {
      return arr[mid];
    }

    if (arr[left] > arr[right]) {
      if (arr[mid] > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] > num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return 0;
}

console.log(findCeilNumber(arr, target));
