//Exercicio1

const numberBase = document.querySelector('#numberBase');

const resultado = document.querySelector('#resultado');



const square = numero => numero * numero;

const processamento1 = () => {

   resultado.innerHTML = square(numberBase.value);
}



button1.addEventListener('click', processamento1);


//Exercicio2

const numero1 = document.querySelector('#numero1');

const numero2 = document.querySelector('#numero2');

const resultado2 = document.querySelector('#resultado2');


const processamento2 = () => {

  resultado2.innerHTML = Math.max(numero1.value, numero2.value);

}

button2.addEventListener('click', processamento2);


//Exercicio3

const nome = document.querySelector('#nome');

const saoPaulo = document.querySelector('#SP');

const rioDeJaneiro = document.querySelector('#RJ');

const minasGerais = document.querySelector('#MG');

const espiritoSanto = document.querySelector('#ES');

const resultado3 = document.querySelector('#resultado3');

const radio1 = document.querySelector('#radio1');

const radio2 = document.querySelector('#radio2');

const radio3 = document.querySelector('#radio3');

const radio4 = document.querySelector('#radio4');


function ifState(name, state){

  if (radio1.checked){

    resultado3.innerHTML = `${nome.value} mora no estado de ${saoPaulo.innerText}`;

  }
  else if(radio2.checked){

    resultado3.innerHTML =  `${nome.value} mora no estado de ${rioDeJaneiro.innerText}`;
  }
  else if(radio3.checked){

    resultado3.innerHTML = `${nome.value} mora no estado de ${minasGerais.innerText}`;
  }
  else if(radio4.checked){

    resultado3.innerHTML = `${nome.value} mora no estado de ${espiritoSanto.innerText}`;
  }
}


button3.addEventListener('click', ifState);


//Exercicio4

const nome2 = document.querySelector('#nome2');

const frontEnd = document.querySelector('#prof1');

const backEnd = document.querySelector('#prof2');

const gameMaker = document.querySelector('#prof3');

const fullStack = document.querySelector('#prof4');

const checkbox1 = document.querySelector('#checkbox1');

const checkbox2 = document.querySelector('#checkbox2');

const checkbox3 = document.querySelector('#checkbox3');

const checkbox4 = document.querySelector('#checkbox4');

let arrayProf = ['frontEnd', 'backEnd', 'gameMaker', 'fullStack'];

let arrayChk = ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4'];


/*
resultado4.innerHTML = `${} é a área de interesse de ${nome2.value}`;

resultado4.innerHTML = `${} são as áreas de interesse de ${nome2.value}`;
*/



function knowledge (nome, profissao){

  if(checkbox1.checked){

    resultado4.innerHTML = `${frontEnd.innerText} é a área de interesse de ${nome2.value}`;
  }
  else if(checkbox2.checked){

      resultado4.innerHTML = `${backEnd.innerText} é a área de interesse de ${nome2.value}`;
    }
    else if(checkbox3.checked){

        resultado4.innerHTML = `${gameMaker.innerText} é a área de interesse de ${nome2.value}`;
      }

      else if(checkbox4.checked){

          resultado4.innerHTML = `${fullStack.innerText} é a área de interesse de ${nome2.value}`;
        }


}



button4.addEventListener('click', knowledge);
