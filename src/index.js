//https://api.shecodes.io/weather/v1/current?query=Sydney&key=0c438b6c01ec6a33ecd156b9o0bt34ff&units=metric

function displayTemp(response) {
  console.log(response.data);
  console.log(response.data.temperature.current);
  let headingOne = document.querySelector("h1");
  headingOne.innerHTML = `It is ${Math.round(
    response.data.temperature.current
  )} degrees in Sydney`;
}
let apiKey = "0c438b6c01ec6a33ecd156b9o0bt34ff";
//let query = "Sydney";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=0c438b6c01ec6a33ecd156b9o0bt34ff&units=metric";
axios.get(apiUrl).then(displayTemp);
