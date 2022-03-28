console.log('hola');




var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI0OTc2MDIsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjQ4NDE2OTk3LCJleHAiOjE2NDkyODA5OTcsIm5iZiI6MTY0ODQxNjk5NywianRpIjoiVEdYNnpXU3UzYk5aTGxaTCJ9.HuTSmUd-2BhtsOLiR9Tvk1BhxPN2mcSdFhqR1ENkqvE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


/*
fetch("https://apiv2.shiprocket.in/v1/external/orders", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.data))
  .catch(error => console.log('error', error));
  */

function fetchData() {

  fetch("https://apiv2.shiprocket.in/v1/external/orders", requestOptions)
  .then(response => {
    
    if(!response.ok){
      throw Error("Error");
    }
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data.data);
    const html = data.data
    .map( user => {
       return '<p>Name: ${user.channel_name}</p>'
    })
    .join("");

    console.log(html);
        document
        .querySelector("#app")
        .insertAdjacentHTML('afterbegin', html);
  })
  .catch(error => {
    console.log(error);
  })
}

fetchData();