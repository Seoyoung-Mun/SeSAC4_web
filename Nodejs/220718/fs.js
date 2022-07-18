const fs = require("fs");

fs.readFile("./text.txt", (err, date) => {
    if ( err ) throw err; //throw 에러를 던지다.

    console.log( data );
    console.log( data.toString());
})