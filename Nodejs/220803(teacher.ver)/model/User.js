const fs = require("fs").promises;

exports.post_user = function( data ){
    const {ID, name, password, gender, email } = data;
    fs.appendFile("./info.txt", `${ID}//${name}//${password}//${gender}//${email}\n`) ;
}

exports.get_user = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}
