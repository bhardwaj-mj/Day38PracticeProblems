var num1=Math.floor(Math.random()*10)+990;
var num2=Math.floor(Math.random()*10)+990;
var num3=Math.floor(Math.random()*10)+990;
var num4=Math.floor(Math.random()*10)+990;
var num5=Math.floor(Math.random()*10)+990;
if(num1>num2&&num1>num3&&num1>num4&&num1>num5){
  console.log("num1",num1,"is maximum")
}
else if(num2>num1&&num2>num3&&num2>num4&&num2>num5){
  console.log("num2",num2,"is maximum")
}
else if(num3>num1&&num3>num2&&num3>num4&&num3>num5){
  console.log("num3",num3,"is maximum")
}
else if(num4>num1&&num4>num2&&num4>num3&&num4>num5){
  console.log("num4",num4,"is maximum")
}
else{
  console.log("num5",num5,"is maximum")
}
if(num1<num2&&num1<num3&&num1<num4&&num1<num5){
  console.log("num1",num1,"is minimum")
}
else if(num2<num1&&num2<num3&&num2<num4&&num2<num5){
  console.log("num2",num2,"is minimum")
}
else if(num3<num1&&num3<num2&&num3<num4&&num3<num5){
  console.log("num3",num3,"is minimum")
}
else if(num4<num1&&num4<num2&&num4<num3&&num4<num5){
  console.log("num4",num4,"is minimum")
}
else{
  console.log("num5",num5,"is minimum")
}