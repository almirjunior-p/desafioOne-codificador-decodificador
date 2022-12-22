var inputText = document.getElementById("inputText");
var textoCripDescipt = document.getElementById("textoCripDescipt");
var imgResultado = document.getElementById("imgResultado");
var botaoCriptografar = document.getElementById("botaoCriptografar");
var botaoDescriptografar = document.getElementById("botaoDescriptografar");
var copiar = document.getElementById("copiar");
var colar = document.getElementById("colar");
var texto;

botaoCriptografar.addEventListener("click", (e) => {
  imgResultado.style.display = "none";
  textoCripDescipt.style.display = "block";
  copiar.style.display = "flex";
  copiar.style.justifyContent = "center";
  if (inputText.value != "") {
    texto = inputText.value.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    textoCripDescipt.textContent = texto;
    inputText.value = "";
  }
});

botaoDescriptografar.addEventListener("click", (e) => {
  if (inputText.value != "") {
    texto = inputText.value.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    textoCripDescipt.textContent = texto;
    inputText.value = "";
    copiar.innerHTML = "Copiar";
  }
});

copiar.addEventListener("click", (e) => {
  navigator.clipboard.writeText(texto);
  copiar.innerHTML = "Texto Copiado";
});

colar.addEventListener("click", async (e) => {
  const resposta = await navigator.clipboard.readText();

  inputText.value = resposta;
});
