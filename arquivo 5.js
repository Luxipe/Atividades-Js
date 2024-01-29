function verificaIdade(idade) {
    if (idade < 0) {
        console.log("Idade inválida. Por favor, insira uma idade válida.");
    } else if (idade < 18) {
        console.log("Você é menor de idade."); // fala isso caso você ser menor de idade.
    } else if (idade >= 18 && idade < 60) {
        console.log("Você é maior de idade.");  //  fala isso caso voce ser maior de idade, passar de 17 anos.
    } else {
        console.log("Você é um idoso.");    //  fala isso caso a idade ser de um idoso.
    }
}

var idadeUsuario = 25; // fala que e maior de idade quando for mais de 17 anos, caso a mensagem for menor de 18 anos vai falar você é menor de idade.
verificaIdade(parseInt(idadeUsuario));
