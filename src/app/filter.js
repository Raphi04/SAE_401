exports.filter = function(filtre){
    let allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
        box.classList.add("displayNone");
    });
    let allFilter = document.querySelectorAll(".filter");
    allFilter.forEach((filtre) =>{
        filtre.classList.remove("selected");
    });
    switch(filtre){
        case "tout" :
            allBoxes.forEach((box) => {
                box.classList.remove("displayNone");
            });
            document.getElementById("tout").classList.add("selected");
            break;

        case "saumon" : 
            let allSaumon = document.querySelectorAll(".saumon");
            allSaumon.forEach((saumon) =>{
                saumon.classList.remove("displayNone");
            });
            document.getElementById("saumon").classList.add("selected");
            break;

        case "avocat" : 
            let allAvocat = document.querySelectorAll(".avocat");
            allAvocat.forEach((avocat) => {
                avocat.classList.remove("displayNone");
            });
            document.getElementById("avocat").classList.add("selected");
            break;

        case "fromage" : 
            let allFromage = document.querySelectorAll(".cheese");
            allFromage.forEach((fromage) => {
                fromage.classList.remove("displayNone");
            });
            document.getElementById("fromage").classList.add("selected");
            break;

        case "coriande" : 
            let allCoriande = document.querySelectorAll(".coriande");
            allCoriande.forEach((coriande) => {
                coriande.classList.remove("displayNone");
            });
            document.getElementById("coriande").classList.add("selected");
            break;

        case "viande" : 
            let allViande = document.querySelectorAll(".viande");
            allViande.forEach((viande) => {
                viande.classList.remove("displayNone");
            });
            document.getElementById("viande").classList.add("selected");
            break;

        case "thon" : 
            let allThon = document.querySelectorAll(".thon");
            allThon.forEach((thon) =>{
                thon.classList.remove("displayNone");
            });
            document.getElementById("thon").classList.add("selected");
            break;

        case "crevette" : 
            let allCrevette = document.querySelectorAll(".crevette");
            allCrevette.forEach((crevette) =>{
                crevette.classList.remove("displayNone");
            });
            document.getElementById("crevette").classList.add("selected");
            break;

        case "spicy" : 
            let allSpicy = document.querySelectorAll(".spicy");
            allSpicy.forEach((spicy) =>{
                spicy.classList.remove("displayNone");
            });
            document.getElementById("spicy").classList.add("selected");
            break;

        case "sl" : 
            let allSL = document.querySelectorAll(".seriole");
            allSL.forEach((sl) =>{
                sl.classList.remove("displayNone");
            });
            document.getElementById("sl").classList.add("selected");
            break;
    }
};
