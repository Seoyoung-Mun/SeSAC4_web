const fs = require("fs").promises;

fs.writeFile('./write.txt','안녕')
    .then(() => {
        console.log("작성 완료");
    })
    .catch((err) => {
        console.log(err);
    });

//write.txt 파일이 생성되고 "작성 완료"출력

