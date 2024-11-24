let menuIcon = document.querySelector('.fa-solid.fa-bars');
let linksMenu = document.querySelector('.header .container .links ul');

menuIcon.addEventListener('click', (event) => {
    if(linksMenu.style.display ==='none'){
    linksMenu.style.display ='block';
    }
    else{
        linksMenu.style.display ='none';
    }
    event.stopPropagation();
});

document.addEventListener('click', () =>{
    if(linksMenu.style.display ==='block'){
        linksMenu.style.display ='none';
    }
})