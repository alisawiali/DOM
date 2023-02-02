
console.log("<---------------DOM----------------->")
/*
....DOM
*/ 


let myIdElement =document.getElementById("my-id");
let myParagraph = document.getElementsByTagName("p");
let myClassName = document.getElementsByClassName("my-span");
let myquerySelect = document.querySelector(".seltcet");




console.log(myIdElement);
console.log(myParagraph [1] );
myParagraph[1].innerHTML = "Test"; // hier a´hatten text verändert
console.log(myClassName[1]);
myClassName[1].innerHTML = "span One title in document";
let myqueryAllElement = document.querySelectorAll(".my-span");




console.log(document.title);  // title 
console.log(document.body); // body und können wie viel daran arbeiten
console.log(document.forms[0].one.value.innerHTML = "test");
console.log(document.links[0].href);
console.log(myqueryAllElement[0]);

console.log("<---------DOM [Grt / Set Elemnts content Attributes---------------->")

/*
.....DOM [Grt / Set Elemnts content Attributes  ==> صفات
--- innerHTML
--- TextContent
--- change Attributes Directly ==> تغيير السمات مباشرة
--- getAttribute
--- setAttribute
*/ 

let myEleemntJs = document.querySelector(".javascript");
console.log(myEleemntJs.innerHTML);
console.log(myEleemntJs.textContent);


myEleemntJs.innerHTML = "Text form  <span>main.js</span> File";
myEleemntJs.textContent = "Text form  <span>main.js</span> File";
// in dem textcontent wird ganz normal es mir zeigen was ich  schreibe 
//  und das ist voll ander als beim innerHTML...

document.images[0].src = "https://www.w3schools.com/";
document.images[0].alt = "Alternative";
document.images[0].title = "Travel";
document.images[0]. id = "pic";
document.images[0]. className= "picger";



let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

console.log(myLink.setAttribute("href","https://www.w3schools.com"));
console.log(myLink.setAttribute("title", "3schools"));
myLink.setAttribute("href","https://miro.com/")

let dr = document.querySelector("title");
dr.setAttribute("title", "Almasuri");
console.log(document.title.innerHTML = "hallo");




console.log(myquerySelect.innerHTML)


console.log("<---------- wie man mit setAttribute hinfügen------------->")
myLink.textContent = "hallo welt in berlin";
console.log(myLink)
myLink.setAttribute("class","imad");






console.log("<----(has and setAttribute)---- check Attribute And Exsamples-------->");
// Attributes  صفات
console.log(document.getElementsByTagName("p")[0].attributes);
let imAge = document.querySelector("img");
// hasAttribute  bedeutet zum checken, ob das variable das ist oder ja
// setAttribute hinfügen 
let myP = document.getElementsByTagName("p")[0];

if(myP.hasAttribute("id")){
    console.log(" Hier is  my Attribute id"); 

    if(myP.getAttribute("id") === ""){
        myP.removeAttribute("id");
        myP.innerHTML =" hallo welt in dem Id Bereich ";
    }else{
        myP.setAttribute("id","Parent_tow");
    }
}else{
    console.log(" Hier is no't id in the websits  ")
};


if(myP.hasAttributes()){
    console.log('has attribute')
}



let divs = document.getElementsByTagName("div")[1];
if(divs.hasAttribute("class") ){
    console.log("div have class");
  if(divs.getAttribute("class") === ''){
    divs.setAttribute("class","main");
    divs.textContent = "Hallo welt in berlin";

  }else{
    divs.removeAttribute("class")
  }

}else {
    console.log("div haven't tag  class")
}

// if(document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log("has not Attribute")
// }

console.log("<---------Create And Append Elements------------->");

/*
......Create And Append Elements إنشاء وإلحاق العناصر
 -- createElemente
 -- createCooemt
 -- craeteTextNode
 --craeteAttribute
 -- appendchild
*/ 


let myElemnet = document.createElement("div")
let myAttribute = document.createAttribute("date-attri")

myElemnet.className = "Poduct";
// myElemnet.setAttributeNode(myAttribute); or 
myElemnet.setAttribute("date-attri", "test-one")
console.log(myElemnet);





