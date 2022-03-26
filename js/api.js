const BASE_URL = 'https://brasilapi.com.br/api';

const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF"); 



inputCep.onkeyup = async (evento) => {
    //alert("Digitou aí, ALÁ")
    // verificando se o cep cumpriu os 8 digitos
    if (inputCep.value.length < 8) {
        return;
    }
    //fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado.
        //FETCH retorna uma promise que é a resposta do servidor 
            //parametro1: url | parametro2: um objeto de configuração da api (auth, headers, method...)
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
    });

    const conteudoResposta = await resposta.json(); 
    //await: adiciono isso pq o '.json' retorna uma promise e preciso que termine de decodificar a resposta da api em json pra depois fazer console.log
    

    // add valores para o input depois que o cep é digitado e busquei ele na api (auto complete)
    inputRua.value = conteudoResposta.street;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;
    inputComplemento.value = conteudoResposta.city;
    
    
    console.log(conteudoResposta);
    //alert("Cep completo: " + inputCep.value);

    

};

//inputCep.addEventListener('keyup', ())