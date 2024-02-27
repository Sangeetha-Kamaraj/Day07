//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
  console.log(result);

  const pop = result.filter((element)=>{
  return element.population<200000;
  })
  console.log(pop);

  result.forEach(element => {
  console.log(element.name);
  console.log(element.capital);
  console.log(element.flag); });

  var total = result.reduce((acc,curr) =>{
  return acc+curr.population; } ,0);
  console.log(total);

  var currency = result.filter((element) => {
  for(let key in element.currencies){
  if(element.currencies[key].code === "USD"){
  return element;
           }
         }
        })
           console.log(currency);
         
}

