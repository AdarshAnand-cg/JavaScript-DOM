let a = document.getElementById("btn2")
let b = document.getElementsByTagName("button")
let c = document.querySelector("#btn1");
let d = document.querySelector("#div");
let btn = document.querySelectorAll("button");

let bool = true

a.addEventListener("click",func);
function func(){
    if(bool){
    a.style.backgroundColor=box();
    b[0].style.backgroundColor=box();
    a.style.color="white";
    a.style.padding="10px 20px";
    a.style.borderRadius="15px";
    a.style.fontFamily="Algerian";
    b[0].style.borderRadius="15px";
    b[0].style.backgroundColor="red";
    b[0].style.color="white";
    b[0].style.padding="10px 20px";
    b[1].style.backgroundColor="black";
    b[1].style.color="white";
    bool=false
    }
    else{
        a.style.backgroundColor=box();
        b[0].style.backgroundColor=box();
        b[0].style.fontFamily="Chiller";
        b[0].style.fontSize="20px";
        b[0].style.color="black";
        b[0].style.padding="10px 20px";
        b[0].style.borderRadius="15px";
        a.style.fontFamily="Algerian";
        a.style.borderRadius="15px";
        a.style.color="black";
        a.style.padding="10px 20px";
        b[1].style.backgroundColor="black";
        b[1].style.color="white";
        bool=true
    }

}


b[1].addEventListener("click",change);
function change(){
    b[1].body.style.backgroundColor="black"
    b[1].style.color="white"
}


btn[1].addEventListener("click",function(){
    alert("Button Was Clicked");
});
console.log(btn)



c.addEventListener("click",function(){
    c.style.backgroundColor("pink")
})

d.addEventListener("mouseover", () => {
  d.style.padding = "2px 10px";
  d.style.width = "fit-content"
  d.style.border = "2px groove pink"
});


d.addEventListener("mouseover", () => {
    d.style.textShadow = "20px 20px 1px black";
    d.style.backgroundColor = "black"
    d.style.color = "white"
    d.style.margin = Math.floor(Math.random()*256)
});

d.addEventListener("mouseout", () => {
    d.style.textShadow = "none";
    d.style.backgroundColor = "white"
    d.style.color = "black"
    // d.style.margin = "0px"
})


function box() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let cBtn = document.querySelector("#changeB");
cBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = box()
})

let bt = document.querySelector("#btn1");
bt.addEventListener("click",function(){
    bt.style.backgroundColor = box()
    bt.style.color = box()
    bt.style.fontFamily = "Algerian"
    bt.style.padding = "10px 20px"
    bt.style.borderRadius = "10px"
    a.style.backgroundColor = box()
    b[1].style.backgroundColor = box()
    document.body.style.backgroundColor = box()

}) 

let inp = document.querySelector("#inp")
inp.addEventListener("keydown",key)
    
    function key(e){
        // if(e.key: ){
            console.log("in function")
            let first = Math.floor(Math.random()*200);
            let second = Math.floor(Math.random()*200);
            let third = Math.floor(Math.random()*200);
            document.body.style.backgroundColor = `rgb(${first},${second},${third})`
            document.body.style.backgroundColor = box()
        // }
    }
