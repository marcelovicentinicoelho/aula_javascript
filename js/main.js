function load(){

  aprender_alert();
  aprender_variaveis();
  aprender_strings();
  aprender_array();
  aprender_dicionario();
  aprender_condicional();
  aprender_lacos();
  aprender_data();
  aprender_funcoes();
  aprender_variaveis_locais_globais();

  // Comentários de linha no JavaScript

  /*
    Ou então, é possível comentar
    várias linhas abrindo e fechando
    parenteses + asterisco
  */

  /*
    No navegador é possível debugar, basta acessar
    Inspecionar > Elements > Console
    Com o Google Chrome, a tecla de atalho é a F12
  */

}

function aprender_alert(){
  alert("Meu primeiro JavaScript <main>");
}

function aprender_variaveis(){
  console.log(">>>>> Trabalhando com variáveis");

  var nome = "Marcelo Vicentini Coelho";
  var idade1 = 42;
  var idade2 = 10;
  var idade3 = "42";
  var idade4 = "10";
  
  console.log(nome + " tem " + idade1 + " anos.");
  console.log("Idade1+Idade2: " + idade1 + "+" + idade2 + "=" + (idade1 + idade2));
  console.log("idade1*idade2: " + idade1 + "*" + idade2 + "=" + (idade1 * idade2));
  console.log("idade3 " + idade3 + " concatenado com idade4 " + idade4 + ": " + idade3 + idade4);
  console.log(nome);

  console.log("");
}

function aprender_strings(){
  console.log(">>>>> Trabalhando com strings");

  var frase = "Japáo é o melhor time do mundo";

  console.log("Frase: " + frase);
  console.log("Alterando o país: " + frase.replace("Japáo", "Brasil"));
  console.log("Colocando tudo em maiúsculo: " + frase.toUpperCase());
  console.log("Colocando tudo em minúsculo: " + frase.toLowerCase());

  console.log("");
}

function aprender_array(){
  console.log(">>>>> Trabalhando com arrays");

  var lista = ["Maçã", "Pêra", "Laranja"];
  console.log("Lista: " + lista);
  console.log("Segundo item da lista: " + lista[1]);
  
  lista.push("Uva");
  console.log("Adicionado um item na lista: " + lista);
  
  lista.pop();
  console.log("Removendo o último item da lista: " + lista);
  
  console.log("Tamanho da lista:" + lista.length);
  console.log("Lista reversa: " + lista.reverse());
  console.log("Converte a lista para String: " + lista.toString());
  console.log("Item 1 da lista: " + lista[0]);
  console.log("Primeira letra da string: " + lista.toString()[0]);
  console.log("Converte para string e coloca um separador de sua escolha: " + lista.join(" - "));
  
  console.log("");
}

function aprender_dicionario(){
  console.log(">>>>> Trabalhando com dicionário");

  // Dicionário (JSON)
  var fruta = {nome:"maçã", cor:"vermelha"}
  console.log("Nome da fruta: " + fruta.nome);
  console.log("Cor da fruta: " + fruta.cor);

  // Collection
  var frutas = [ {nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ]
  console.log("Collection de frutas:");
  console.log(frutas);
  console.log("Nome do segundo elemento: " + frutas[1].nome);

  console.log("");
}

function aprender_condicional(){
  console.log(">>>>> Trabalhando com condicional");

  var idade = prompt("Qual sua idade?");
  console.log("Idade digitada: " + idade);

  if (idade < 18){
    console.log("Você é menor de idade!")
  } else {
    console.log("Você é maior de idade!")
  };

  console.log("");
}

function aprender_lacos(){
  console.log(">>>>> Trabalhando com laços de repetição");

  console.log("Usando o While...");
  var count = 0;
  while (count <= 5) {
    console.log(count);
    count++;
  };

  console.log("Usando o For...");
  for (count = 10; count <= 15; count++) {
    console.log(count);
  };

  console.log("");
}

function aprender_data(){
  console.log(">>>>> Trabalhando com datas");

  console.log("Usando datas...");
  var d = new Date();

  console.log("Dia: " + (d.getDate()));
  console.log("Mês: " + (d.getMonth() + 1));
  console.log("Ano: " + (d.getFullYear()));

  console.log("Hora: " + d.getHours());
  console.log("Minuto: " + d.getMinutes());
  console.log("Segundo: " + d.getSeconds());

  console.log("");
}

function aprender_funcoes(){
  console.log(">>>>> Trabalhando com funções");

  console.log("Usando a função soma com 5 e 10: " + soma(5, 10));
  console.log("Trocando Japão pelo Brasil na frase: " + setReplace("Vai Japão!", "Japão", "Brasil"));

  console.log("");
}

function soma(n1, n2){
  return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}

function aprender_variaveis_locais_globais(){
  console.log(">>>>> Trabalhando com variáveis locais e globais");

  var eh_maior = "Valor fixo: Sim";
  validaIdade(prompt("Qual a sua idade?"));
  console.log("Variável global: eh_maior=" + eh_maior);

  console.log("");
}

function validaIdade(idade){
  var eh_maior;

  if (idade >= 18) {
    eh_maior = true;
  } else {
    eh_maior = false;
  }

  console.log("Variável local: eh_maior=" + eh_maior);
}

function botao1(){
  alert("Obrigado por clicar");
}

function botao2(){
  console.log(">>>>> Trabalhando com o DOM - Document Object Model");

  console.log(document.getElementById("agradecimento"));
  document.getElementById("agradecimento").innerHTML = "<u>Obrigado por clicar</u>";

  console.log("");
}

function redirecionar(){
  var resp = prompt("Deseja abrir em uma nova aba? (S/N): ").toUpperCase();
  console.log("Opção escolhida: " + resp);
  if (resp == "S"){
    window.open("http://www.uol.com.br");
  } else if (resp == "N"){
      window.location.href = "http://www.uol.com.br";
  } else {
    alert("Opção incorreta!");
  }
}

function trocar(){
  document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
}

function voltar(){
  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar2(elemento){
  elemento.innerHTML = "<u>Obrigado por passar o mouse</u>";
}

function voltar2(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
}

function funcaochange(elemento){
  console.log(">>>>> Trabalhando com o evento OnChange");
  console.log(elemento.value);
  console.log("");
}