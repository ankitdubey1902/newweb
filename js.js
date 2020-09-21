// var data = fetch("http://ip-api.com/json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// document.getElementById("ip").innerHTML = "Your Ip :" + data.query;
// document.getElementById("location").innerHTML = "Your Ip :" + data.city;

// https://ipapi.co/json/
// http://ip-api.com/json
fetch("https://ipapi.co/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("ip").innerHTML = data.ip;
    document.getElementById("location").innerHTML =
      data.country + " " + data.city;
  });
