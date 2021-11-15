import { btnCouleur,btnBorder, btnSizeBorder,visuel,affichageBordure,boutonChoix,border2,borderRadius,clearAll,supprimeTout, couleurs} from "./variable.js";



// couleur des btn
for (let i = 0; i < btnCouleur.length; i++) {
    btnCouleur[i].addEventListener("click", () => {
        visuel.style.backgroundColor = btnCouleur[i].style.backgroundColor;
    })
};
// bordure
for (let i = 0; i < btnBorder.length; i++) {
    btnBorder[i].addEventListener("click", () => {
        visuel.style.border = btnBorder[i].style.border;
        affichageBordure = visuel.style.border;
    })
};
// taille
for (let i = 0; i < btnSizeBorder.length; i++) {
    btnSizeBorder[i].addEventListener("click", () => {
        visuel.style.border = affichageBordure;
        if (i == 0) {
            visuel.style.borderTop = "2px solid red"
        } else if(i == 1){
            visuel.style.borderTop = "5px solid red";
        }else if(i == 2){
            visuel.style.borderTop = "10px solid red";
            
        }
    })
};

couleurs();

// bordure
for (let i = 0; i < border2.length; i++) {
    border2[i].addEventListener("click", () => {
        if (i == 0) {
            visuel.style.border = `${border2[i].value}px solid`;
        } else if(i == 1){
           visuel.style.borderTop = `${border2[i].value}px solid`;
        } else if(i == 2){
            visuel.style.borderRight = `${border2[i].value}px solid`;
        } else if(i == 3){
            visuel.style.borderBottom = `${border2[i].value}px solid`;
        } else{
            visuel.style.borderLeft = `${border2[i].value}px solid`;
        }
    })   
};



// bordure arrondi
for (let i = 0; i < borderRadius.length; i++) {
    borderRadius[i].addEventListener("click", () => {
        if (i == 0) {
            visuel.style.borderRadius = `${borderRadius[i].value}px`;
        } else if(i == 1){
            visuel.style.borderRadius = `${borderRadius[i].value}px 0px 0px 0px`;
        }else if(i == 2){
            visuel.style.borderRadius = `0px ${borderRadius[i].value}px 0px 0px `;
        }else if(i == 3){
            visuel.style.borderRadius = `0px 0px ${borderRadius[i].value}px 0px`;
        } else if(i == 4){
            visuel.style.borderRadius = `0px 0px 0px ${borderRadius[i].value}px`;
        }
    })
    
};

supprimeTout();


