type Id = string | number; //Uma coisa ou outra (uso do or)

let userId: Id;

userId = "1234";
userId = 1234;

type Tamanhos = "base" | "sm" | "md" | "lg" | "xl";

let mediaQuery: Tamanhos;

type Account = {
  id: Id;
  name: string;
  email?: string; // ? deixa o atributo como opcional
};

type Character = {
  nickname: string;
  level: number;
};

type PlayerInfo = Account & Character; // Faz a união dos tipos (uso do and)

const player: PlayerInfo = {
  id: "1",
  name: "Fulano",
  nickname: "Fulaninho",
  level: 1,
};




