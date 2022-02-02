type Tarefas = {
  id: string;
  name: string;
  description?: string;
  done: boolean;
};

const tarefas: Readonly<Tarefas> = {
  //O Readonly faz com que só seja permitido visualizar o objeto
  id: "1",
  name: "Fazer café",
  description: "Fazer café da manhã",
  done: false,
};

// O que fazer para modificar algum atributo do objeto?

function todoUpdate(todo: Tarefas, fieldsToUpdate: Partial<Tarefas>) {
  // O Partial<> permite que o atribut seja uma parcial do tipo, ou seja ele não precisa conter todos os elementos
  //Assim você só precisa passar os componentes que quer atualizar
  return { ...todo, ...fieldsToUpdate };
  // Copia todos os elementos da lista que precisa fazer a modificação (...todo)
  //Depois pega todos os elementos que não são iguais e substituem ao todo  (...fieldsToUpdate)
}

const tarefas2: Tarefas = todoUpdate(tarefas, { done: true });

//Pick

type tarefasPick = Pick<Tarefas, "name" | "description">;

// O pick pega as propriedades definidas no utilitie

type tarefasOmit = Omit<Tarefas, 'name' | 'description'>

// O Omit pega as propriedades que não estão definidas no utilitie

// Se queremos pegar mais propriedades do que omitir usamos o Pick
// Se queremos omitir mais propriedades do que pegar usamos o Omit

