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
  const responseBody = await response.json();
  return {
    ok: response?.ok,
    statusCode: response?.status,
    statusText: response?.statusText,
    url: response?.url,
    body: responseBody,
  };
}

export {
  httpGetAllProducts,
  addProduct,
  updateProduct,
  deleteProductWithID,
  httpLoginRequest,
};
