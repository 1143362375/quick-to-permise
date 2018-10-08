const fs = require('fs');

// 生产配置文件
const createConfig = (xlsxName, menuName, xlsxPath, menuPath) => {
    const config = {
        init: false,
        name: {
            xlsxName,
            menuName,
        },
        path: {
            xlsxPath,
            menuPath,
        }
    }
    fs.writeFile('./config.json', JSON.stringify(config), { 'flag': 'w', 'encoding': 'utf8' }, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('配置文件创建成功！内容如下：');
        console.log(JSON.stringify(config))
    })
}

exports = module.exports = createConfig;