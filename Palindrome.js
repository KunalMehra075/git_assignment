let N=10;
let str= "kunalmehra"

let a = N-1;

let bag="";

for(i=a;i>=0;i--){
  bag=bag+str[i];
}
let S;

for(i=0;i<=str.length-1;i++){
    if(str[i]==bag[i]){
      S="Yes";
  }else{
      S="No";
  }
}
  console.log(i)