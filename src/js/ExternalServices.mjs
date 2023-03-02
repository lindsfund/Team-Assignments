const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: data };
  }
}

export default class ExternalServices {
  constructor(category) {
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    console.log(data.Result);
    return data.Result;
  }
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }

  //login request
async loginReq(user) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(baseURL + "login", options).then(
      convertToJson
    );
    // console.log(response.accessToken); //it's a JWT!!!!
    return response.accessToken;
  }

  //get orders from server
  async getOrders(token){
    const options = {
      method:'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    const response = await fetch(baseURL + 'orders', options)
      .then(convertToJson);
      console.log(response[0]);
      return response;
  }
}