// var data = fetch("http://ip-api.com/json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// document.getElementById("ip").innerHTML = "Your Ip :" + data.query;
// document.getElementById("location").innerHTML = "Your Ip :" + data.city;

// https://ipapi.co/json/y
fetch("http://ip-api.com/json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("ip").innerHTML = data.query;
    document.getElementById("location").innerHTML =
      data.country + " " + data.city;
  });
