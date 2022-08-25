// este es el apartado para los iconos de whatsapp y messenger 
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

// Este es para el apartado de aprende mas
{
    const aparecer = document.querySelector('.C-042-13');
    const abrir = document.querySelector('.C-043');
    const cerrar = document.querySelector('.C-046');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 2
{
    const aparecer = document.querySelector('.C-042-13player2');
    const abrir = document.querySelector('.C-043video2');
    const cerrar = document.querySelector('.C-046cerrar2');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 3
{
    const aparecer = document.querySelector('.C-042-13player3');
    const abrir = document.querySelector('.C-043video3');
    const cerrar = document.querySelector('.C-046cerrar3');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 4
{
    const aparecer = document.querySelector('.C-042-13player4');
    const abrir = document.querySelector('.C-043video4');
    const cerrar = document.querySelector('.C-046cerrar4');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 5
{
    const aparecer = document.querySelector('.C-042-13player5');
    const abrir = document.querySelector('.C-043video5');
    const cerrar = document.querySelector('.C-046cerrar5');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 6
{
    const aparecer = document.querySelector('.C-042-13player6');
    const abrir = document.querySelector('.C-043video6');
    const cerrar = document.querySelector('.C-046cerrar6');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 7
{
    const aparecer = document.querySelector('.C-042-13player7');
    const abrir = document.querySelector('.C-043video7');
    const cerrar = document.querySelector('.C-046cerrar7');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 8
{
    const aparecer = document.querySelector('.C-042-13player8');
    const abrir = document.querySelector('.C-043video8');
    const cerrar = document.querySelector('.C-046cerrar8');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 9
{
    const aparecer = document.querySelector('.C-042-13player9');
    const abrir = document.querySelector('.C-043video9');
    const cerrar = document.querySelector('.C-046cerrar9');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 10
{
    const aparecer = document.querySelector('.C-042-13player10');
    const abrir = document.querySelector('.C-043video10');
    const cerrar = document.querySelector('.C-046cerrar10');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}
// para el video 11
{
    const aparecer = document.querySelector('.C-042-13player11');
    const abrir = document.querySelector('.C-043video11');
    const cerrar = document.querySelector('.C-046cerrar11');
    const video = document.querySelector('.C-044-22');

    aparecer.addEventListener('click', () =>{
        abrir.classList.remove('C-043none');
        video.classList.remove('C-044-22none');
    });
    cerrar.addEventListener('click', () =>{
        abrir.classList.add('C-043none');
        video.classList.add('C-044-22none');
        alert('De no ponerle en pausa se seguirá escuhando el sonido del video al salir');
    });
}

// {
//     function mute() {
//     var aud = document.getElementById("music");
//         if (aud.muted == false) {aud.muted = true}
//         else {aud.muted = false}
//     }

// }