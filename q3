let nomeMot = prompt("Qual o seu nome? ");
let velVia = parseFloat (prompt("Qual a velocidade máxima permitida na via (km/h)? "));
let velVei = parseFloat (prompt("Qual a velocidade registrada do veículo (km/h)? "));
let excesso = (velVei - velVia);

if (velVei <= velVia){
    console.log("Você está dentro do limite de velocidade.");
}

if (excesso >= 1 && excesso <= 10){
    console.log(nomeMot+" "+"estava em uma via de " + velVia+"km/h "+"e seu veículo estava a "+ velVei+"km/h. " + "Logo, recebeu uma multa leve (R$50).");
}

if (excesso >= 11 && excesso <= 20){
    console.log(nomeMot+" "+"estava em uma via de " + velVia+"km/h "+"e seu veículo estava a "+ velVei+"km/h. " + "Logo, recebeu uma multa média (R$100).");
}

if (excesso > 20){
    console.log(nomeMot+" "+"estava em uma via de " + velVia+"km/h "+"e seu veículo estava a "+ velVei+"km/h. " + "Logo, recebeu uma multa grave (R$200).");
}