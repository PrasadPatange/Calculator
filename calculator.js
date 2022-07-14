let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log("Clicked :",e.target.innerText)
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Error! Invalid Operation!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
        break;
    }
  });
});

// Current Date
const today = (dt) => {
  let date = dt.getDate();
  let dateSufix =
    date % 10 == 1 && date != 11
      ? "st"
      : date % 20 == 2 && date != 12
      ? "nd"
      : date % 30 == 3 && date != 13
      ? "rd"
      : "th";
  let monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currMonth = monthArr[dt.getMonth()];
  let currYear = dt.getFullYear();
  return date + dateSufix + " " + currMonth + " " + currYear;
};
let date = today(new Date());
let dateText = document.getElementById("date");
dateText.innerText = date;

// Run Timmer every second
const Timmer = setInterval(() => {
  let now = new Date();
  let hours = (now.getHours() < 10 ? "0" : "") + now.getHours();
  let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  let seconds = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
  let am_pm = now.getHours() <= 12 ? "AM" : "PM";
  let time = hours + " : " + minutes + " : " + seconds + " " + am_pm;
  let timmer = document.getElementById("time");
  timmer.innerText = time;
}, 1000);
