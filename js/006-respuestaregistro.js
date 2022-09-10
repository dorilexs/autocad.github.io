{
    const padre = document.querySelector('.Spadreseccion-006');
    const padremirando = document.querySelector('.Spadreseccion-006-none');
    const cerrar = document.querySelector('.a009-006')
    const vida = document.querySelector('.C-042-5-11');

    vida.addEventListener('click', () =>{
        padre.classList.remove('Spadreseccion-006-none');
    })

    cerrar.addEventListener('click', () =>{
        padre.classList.add('Spadreseccion-006-none');
    })


}