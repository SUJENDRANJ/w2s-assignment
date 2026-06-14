const BASE_URL = "https://dummyjson.com";

export const API_ENDPOINTS = {
  USERS: `${BASE_URL}/users?limit=100&select=id,firstName,lastName,email,phone,age,gender,address`,

  PRODUCTS: `${BASE_URL}/products?limit=100&select=id,title,description,category,price,brand,sku,warrantyInformation,availabilityStatus,images`,
};
