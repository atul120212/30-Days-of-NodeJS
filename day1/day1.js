const fs = require("fs");

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(
          `Error reading file: ${err.code}: ${err.path} does not exist`
        );
      } else {
        console.error(`Error reading file: ${err.message}`);
      }
    } else {
      console.log(data);
    }
  });
}

readFileContent("day1-file.txt");
