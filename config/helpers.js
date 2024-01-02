/**
 * Helper functions
 * This allows us to give the console some colour when running in a terminal
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');
require('module-alias')({ base: path.resolve(__dirname, '..', 'api') });
const connectDb = require('~/lib/db/connectDb');

const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question('\x1b[36m' + query + '\n> ' + '\x1b[0m', (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
};

function isDockerRunning() {
  try {
    execSync('docker info');
    return true;
  } catch (e) {
    return false;
  }
}

function deleteNodeModules(dir) {
  const nodeModulesPath = path.join(dir, 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    console.purple(`Deleting node_modules in ${dir}`);
    fs.rmSync(nodeModulesPath, { recursive: true });
  }
}

const silentExit = (code = 0) => {
  console.log = () => {};
  process.exit(code);
};

async function connectWithTimeout() {
  /**
   * Connect to the database
   * - If it takes a while, we'll warn the user
   */
  let timeout = setTimeout(() => {
    console.orange(
      'This is taking a while... You may need to check your connection if this fails.',
    );
    timeout = setTimeout(() => {
      console.orange('Still going... Might as well assume the connection failed...');
      timeout = setTimeout(() => {
        console.orange('Error incoming in 3... 2... 1...');
      }, 13000);
    }, 10000);
  }, 5000);
  // Attempt to connect to the database
  try {
    console.orange('Warming up the engines...');
    await connectDb();
    clearTimeout(timeout);
  } catch (e) {
    console.error(e);
    silentExit(1);
  }
}

// Set the console colours
console.orange = (msg) => console.log('\x1b[33m%s\x1b[0m', msg);
console.green = (msg) => console.log('\x1b[32m%s\x1b[0m', msg);
console.red = (msg) => console.log('\x1b[31m%s\x1b[0m', msg);
console.blue = (msg) => console.log('\x1b[34m%s\x1b[0m', msg);
console.purple = (msg) => console.log('\x1b[35m%s\x1b[0m', msg);
console.cyan = (msg) => console.log('\x1b[36m%s\x1b[0m', msg);
console.yellow = (msg) => console.log('\x1b[33m%s\x1b[0m', msg);
console.white = (msg) => console.log('\x1b[37m%s\x1b[0m', msg);
console.gray = (msg) => console.log('\x1b[90m%s\x1b[0m', msg);

module.exports = {
  askQuestion,
  silentExit,
  isDockerRunning,
  connectWithTimeout,
  deleteNodeModules,
};
