const path = require('path');
const fs = require('fs');
const xlsx = require('node-xlsx');
const createNameObj = require('./utils').createNameObj;


// 读取xlsx文件，并按格式写入menu.js中
const loadFiles = (xlsxName, menuName, xlsxPath, menuPath) => {
    const fsPath = path.join(xlsxPath, `${xlsxName}`);
    const DataPath = path.join(menuPath, `${menuName}`);

    let Data = fs.readFileSync(DataPath, 'utf8');

    fs.readFile(fsPath, function (err, data) {
        // 读取文件失败/错误
        if (err) {
            console.log('no file!!');
            throw err;
        }
        // 获取表格信息
        const workSheetsFromFile = xlsx.parse(data);
        const buffer = createNameObj(workSheetsFromFile, Data)
        // console.log(buffer);
        fs.writeFile(menuName, buffer, { 'flag': 'w', 'encoding': 'utf8' }, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('文件修改成功！');
            rl.close();
        })
    });
}

exports = module.exports = loadFiles;
