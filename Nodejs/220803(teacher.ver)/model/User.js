const fs = require("fs").promises;

exports.post_user = function( data ){
    const {ID, name, password, gender, email } = data;
    fs.writeFile("./info.txt", `${ID}//${name}//${password}//${gender}//${email}`) ;
}

exports.get_user = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}
