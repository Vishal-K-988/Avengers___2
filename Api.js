
/*
function getData(){
    url = "https://apiv2.shiprocket.in/v1/external/orders";

    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);

    })
}

getData()
*/

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI0OTc2MDIsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjQ4MzMyNDcxLCJleHAiOjE2NDkxOTY0NzEsIm5iZiI6MTY0ODMzMjQ3MSwianRpIjoiQUgybnJvUDBGdzl6RlFocSJ9.21V-Z4a8k4fWorPgiHRHLKlW5gS6Gh2973dnuJgdS5M");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://apiv2.shiprocket.in/v1/external/orders", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

 