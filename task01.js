/* Task 01 */
const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];

function filter(arr1, arr2) {
  const resAll = [...arr1];
  const resFailed = [...arr2];

  for (let i = 0; i < resAll.length; i++) {
    for (let y = 0; y < resFailed.length; y++) {
      if (resAll[i] === resFailed[y]) {
        resAll.splice(i, 1);
      }
    }
  }

  return resAll;
}

const res1 = console.log(filter(allStudents, failedStudents));
