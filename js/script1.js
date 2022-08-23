{
    const aparecer = document.querySelector('.C-024');
    const desaparecer = document.querySelector('.C-019none');
    const cerrar = document.querySelector('.C-030-1close');
    const magia = document.querySelector('.C-021');

    magia.addEventListener('click', () =>{
        aparecer.classList.remove('C-024none');
        magia.classList.add('C-021none');
    });
    cerrar.addEventListener('click', () =>{
        aparecer.classList.add('C-024none');
        magia.classList.remove('C-021none');
    });
}