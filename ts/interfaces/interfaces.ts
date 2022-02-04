type IdPerson = string | number;

interface Job {
  jobName: string;
  jobDescription?: string;
}

interface Friend extends Job {
  readonly id: IdPerson; // readonly não permite alterar o valor
  name: string;
  description?: string; // ? indica que o atributo é opcional
  url: string;
  getFriend: (name: string) => void;
}

const dados: Friend = {
  id: 1,
  name: "José",
  description: "Programador",
  url: "http://www.google.com",
  getFriend: (name) => {
    console.log(`Maria, é amiga de ${name}`);
  },
  jobName: "Dev Front-end",
  jobDescription: "Programador",
};

dados.getFriend(dados.name);
