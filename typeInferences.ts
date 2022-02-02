// Typescript sempre infere o tipo automaticamente quando vc declara o valor da var

let texto = "Teste"; //Type string

// let texto = 1; // Erro 

window.addEventListener("click", function (event) {
    console.log(event.target); //Identifica automaticamente os metodos e propriedades
    // console.log(event.foo); //Erro (não existe essa propriedade)
});

