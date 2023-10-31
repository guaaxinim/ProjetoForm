const form = document.getElementById('form1');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaSenha1();
    validaSenha2();
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = '';
}

function validaNome(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function validaEmail(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function validaSenha1(){
    if(campos[2].value.length < 6)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        validaSenha2();
    }
}

function validaSenha2(){
    if(campos[2].value == campos[3].value && campos[3].value.length  >=6)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}