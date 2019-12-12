

function changeOnRus(){
    let logo = document.getElementById('logo');
    let createProductH = document.getElementById('createProductH');
    let productsH = document.getElementById('productsH');
    let btnSmall = document.getElementById('btnSmall');
    let productBtnActive = document.getElementById('productBtnActive');
    let createBtnActive = document.getElementById('createBtnActive');
    let productBtnNonActive = document.getElementById('productBtnNonActive');
    logo.innerText = 'Товары';
    // createProductH.innerText = 'Добавить товар';
    productsH.innerText = "Товары";
    btnSmall.innerText = 'Удалить / Изменить';
    productBtnActive.innerText = 'Товары';
    createBtnActive.innerText = 'Создать';
    productBtnNonActive.innerText = 'Создать'

}

function changeOnEng(){
    let logo = document.getElementById('logo');
    let createProductH = document.getElementById('createProductH');
    let productsH = document.getElementById('productsH');
    let btnSmall = document.getElementById('btnSmall');
    let productBtnActive = document.getElementById('productBtnActive');
    let createBtnActive = document.getElementById('createBtnActive');
    logo.innerText = 'Products';
    // createProductH.innerText = 'Create Product';
    productsH.innerText = "Products";
    btnSmall.innerText = 'Delete / Update';
    productBtnActive.innerText = 'Products';
    createBtnActive.innerText = 'Create';


}
