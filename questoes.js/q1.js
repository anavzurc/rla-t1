// Questão 1:

let idade = parseInt (prompt("Qual a sua idade? "));
let tempo = parseFloat (prompt("Qual seu tempo de contribuição? "));
if(idade >=65 || tempo >= 30 && idade >=60){
    console.log("Você já pode se aposentar!!! :)");
}
else{
    console.log("Você ainda não pode se aposentar :(");
}