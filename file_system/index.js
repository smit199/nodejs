const file = require("fs/promises");
file.mkdir("sample");
file.writeFile("d:/nodejs/file_system/sample/demo.txt", "Hello, this is sample txt file");
// file.unlink("d:/nodejs/file_system/sample/demo.txt");
// file.rmdir("d:/nodejs/file_system/sample");