

document.querySelector('#textEencriptar').focus();
document.querySelector('#btnEncriptar').addEventListener('click', encriptar);
document.querySelector('#btnDesEncriptar').addEventListener('click', desencriptar);
document.querySelector('#btnCopiar').addEventListener('click', copiar);
function recolectarTexto() {

    var texto1 = document.querySelector("#textEencriptar").value;

    return texto1;


}


function encriptar() {
    var texto = recolectarTexto();

    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');

    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');



    document.querySelector("#mostrar").value = texto;
    console.log("hOLA")
    document.querySelector('#textEencriptar').value = "";

}




function desencriptar() {
    var texto = recolectarTexto();

    texto = texto.replace(/ai/g, 'a');

    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');


    document.querySelector("#mostrar").value = texto;
    document.querySelector('#textEencriptar').value = "";
    document.querySelector('#textEencriptar').focus();
}


function copiar() {

    var contenido = document.querySelector('#mostrar');

    contenido.select();
    document.execCommand('copy');
    document.querySelector('#mostrar').value = "";
    document.querySelector('#textEencriptar').focus();
    //alert("Texto copiado");
}