{
    const aparecer = document.querySelector('.C-024');
    const cerrar = document.querySelector('.C-030-1close');
    const magia = document.querySelector('.C-021');

    const messenger = document.querySelector('.C-021-segundo');
    const chat = document.querySelector('.C-021-tercero');



    const formessenger = document.querySelector('.C-024none-messenger');
    const forchat = document.querySelector('.C-024none-chat');

    const cerrarmessenger = document.querySelector('.C-030-1close-messenger');
    const cerrarchat = document.querySelector('.C-030-1close-chat')

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


    messenger.addEventListener('click', () =>{
        formessenger.classList.remove('C-024none');
        magia.classList.add('C-021none');
        messenger.classList.add('C-021none');
        chat.classList.add('C-021none');
    });
    cerrarmessenger.addEventListener('click', () =>{
        formessenger.classList.add('C-024none');
        magia.classList.remove('C-021none');
        messenger.classList.remove('C-021none');
        chat.classList.remove('C-021none');
    });


    chat.addEventListener('click', () =>{
        forchat.classList.remove('C-024none');
        magia.classList.add('C-021none');
        messenger.classList.add('C-021none');
        chat.classList.add('C-021none');
    });
    cerrarchat.addEventListener('click', () =>{
        forchat.classList.add('C-024none');
        magia.classList.remove('C-021none');
        messenger.classList.remove('C-021none');
        chat.classList.remove('C-021none');
    });

}