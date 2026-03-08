// Questão 2:

let nome = prompt("Digite o nome do aluno: ");

let av1 = parseFloat(prompt("Digite a nota da AV1: "));
let av2 = parseFloat(prompt("Digite a nota da AV2: "));

let NP = (av1 + av2) / 2;
let NF;

if (NP >= 4) {
    let av3 = parseFloat(prompt("Digite a nota da AV3: "));
    let frequencia = prompt ("Qual seu percentual de frequência? ");
    let NF = (NP + av3) / 2;

    if (NF >= 5 && frequencia >= 75){
        console.log(nome + ", " + "você foi aprovado(a) com nota final de:" + NF);
    } else if (NF < 5 && frequencia >= 75){
        console.log("Reprovado na Nota Final.");
    } else if (NF >= 5 && frequencia < 75) {
        console.log("Reprovado por frequência.");
    } else {
        console.log("Reprovado por nota final e por frequência.");
    }
} else {
    console.log("Reprovado na Nota Parcial.");
}