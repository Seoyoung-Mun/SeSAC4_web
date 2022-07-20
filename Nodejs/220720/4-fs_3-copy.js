const fs = require("fs").promises;

fs.copyFile("./write.txt","./new.txt")
    .then(() => {
        console.log("복사 완료");
    } )
    .catch((err) => {
        console.log( err );
    })

