// S => State
// T => Type
// K => Key
// V => Value
// E => Element

function genericState<S>() {
  // Essa funçao trabalha com o tipo S
  // Ou seja, ela pode receber qualquer tipo de valor S (unknown)
  // Mas assim que sua tipagem é definida ela não pode receber outro tipo de valor
  let any: S;

  function setState(newAny: S) {
    any = newAny;
  }

  function getState() {
    return any;
  }

  return { getState, setState };
}

const state = genericState<string>();
state.setState("teste");
console.log(state.getState());


function genericStateExtends<S extends number | string  = string>() {
}

// <S extends Number | String  = string> o extends permite que a tipagem seja definida como Number ou String e assim não pode ser outro tipo
// o = permite definir uma tipagem padrão

