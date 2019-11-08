const key = '538a4b01505051585af163fa90274182';
let celsiusDetails = 26;
let celsius = celsiusDetails;
let farenheit;


$('#button1').click(() =>{
  let cityName = $("#in").val();
  $("#in").val('');
  $('#spin').addClass('fa fa-circle-o-notch fa-spin');
  // $('#spinButton').show();
  $.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key+'&mode=json&units=metric',
    type: 'GET',
    success:function(data){
        new ProcessData(data);
    },
    error:function(err){
      console.log(err);
    },
    complete:function(){
      // $('#spinButton').hide();
      // $('#button1').show();
      $('#spin').removeClass('fa fa-circle-o-notch fa-spin');
      $('#spin').addClass('fa fa-search');
    }
});
})

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
  constructor(data) {
      $(".celsius").css('color',"#1890f0");
      $(".farenheit").css('color', '#000000');
      celsius = Math.round(data.main.temp);
      $(".cityName").text(data.name + ", " + data.sys.country);
      $('.date').text(new DateProvider().dayInString + " " +
      new DateProvider().hours + ":" + new DateProvider().minutes + " " +
      new DateProvider().meridiem);
        $("#img").attr('src','http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png');
        let climateInWords = data.weather[0].description.split(" ")[1] !== 
        undefined?data.weather[0].description.split(" ")[0]+" "+data.weather[0].description.split(" ")[1]:
        data.weather[0].description.split(" ")[0];
      $('#climate').text(climateInWords);
      $(".degree").text(celsius);
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
      $(".farenheit").css('color',"#1890f0");
      $(".celsius").css('color',"#000000");
      // console.log(celsiusDetails);
      if (this.celsiusCount < 1) {
        farenheit = Math.floor(celsius * 1.8 + 32);
        celsiusDetails = farenheit;
        this.celsiusCount++;
      }
      // console.log(farenheit);
      $(".degree").text(farenheit);
    }

    this.changeToCelsius = () => {
      $(".celsius").css('color', "#1890f0");
      $(".farenheit").css('color', "#000000");
      celsiusDetails = celsius;
      this.celsiusCount--;
      // console.log(celsius);
      $(".degree").text(celsius);
    }
  }
}