
// Elementos del html
var textarea_resultado = document.getElementById('textarea_resultado');
var textarea_encriptar = document.getElementById('textarea_encriptar');

// Abecedario Español
const abecedario = [
    ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Abecedario Alterado
const abecedarioAlterado = ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'a', 'b', 'c', 'd'];


//  Capturar el mensaje desde el textarea
function capturarTexto() {
    textarea_resultado.value = '';
    let mensajeCapturado = document.getElementById("textarea_encriptar").value;
    let mensaje = mensajeCapturado;
    console.log(mensajeCapturado);
    console.log('Mensaje: ' + mensaje);
    return mensaje
}


function cifrar() {
    mensajeRecivido = capturarTexto();
    textarea_resultado.value = encriptar(mensajeRecivido);
    textarea_encriptar.value = '';
}


function descifrar() {
    mensajeRecivido = capturarTexto();
    textarea_resultado.value = desencriptar(mensajeRecivido);
    textarea_encriptar.value = '';
}


// Encriptar el mensaje
function encriptar(mensajeLimpio) {
    // mensajeLimpio a Array origen
    let mensajeLimpioArray = Array.from(mensajeLimpio);

    // Array mensajeLimpio encriptado resultado
    let mensajeLimpioArrayEncriptado = [];

    mensajeLimpioArray.forEach(element => {
        let indice = abecedario.indexOf(element);
        console.log(indice);
        console.log(element);
        mensajeLimpioArrayEncriptado.push(abecedarioAlterado[indice]);
    });

    // Array a string
    mensajeLimpioEncriptadoString = mensajeLimpioArrayEncriptado.join('');
    // console.log(mensajeLimpioEncriptadoString);
    return mensajeLimpioEncriptadoString;
}


// Desencriptar el mensaje
function desencriptar(mensajeEncriptado) {
    // Mensaje a Array origen
    let mensajeArrayDesencriptar = Array.from(mensajeEncriptado);

    //  Array del mensaje desencriptado resultado
    var mensajeArrayDesencriptado = [];

    mensajeArrayDesencriptar.forEach(element => {
        let indice = abecedarioAlterado.indexOf(element);
        console.log(indice);
        console.log(element);
        mensajeArrayDesencriptado.push(abecedario[indice]);
    });
    // Array a string
    mensajeDesencriptadoString = mensajeArrayDesencriptado.join('');
    console.log(mensajeArrayDesencriptado);
    return mensajeDesencriptadoString;
}
