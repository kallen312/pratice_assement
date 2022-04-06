import "./styles.css";

export default function App() {
  // 4.
  let numStudents = 27;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> Number of students: {numStudents} </p>
    </div>
  );
}

// 1. Create a loop that logs the value of each item
// in the cereal array to the console.

let cereal = ["Fruit Loops", "Frosted Flakes", "Cheerios"];

// 1)
function printCereal(current) {
  return console.log(current);
}
cereal.map(printCereal);

// 2)
// cereal.map((current) => (
//   console.log(current)
// ));

// 3)
// cereal.map(function (current) {
//   return console.log(current);
// });

// 2. Write a function that can calculate
//the area of a rectangle. It should have two
//parameters, length, and width, and it should
// return the area of the rectangle.

function printArea(length, width) {
  let area = length * width;
  return area;
}

console.log(printArea(2, 4));

// 0.5 * b * h

function circleArea(base, height) {
  return 0.5 * base * height;
}

// 3.
let grades = {
  first: [
    {
      name: "Chuckie Finster",
      grade: 94,
      age: 5
    },
    {
      name: "Tommy Pickles",
      grade: 73,
      age: 6
    }
  ],
  second: [
    {
      name: "Angelica Pickles",
      grade: 67,
      age: 7
    }
  ]
};

let angelicaGrade = grades.second[0].grade;
console.log(angelicaGrade);

// 5. Create a function that maps over an array
// and returns each element minus 1

let nums = [3, 4, 5];

function numSubtract(num) {
  return num - 1;
}

let finalNums = nums.map(numSubtract);
console.log(finalNums);
