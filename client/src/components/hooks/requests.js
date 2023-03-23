const API_URL = "http://localhost:8000";

async function httpGetAllProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}

async function addProduct() {}

async function updateProduct() {}

async function deleteProductWithID() {}

async function httpLoginRequest(payload, inSignUpState) {
  const response = await fetch(
    `${API_URL}/login/${inSignUpState ? "signup" : "signin"}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  return await response.json();
}

export {
  httpGetAllProducts,
  addProduct,
  updateProduct,
  deleteProductWithID,
  httpLoginRequest,
};
