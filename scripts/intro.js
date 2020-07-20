console.log('abc');  
console.log(1); 
console.log(true); 
console.log(null); 
console.log(undefined);  
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside 
function nodeSimplified(){
    var a =10;
    console.log(a);  // output 10
    if(true){
     var a=20;
     console.log(a); // output 20
    }
    console.log(a);  // output 20
  }
  function nodeSimplified(){
    let a =10;
    console.log(a);  // output 10
    if(true){
     let a=20;
     console.log(a); // output 20
    }
    console.log(a);  // output 10
  }