const fs = require("fs");

function writeToFile(filePath, content) {
  // Write content to the specified file
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data written to", filePath, ":", content);
    }
  });
}

writeToFile("./output.txt", "Data written to output.tx");
