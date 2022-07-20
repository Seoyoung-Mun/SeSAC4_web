const fs = require("fs").promises;

async function exec() {
    await fs.writeFile("./write.txt","안녕");
    await fs.copyFile("./write.txt","./new2.txt");
}
exec();