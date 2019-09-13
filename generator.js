var fs = require("fs");

const testText = { blah: [1, 2, 3, 4, 5, 6] };

fs.writeFile("student_data.js", JSON.stringify(testText), function(err) {
  if (err) throw err;
  console.log("Replaced!");
});
