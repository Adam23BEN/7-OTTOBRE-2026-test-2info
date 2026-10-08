let lista = document.getElementById("lista");
let bottone = document.getElementById("botone-aggiungi");

bottone.addEventListener("click",function(){
    let testoProdotto = prompt("Inserisci un prodotto");
    let nuovoElemento = document.createElement("li");
    nuovoElemento.innerHTML = testoProdotto;

    lista.appendChild(nuovoElemento);
})


