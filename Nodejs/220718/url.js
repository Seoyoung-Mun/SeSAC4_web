const { Console } = require("console");
const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=hWRsblp0Yihssk1yMF0ssssstZ0-443332"
const naver = new URL(string);

console.log( url.format(naver));
console.log( url.parse(string));

console.log( naver.searchParams);