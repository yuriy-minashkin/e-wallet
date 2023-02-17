export function formatNumber(number) {
  return Math.abs(number).toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true});
}

export function formatNumberSaveMinus(number) {
 return number.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true});
}
