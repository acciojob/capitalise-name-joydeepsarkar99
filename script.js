//your JS code here. If required.
let nameInput = document.querySelector("#fname")
nameInput.addEventListener("blur",changeName)
function changeName(){
    let user = nameInput.value 
    nameInput.value = user.toUpperCase()
}
