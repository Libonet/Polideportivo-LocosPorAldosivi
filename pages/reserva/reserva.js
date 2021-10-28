import {isWeekend, getDayName} from "./date-helpers.js";

const calendar = document.querySelector("#app-calendar");

const fecha = new Date();
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const actualMonth = fecha.getMonth();
const firstDay = new Date(fecha.getFullYear(), actualMonth, 1);
var cont = 1;

function crearCalendario(month) {
  for (let day = 2-(firstDay.getDay()); day <= monthDays[month]; day++) {
    if (day < 1) {
      if (month-1 == -1){
        var diaCorrecto = monthDays[11] + day;
        var lastMonthDates = new Date((fecha.getFullYear())-1, 11, diaCorrecto) // Teo, el año debería ser calculado acá
      }
      else { 
        var diaCorrecto = monthDays[month-1] + day;
        var lastMonthDates = new Date(fecha.getFullYear(), month-1, diaCorrecto)
      }
      crearDiasCalendario(diaCorrecto, cont, lastMonthDates, false);
    }
    if (day >= 1){
      var date = new Date(fecha.getFullYear(), month, day) // Teo, el año debería ser calculado acá
      crearDiasCalendario(day, cont, date, true);
    }
    cont = cont+1;
  }
}

function crearDiasCalendario(day, cont, date, mesActual) {
  var weekend = isWeekend(cont);

  let name = "";
  if (cont <= 7) {
    const dayName = getDayName(date);
    name = `<div class='name'>${dayName}</div>`;
  }

  if (mesActual){
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"> ${name} <button type="button" class="mesActual" ">${day}</button></div>`);
  }
  else {
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"> ${name} <div class="mesPasado">${day}</div></div>`);
  }
}

crearCalendario(actualMonth);

document.querySelectorAll("#app-calendar .day button").forEach
(day => {
  day.addEventListener("click", event => {
    var required = document.getElementById("required-calendario");
    required.innerHTML = '<input class="required" placeholder="" value="'+day.innerHTML+'" name="day">';
    var select = document.getElementsByClassName("selected");
    for (var i = 0; i < select.length; i++) {
      select[i].classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");
  });
});

document.querySelectorAll(".horario").forEach
(hora => {
  hora.addEventListener("click", event => {
    var required = document.getElementById("required-horario");
    required.innerHTML = '<input class="required" placeholder="" value="'+hora.innerHTML+'" name="hora">';
    var select = document.getElementsByClassName("selectedHorario");
    for (var i = 0; i < select.length; i++) {
      select[i].classList.remove("selectedHorario");
    }
    event.currentTarget.classList.add("selectedHorario");
  });
});

export {crearCalendario}

// var calendarButton = document.querySelectorAll("#CalendarButton");
// calendarButton.forEach(button => {
//   button.addEventListener("click", event => {

//   });
// });

// document.querySelector(".previous button").forEach(day => {
//   day.addEventListener("click", event => {
//     var calendar = document.getElementById("#app-calendar");
//     calendar.innerHTML.replace("");
//     crearCalendario(actualMonth);
//     var nextButton = document.querySelector("#previousButton");
//     nextButton.innerHTML = `<button type="button" class="previous">Anterior</button>`
//   });
// });