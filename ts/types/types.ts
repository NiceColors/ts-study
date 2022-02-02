// number (int, float, hex, binary)

let num: number;
num = 0x77dd77;

// array (type[])

let vetorStrings: string[]; // array de strings
let vetorNumbers: number[]; //array de numbers

// tuple

let tupla: [number, string, string]; // Possui um tamanho pré-definido e pode ter uma tipagem statica dos valores

tupla = [1, "a", "b"];

// enum (enum é um tipo especial de tipo que permite definir um conjunto de valores similar aos dicionários do python)

enum Colors { //chave e valor
  green = "#00ff00",
  red = "#ff0000",
  blue = "#0000ff",
  white = "#ffffff",
  black = "#000000",
}

// any (qualquer tipo)

let anyVar: any; // Usar somente em caso de necessidade (teste de visualização rápida ou debbuging)
anyVar = "teste";
anyVar = 1;

//void (tipo vazio)

function vazio(): void {
  console.log("Void");
  // return '1234'; // Erro
}

// null & undefined

let nada: null;
let indefinido: undefined;

// never (nunca vai retornar)

function nunca(): never {
    throw new Error("Erro");
}

// object (qualquer tipo de objeto)

let objeto: object;
objeto = {};
objeto = [];

