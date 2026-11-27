let form = document.getElementById("form")
let Name = document.getElementById("Name")
let age = document.getElementById("age")
form.addEventListener("submit",submittedData)
function submittedData(event){
    event.submit();
    let naam = Name.innerHTML
    console.log(naam)


}