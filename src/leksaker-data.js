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
export default async function getLeksaker() {
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
}
