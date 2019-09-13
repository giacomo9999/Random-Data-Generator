const fs = require("fs");

// const testText = { blah: [1, 2, 3, 4, 5, 6] };
const trueOrFalse = () => {
  return Math.round(Math.random()) === 0 ? "true" : "false";
};

const datesArr = [
  "190912",
  "190913",
  "190916",
  "190917",
  "190918",
  "190919",
  "190920",
  "190923",
  "190924",
  "190925",
  "190926"
];

const namesArr = [
  "Yul B. Allwright",
  "Frank N. Stein",
  "Ben Thayer",
  "Lorne Mower",
  "Helen Hywater",
  "Dae Ann Knight",
  "Upton O. Goode",
  "Dinah Mite",
  "Justin Thyme",
  "Don Thatt",
  "Amanda Huginkiss",
  "Anita Room",
  "Jack Pott",
  "Iona Mink",
  "Ewan Whatarmie",
  "Barry D. Hatchett",
  "Warren Peace",
  "Earl E. Bird"
];

const objOut = {};

dataOut = datesArr.forEach(date => {
  objOut[date] = namesArr.map((name, index) => {
    return {
      id: index,
      student_name: name,
      adhd: trueOrFalse(),
      depression: trueOrFalse(),
      anxiety: trueOrFalse()
    };
  });
});

// console.log(objOut);

fs.writeFile("student_data.js", JSON.stringify(objOut), function(err) {
  if (err) throw err;
  console.log("Replaced!");
});
