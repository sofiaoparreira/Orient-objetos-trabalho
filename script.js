document.getElementById("botaoObjeto").addEventListener("click", function() {
    let humano = {
      nome: "Sofia",
      idade: 16,
      profissao: "Programadora",
      saudar: function() {
        console.log(`Olá, meu nome é ${this.nome}.`);
      }
    };
  
    console.log(humano);
    humano.saudar();
  });
  
  document.getElementById("botaoFuncao").addEventListener("click", function() {
    function multiplicacao(num) {
      return num * 2;
    }
  
    let result = multiplicacao(9);
    console.log(result);
  });