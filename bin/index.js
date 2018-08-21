const readline = require('readline');
const chalk = require('chalk');
const loadFiles = require('../src/loadFile');
const createConfig = require('../src/createConfig');
const createNameObj = require('../src/utils').createNameObj;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Zcmagic >>'
});
var inputArr = [];

let xlsxName = '';
let xlsxPath = '';
let menuName = '';
let menuPath = '';
// rl.question('请输入xlsx文件名及文件路径，格式为xxx.xlsx&XXXX/XXX/XX', (answer) => {
//     // 对答案进行处理

// });
rl.prompt();
console.log(`请输入xlsx文件名及文件路径，格式为${chalk.blue('xxx.xlsx&XXXX/XXX/XX')}`)

rl.on('line', function (input) {
    switch(input.trim()){
        case '-h':
        case '-help':
        console.log('start  --启动项目');
        console.log('输入')
    }
    console.log(input);
    let xlsxArr = input.split('&');
    xlsxName = xlsxArr[0];
    xlsxPath = xlsxArr[1];
    console.log(`请输入${chalk.blue('start')}启动项目`);
    if (input === 'start') {
        loadFiles(xlsxName, menuName, xlsxPath, menuPath);       
    }
    // rl.close();
});

rl.on('close', function () {
    console.log('see you again!');
    process.exit(0);
});



