function isLeapYear(year) {
  if ((year % 4) == 0) {
  if ((year % 100) == 0) {
      if ((year % 400) == 0) {
          return (year+" adalah tahun kabisat");
      }else{
        return (year+" adalah bukan tahun kabisat");
      }	
  }else{
    return (year+" adalah tahun kabisat");
  }
}else{
  return (year+" adalah bukan tahun kabisat");
}
}

module.exports = isLeapYear