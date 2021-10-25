import {isWeekend, getDayName} from "./date-helpers.js";

const calendar = document.querySelector("#app-calendar");

const fecha = new Date();
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const month = fecha.getMonth();

for (let day = 1; day <= monthDays[month]; day++) {
  const weekend = isWeekend(day);

  let name = "";
  if (day <= 7) {
    const dayName = getDayName(day);
    name = `<div class='name'>${dayName}</div>`;
  }

  calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"> ${name} <input type="button" value="${day}"></div>`);
}

document.querySelectorAll("#app-calendar .day input").forEach
(day => {
  day.addEventListener("click", event => {
    var select = document.getElementsByClassName("selected");
    for (var i = 0; i < select.length; i++) {
      select[i].classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");
  });
});