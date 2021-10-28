const fecha = new Date()

const isWeekend = pos => {
  // 6 para sabado, 0 domingo
  return pos % 7 == 6 || pos % 7 == 0;
}

const getDayName = day => {
  return new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(day);
}

export {isWeekend, getDayName}