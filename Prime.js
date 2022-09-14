limit=50;

for(i=11;i<=50;i++){
  let count=0;

  for(let j=1;j<=i;j++){
    if(i%j==0){
      count++;
    }
}
  if(count==2){
    console.log(i,"Prime")
  }else{
    console.log(i,"Not a Prime")
  }
}