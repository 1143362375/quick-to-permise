#!/usr/bin/env node

const readline = require('readline');
const chalk = require('chalk');
const loadFiles = require('../src/loadFile');
const createConfig = require('../src/createConfig');
const config = require('../config.json');

const order = process.argv[2];
const flag = true;


// 初始化参数
let xlsxName = '';
let xlsxPath = '';
let menuName = '';
let menuPath = '';

// 如果是初始化配置文件，调用方法更改配置文件，


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// 不是初始化配置文件，则不用修改，直接赋值;
if (!config.init) {
    xlsxName = config.name.xlsxName;
    xlsxPath = config.path.xlsxPath;
    menuName = config.name.menuName;
    menuPath = config.path.menuPath;
}
if (flag) {
    switch (order) {
        case undefined:
        case '-start':
            if (!xlsxName || !menuName || !xlsxPath || !menuPath) {
                console.log(`请执行${chalk.blue('-init')}命令进行项目初始化`);
            } else {
                loadFiles(xlsxName, menuName, xlsxPath, menuPath);
            }
            break;
        case '-change':
            createConfig(process.argv[4], process.argv[7], process.argv[5], process.argv[8]);  
            break;
        case '-init':
            createConfig(process.argv[4], process.argv[7], process.argv[5], process.argv[8]);
            loadFiles(process.argv[4], process.argv[7], process.argv[5], process.argv[8]);        
            break;
        case '-h':
        case '-help':
            console.log(`${chalk.blue('-start')}      启动项目`);
            console.log('一键启动无需更改');
            console.log(`${chalk.blue('-init')}       初始化项目:`);
            console.log(`请输入xlsx及menu文件名及文件路径，格式为${chalk.blue('xlsx xxx.xlsx XXXX/XXX/XX menu xxx.js XXXX/XXX/XXX')}`);
            console.log(`${chalk.blue('-change')}     修改配置:`);
            console.log(`请输入xlsx及menu文件名及文件路径，格式为${chalk.blue('xlsx xxx.xlsx XXXX/XXX/XX menu xxx.js XXXX/XXX/XXX')}`);
            break;
        default:
            console.log('come on baby')
            break;
    }
} else{
    console.log(`${chalk.red('ERROR:')} 系统出错！`);
}

rl.on('close', function () {
    console.log('see you again!');
    process.exit(0);
});

