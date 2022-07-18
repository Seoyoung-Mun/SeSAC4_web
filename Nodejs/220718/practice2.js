const url = require("url");
const { URL } = url;
/*
URL은 url안에 있는 class URL. 
URL을 부르려면 url.URL로도 쓸 수 있다.
*/
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
const naver = new URL(string);

console.log( naver.searchParams.keys());
console.log( naver.searchParams.values());

naver.searchParams.delete('sm');
console.log( naver.searchParams.keys());