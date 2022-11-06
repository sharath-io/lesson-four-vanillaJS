var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');


function clickHandler(){
   output.innerText = 'uvashgcvgvjcb' + txtInput.value;
}

btnTranslate.addEventListener('click', clickHandler);