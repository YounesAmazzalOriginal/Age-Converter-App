function convert() {
  var input = document.querySelector("input").value;

  var YearSpan = document.querySelector("#Year");
  var MonthSpan = document.querySelector("#Month");
  var DaySpan = document.querySelector("#Day");
  var HourSpan = document.querySelector("#Hour");
  var MinuteSpan = document.querySelector("#Minute");
  var SecondSpan = document.querySelector("#Second");

  if (input > 0) {
    YearSpan.textContent = input;
    MonthSpan.textContent = input * 12;
    DaySpan.textContent = input * 365;
    HourSpan.textContent = DaySpan.textContent;
    MinuteSpan.textContent = HourSpan.textContent * 60;
    SecondSpan.textContent = MinuteSpan.textContent * 60;
  } else {
    YearSpan.textContent = "error";
    MonthSpan.textContent = "error";
    DaySpan.textContent = "error";
    HourSpan.textContent = "error";
    MinuteSpan.textContent = "error";
    SecondSpan.textContent = "error";
    return;
  }
}
