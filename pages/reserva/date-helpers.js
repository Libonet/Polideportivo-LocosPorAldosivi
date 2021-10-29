const fecha = new Date()

const isWeekend = pos => {
  // 6 para sabado, 0 domingo
  return pos % 7 == 6 || pos % 7 == 0;
}

const getDayName = day => {
  var date = new Date(2018, 0, day);
  return new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(date);
}

export {isWeekend, getDayName}