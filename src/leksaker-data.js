import API from "./api-config";
export const parseList = async (response) => {
  if (response.status !== 200)
    throw Error(response.message || `Error, status ${response.status}`);
  let list = await response.json();
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};
export const getLeksaker = async () => {
  try {
    const response = await fetch(`${API}/leksaker`, {
      method: "GET",
    });
    console.log(response);
    const leksaker = await parseList(response);
    return leksaker;
  } catch (error) {
    return console.log(error);
  }
};
export const deleteLeksak =  async (id) => {
  try {
    const response = await fetch(`${API}/leksaker/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    return response;
  } catch (error) {
    return console.log(error);
  }
}
export const createLeksak =  async (name) => {
  try {
    
    const response = await fetch(`${API}/leksaker/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name})
    });
    console.log(response);
    const leksak = await parseList(response);
    console.log(leksak);
    return leksak;
  } catch (error) {
    return console.log(error);
  }
}
export const updateLeksak =  async (leksak) => {
  try {
    console.log("Updating id: ");
    console.log(leksak);
    const response = await fetch(`${API}/leksaker/${leksak._id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: leksak.name})
    });
    console.log("put response");
    console.log(response);
    const resultLeksak = await parseList(response);
    console.log("put parsed");
    console.log(resultLeksak);
    return resultLeksak;
  } catch (error) {
    return console.log(error);
  }
}

