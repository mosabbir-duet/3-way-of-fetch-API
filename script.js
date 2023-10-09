// const axios = require('axios');
// data fetch using XMLHttpRequest
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
  if (request.status === 200) {
    console.log(JSON.parse(request.response));
  } else {
    console.log(`Error: ${request.status}`);
  }
};
console.log(request);

// data fetch using fetch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(`Data is: \n`, data))
  .catch((error) => console.error(error.message));

// second approach data fetch using fetch   

async function dataFetch() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data
  } catch (error) {
        return error.message;
    }
}


dataFetch().then(res => {
    console.log(res)
})

// axios 

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err.message))

// axios with async 

console.log("axios with async:")

async function dataFetchAxios() {
    try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/user');
    const data =  res.data;
    console.log(data)
    }
    catch(err){console.log(err.message)} 
}

dataFetchAxios()