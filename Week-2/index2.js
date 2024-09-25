// function sum(a,b){
//     return a+b
// }

// const ans1 =(a,b) =>{
//   return a+b;

// }


// const ans =sum(3,2);
// console.log(ans);


 const input=[1,2,3,4,5]

// const newArray=[];

// for(let i=0;i<input.length;i++){

// }


function transform(i){
  return i*2;
}

const ans=input.map(transform);
console.log(ans);


const arr=[1,2,3,4,5,2];


const newArr=[];

for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    newArr.push(arr[i]);
  }
}
console.log(newArr);


