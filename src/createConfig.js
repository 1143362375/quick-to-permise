const fs = require('fs');

// 生产配置文件
module.export = (xlsxName, menuName, xlsxPath, menuPath) => {
    const config = {
        name: {
            xlsxName,
            menuName,
        },
        path: {
            xlsxPath,
            menuPath,
        }
    }
    fs.writeFile('config.json', config, { 'flag': 'w', 'encoding': 'utf8' }, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('配置文件创建成功！');
    })
}