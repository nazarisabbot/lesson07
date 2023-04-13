/* Task 03 */
const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

function addPrefix(arr, stroke) {
  const resArr3 = [];

  for (let i = 0; i < arr.length; i++) {
    resArr3[i] = `${stroke} ${arr[i]}`;
  }

  return resArr3;
}

const res3 = console.log(addPrefix(names, "Mr"));
