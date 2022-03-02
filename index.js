
function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render();
}

spinnerPage.render();

let CATALOG =[];


fetch('http://myjson.dit.upm.es/api/bins/is1j')
    .then(res => res.json())
    .then(body =>{
        CATALOG = body;

            spinnerPage.handleClear();
            render();


    })
    .catch(error => {
        console.log(error);
    })



