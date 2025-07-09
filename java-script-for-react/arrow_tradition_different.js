
const speker = { name: "Nagu", Sayhi: function(){
    console.log(`hi ${this.name}`);  //this is working fine in tradinal 
},
}
speker.Sayhi()
// this. is not working -- 
const speker1 = { name:'konda', SayHI: () => {
    console.log(`hi ${this.name}`);
},
}
speker1.SayHI()
