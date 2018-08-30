
// 生成路由规则
exports.createNameObj = (data, menuData) => {
    // 格式化表格数据
    const newArr = data[0].data;
    newArr.shift();
    const objItems = {};

    // 拼装字符串
    newArr.map(item => {
        let itemArr = item;
        let addString = `{
               "${itemArr[3]}":{
               "code": "${itemArr[2].toString()}", "description": "${itemArr[1].toString()}"
           }
           }`;
        let allScript = ` {"${itemArr[0]}" : {
           "${itemArr[3]}":{
               "code": "${itemArr[2].toString()}", "description": "${itemArr[1].toString()}"
           }
        }
        }`;
        let allObj = JSON.parse(allScript);
        let addObj = JSON.parse(addString);

        if (objItems[itemArr[0]]) {
            objItems[itemArr[0]][itemArr[3]] = addObj[itemArr[3]];
        } else {

            objItems[itemArr[0]] = allObj[itemArr[0]];
        }
    })
    // 权限文件格式
    return menuData.replace('// ---end---', `${JSON.stringify(objItems).substring(1, JSON.stringify(objItems).length - 1)},  // ---end---`);
}
