let backgroundButton = document.querySelector(".backgroundButton");
let body = document.querySelector(".body");
let buttonName = document.querySelector(".buttonName")

backgroundButton.addEventListener("click", () => {
   body.classList.toggle("whiteBackground");
   if (body.classList.contains("whiteBackground")) {
buttonName.innerText = "Ciemne";
   }else{
    buttonName.innerText = "Jasne";
   }
});
