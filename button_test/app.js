var przycisk = document.getElementById('button');
var kontener = document.getElementById('container');
var wartosc = 0;

przycisk.addEventListener("click", pierwszaFunkcja);

function pierwszaFunkcja(){
    kontener.textContent = wartosc;
    wartosc += 1;
    
}