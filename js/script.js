{
   const welcome = () => {
      console.log("Witam wszystkich na mojej pierwszej stronie. Staram się jak mogę :-)")
   }
   welcome();

   const onChangeBackgroundClick = () => {
      const body = document.querySelector(".body");
      const buttonName = document.querySelector(".buttonName");
      body.classList.toggle("brightBackground");
      buttonName.innerText = body.classList.contains("brightBackground") ? "Ciemne" : "Jasne";
   };

   const init = () => {
      const backgroundButton = document.querySelector(".backgroundButton");
      backgroundButton.addEventListener("click", onChangeBackgroundClick);
   };
   init();
}