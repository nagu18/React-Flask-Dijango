//simple way to acess the array 
const list=['nagu','banna','mango'];
const element = list[0]; // assing the elemet[index]
const sec = list[1]
console.log(element)
console.log(sec)

//best way:
const names = ['yatesh','nagu','pawan','adi','santhosh','chaithanya'];
const [q,w,e,r,t,y]=names;
console.log(q)
console.log(w)

//skip the value:- 
const name2 = ['yatesh','nagu','pawan','adi','santhosh','chaithanya'];
const [...rest]=name2;
console.log(rest);