{
    const aparecer = document.querySelector('.C-024');
    const cerrar = document.querySelector('.C-030-1close');
    const magia = document.querySelector('.C-021');

    const messenger = document.querySelector('.C-021-segundo');
    const chat = document.querySelector('.C-021-tercero');

    magia.addEventListener('click', () =>{
        aparecer.classList.remove('C-024none');
        magia.classList.add('C-021none');
        messenger.classList.add('C-021none');
        chat.classList.add('C-021none');
    });
    cerrar.addEventListener('click', () =>{
        aparecer.classList.add('C-024none');
        magia.classList.remove('C-021none');
        messenger.classList.remove('C-021none');
        chat.classList.remove('C-021none');
    });
}