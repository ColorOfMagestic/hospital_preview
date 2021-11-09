const cardsHistory = document.querySelector('.cards-history');
const btnSearchCards = document.querySelectorAll('.search-card');

// Toggler

function toggler() {
    const toggler = document.querySelector('.toggler');

    const menu = document.querySelector('.menu');

    toggler.addEventListener('change', function () {
        if (toggler.checked) {
            menu.classList.add('menu--active');
        }
        else {
            menu.classList.remove('menu--active');
        }
    });
    
} 
toggler();



// SearchCards
const modalRegistry = document.querySelector('.modal-registry');

// Modal registry

function SearchCards() {

    btnSearchCards.forEach(el => {
    el.addEventListener('click', function () {
        modalRegistry.classList.add('modal-registry--active')
    });
});
}
SearchCards();
// delete 

function delClass() {
    btnsChooseCancel.forEach(el=> {
        el.addEventListener('click', function () {
            modalRegistry.classList.remove('modal-registry--active');
        });
    })
};

delClass();





