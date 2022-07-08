const operatingSystem = require("os");
console.log(`platform: ${operatingSystem.platform()}`);
console.log(`Operating system: ${operatingSystem.arch()}`);
console.log(`host name: ${operatingSystem.hostname()}`);
console.log(`version: ${operatingSystem.version()}`);
console.log(`release: ${operatingSystem.release()}`);