export let btnCouleur = document.getElementsByClassName("button1");
export let btnBorder = document.getElementsByClassName("button2");
export let btnSizeBorder = document.getElementsByClassName("button3");
export let visuel = document.getElementsByClassName("visuel")[0];
export let affichageBordure;
export let boutonChoix = document.getElementsByClassName("inputColor")[0];
export let border2 = document.getElementsByClassName("btnBorder");
export let borderRadius = document.getElementsByClassName("inputRadius")
export let clearAll = document.querySelector(".clearAll");

export let supprimeTout=()=>{
    // remettre a 0
clearAll.addEventListener("click", () => {
    // je remets l'affichage de base
    visuel.style.border = "1px solid lightgray";
    visuel.style.backgroundColor = "white";
    visuel.style.borderRadius = "0px";
    border2[i].value = "0";
})
}

export let couleurs=()=>{
    // choix couleur
boutonChoix.addEventListener("input", () => {
    visuel.style.backgroundColor = boutonChoix.value;
});
}