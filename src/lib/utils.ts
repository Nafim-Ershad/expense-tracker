export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function getToday(): { date: string; time: string } {
  const date_time = new Date()

  // const day = date_time.getDay()
  // const date = date_time.getDate()
  // const month = date_time.getMonth()
  // const year = date_time.getFullYear()
  // const hours = date_time.getHours()
  // const minutes = date_time.getMinutes()
  // const seconds = date_time.getSeconds()

  // return {
  //   day,
  //   date,
  //   month,
  //   year,
  //   hours,
  //   minutes,
  //   seconds
  // }

  const date = date_time.toLocaleDateString()
  const time = date_time.toLocaleTimeString()

  return {
    date,
    time
  }
}
