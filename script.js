const btnGerarSenha = document.querySelector('.btn');
const inputSenha = document.querySelector('.input');
const btnCopiarSenha = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');

btnGerarSenha.addEventListener('click', () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let senha = '';
    for (let i = 0; i < 6; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    inputSenha.value = senha;

});

btnCopiarSenha.addEventListener('click', async () => {

    if(inputSenha.value === ''){
        const paragrafo = document.createElement('p');
        paragrafo.textContent = "Nenhuma senha para copiar!\nGere uma senha primeiro.";
        alertContainer.appendChild(paragrafo);
        alertContainer.style.backgroundColor = '#ff4d4d';
        alertContainer.classList.add('show');
        setTimeout(() => {
            alertContainer.classList.remove('show'); 
            alertContainer.removeChild(paragrafo);
        }, 4000);
        return;
    }else if(inputSenha.value != ''){
        await navigator.clipboard.writeText(inputSenha.value);
        const paragrafo = document.createElement('p');
        paragrafo.textContent = 'Senha copiada com sucesso!';
        alertContainer.appendChild(paragrafo);
        alertContainer.style.backgroundColor = '#4CAF50';
        alertContainer.classList.add('show');
        setTimeout(() => {
            alertContainer.classList.remove('show'); 
            alertContainer.removeChild(paragrafo);
            inputSenha.value = '';
        }, 4000);

    }
});
