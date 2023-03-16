const API_URL = 'http://localhost:8000'

async function httpGetAllProducts() {
    const response = await fetch(`${API_URL}/products`)
    return await response.json();
}

async function addProduct() {

}

async function updateProduct() {

}

async function deleteProductWithID() {

}

export { httpGetAllProducts, addProduct, updateProduct, deleteProductWithID }