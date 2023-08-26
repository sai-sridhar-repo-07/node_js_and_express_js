const { log } = require("console");
const os = require("os");

// info about current user

const user = os.userInfo();
// console.log(user);

//returns system uptime in seconds

// console.log(os.uptime());

//

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
