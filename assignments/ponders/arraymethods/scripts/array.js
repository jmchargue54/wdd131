//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points
}
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const gpaResultElement = document.getElementById('gpaResult');
gpaResultElement.textContent = `GPA: ${gpa.toFixed(2)}`;


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortwords = words.filter((word) => word.length < 6);

const shortwordsResultElement = document.getElementById('shortwordsResult');
shortwordsResultElement.textContent = `Short words: ${shortwords.join(', ')}`;


const values = [12, 34, 21, 54];
const luckynum = 21;
let luckyIndex = values.indexOf(luckynum);
console.log(luckyIndex);

const luckynumResultElement = document.getElementById('luckynumResult');
luckynumResultElement.textContent = `Lucky number: ${luckynum}, Index ${luckyIndex}`;

// steps.map((let 1 = 0; i < steps.length; i++) => {
//   document.querySelector("#myList").innerHTML += `<li>${step}</li>`;
// });

// const listTemplate(step) {
//   return //the html string made from step
// }
// const stepsHtml = // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = // set the innerHTML