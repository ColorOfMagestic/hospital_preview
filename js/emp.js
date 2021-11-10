// modal-employee 
const modalDismissal = document.querySelector('.modal-dismissal');
const modalDismissalConfirm = document.querySelector('.modal-dismissal--confirm');
const modalRedactionData = document.querySelector('.modal-redaction-data');
const modalRedactionEducation = document.querySelector('.modal-redaction-education');
const modalRedactionFile = document.querySelector('.modal-redaction-file');
const modalRedactionExperience = document.querySelector('.modal-redaction-experience');
const modalRedactionEncourage = document.querySelector('.modal-redaction-encourage');
const btnsChooseCancel = document.querySelectorAll('.btn-choose-cancel');
const addMenuBtn = document.querySelectorAll('.add-menu_list_item_btn');
const addMenu = document.querySelector('.add-menu');


const addMenuBtnContact = document.querySelector('.add-menu_list_item_btn--contact');
const addMenuBtnEducation = document.querySelector('.add-menu_list_item_btn--education');
const addMenuBtnDocs = document.querySelector('.add-menu_list_item_btn--docs');
const addMenuBtnExperience = document.querySelector('.add-menu_list_item_btn--experience');
const addMenuBtnStimulation = document.querySelector('.add-menu_list_item_btn--stimulation');



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

// Dismissal
function dismissal() {
    const btnEnter = document.querySelector('.logo-btn_enter');

    btnEnter.addEventListener('click', function () {
        modalDismissal.classList.add('modal-dismissal--active');
    });
}

dismissal();

// addProperty
function addProperty() {

    const btnAddEmp = document.querySelector('.logo-btn_add-emp');
    btnAddEmp.addEventListener('click', function () {
        addMenu.classList.toggle('add-menu--active');
    });
}

addProperty();


// Add modal
function addAllModal() {
    function addModal(btn,cls,cls2) {
        btn.addEventListener('click', function() {
            addMenu.classList.remove('add-menu--active');
            cls.classList.add(`${cls2}--active`);
        })
        
    }
    addModal(addMenuBtnContact,modalRedactionData,'modal-redaction-data');
    addModal(addMenuBtnEducation,modalRedactionEducation,'modal-redaction-education');
    addModal(addMenuBtnDocs,modalRedactionFile,'modal-redaction-file');
    addModal(addMenuBtnExperience,modalRedactionExperience,'modal-redaction-experience');
    addModal(addMenuBtnStimulation,modalRedactionEncourage,'modal-redaction-encourage');
}

addAllModal();


// Close modal
function delClass() {
    btnsChooseCancel.forEach(el=> {
        el.addEventListener('click', function () {
            function removeClass(name, cls) {
                name.classList.remove(`${cls}--active`);
            }
            removeClass(modalDismissal,'modal-dismissal');
            removeClass(modalRedactionData,'modal-redaction-data');
            removeClass(modalRedactionEducation,'modal-redaction-education');
            removeClass(modalRedactionExperience,'modal-redaction-experience');
            removeClass(modalRedactionEncourage,'modal-redaction-encourage');
            removeClass(modalRedactionFile,'modal-redaction-file');
        });
    })
};

delClass();

