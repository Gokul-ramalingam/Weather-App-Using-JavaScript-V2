/*This array contains various objects containing details of various cities*/
const array = [{
    city: 'Bangalore',
    state: 'Karnataka',
    degree: 26,
    weather: 'Partly Cloudy',
    image: 'images/cloudy.svg'
  },
  {
    city: 'Chennai',
    state: 'TamilNadu',
    degree: 34,
    weather: 'Sunny',
    image: 'images/sunny.svg'
  },
  {
    city: 'Coimbatore',
    state: 'TamilNadu',
    degree: 26,
    weather: 'Partly Cloudy',
    image: 'images/cloudy.svg'
  },
  {
    city: 'Noida',
    state: 'Delhi',
    degree: 23,
    weather: 'Thunder',
    image: 'images/thunder.svg'
  },
  {
    city: 'Patna',
    state: 'Bihar',
    degree: 30,
    weather: 'Humidity',
    image: 'images/humid.svg'
  },
  {
    city: 'Gurugram',
    state: 'Haryana',
    degree: 34,
    weather: 'Sunny',
    image: 'images/sunny.svg'
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    degree: 20,
    weather: 'Rainy',
    image: 'images/rainy.svg'
  },
  {
    city: 'Amaravati',
    state: 'Andra Pradesh',
    degree: 23,
    weather: 'Humidity',
    image: 'images/humid.svg'
  },
  {
    city: 'Jaipur',
    state: 'Rajasthan',
    degree: 32,
    weather: 'Sunny',
    image: 'images/sunny.svg'
  },
  {
    city: 'Panaji',
    state: 'Goa',
    degree: 22,
    weather: 'Rainy',
    image: 'images/rainy.svg'
  },
  {
    city: 'Mysore',
    state: 'Karnataka',
    degree: 24,
    weather: 'Partly Cloudy',
    image: 'images/cloudy.svg'
  },
  {
    city: 'Madurai',
    state: 'TamilNadu',
    degree: 35,
    weather: 'Sunny',
    image: 'images/sunny.svg'
  },
  {
    city: 'Alleppey',
    state: 'Kerala',
    degree: 20,
    weather: 'Rainy',
    image: 'images/rainy.svg'
  }
];

let celsiusDetails = 26;
let celsius = celsiusDetails;
let farenheit;


/*This class Provides Date Details*/
class DateProvider {
  constructor() {
    this.dayInNumber = new Date().getDay();
    //  console.log(this.dayInNumber);
    this.dayInString = this.dayInNumber == 0 ?
      'Sunday' : this.dayInNumber == 1 ?
      'Monday' : this.dayInNumber == 2 ?
      'Tuesday' : this.dayInNumber == 3 ?
      'Wednesday' : this.dayInNumber == 4 ?
      'Thursday' : this.dayInNumber == 5 ?
      'Friday' : 'Saturday';
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    if (this.minutes < 10)
      this.minutes = '0' + this.minutes;
    this.meridiem = 'am'
    if (this.hours == 0)
      this.hours = 12;
    this.meridiem = 'am'
    if (this.hours >= 12) {
      if (this.hours >= 13)
        this.hours -= 12;
      this.meridiem = 'pm';
    }
  }
}

/*This class process and provide the entire content about weather*/


class ProcessData {
  constructor() {
    this.process = (value) => {
      document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
      document.getElementsByClassName("farenheit")[0].style.color = "#000000";
      // console.log(value);
      this.cityDetails = array.filter((arr) => arr.city === value);
      celsiusDetails = this.cityDetails[0].degree;
      celsius = celsiusDetails;
      document.getElementsByClassName("cityName")[0]
        .innerHTML = this.cityDetails[0].city + ", " + this.cityDetails[0].state;
      document.getElementsByClassName("date")[0]
        .innerHTML = new DateProvider().dayInString + " " +
        new DateProvider().hours + ":" + new DateProvider().minutes + " " +
        new DateProvider().meridiem;
      let img = " <img src='" + this.cityDetails[0].image +
        "' alt'weather-icon' id='img'>"
      document.getElementsByClassName("condition")[0]
        .innerHTML = this.cityDetails[0].weather + img;
      document.getElementsByClassName("degree")[0]
        .innerHTML = this.cityDetails[0].degree;
      // console.log(img);
    }
  }
}

/*It checks wheather the entered key is enter key if so then call the process function*/
var input = document.getElementById("in");
input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button1").click();
  }
});



/*This class provides fahrenheit to celsius and vice versa switching functionalities*/

class Weather {
  constructor() {
    this.celsiusCount = 0;
    this.changeToFahrenheit = () => {
      document.getElementsByClassName("farenheit")[0].style.color = "#1890f0";
      document.getElementsByClassName("celsius")[0].style.color = "#000000";
      // console.log(celsiusDetails);
      if (this.celsiusCount < 1) {
        farenheit = Math.floor(celsius * 1.8 + 32);
        celsiusDetails = farenheit;
        this.celsiusCount++;
      }
      // console.log(farenheit);
      document.getElementsByClassName("degree")[0].innerHTML = farenheit;
    }

    this.changeToCelsius = () => {
      document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
      document.getElementsByClassName("farenheit")[0].style.color = "#000000";
      celsiusDetails = celsius;
      this.celsiusCount--;
      // console.log(celsius);
      document.getElementsByClassName("degree")[0].innerHTML = celsius;
    }
  }
}