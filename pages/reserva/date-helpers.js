const isWeekend = day => {
  // 6 para sabado, 0 domingo
  return day % 7 == 6 || day % 7 == 0;
}

const getDayName = day => {
  const date = new Date(2021, 10, day);

  return new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(date);
}

export {isWeekend, getDayName}