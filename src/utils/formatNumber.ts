export default (culture: string, number: number) => new Intl.NumberFormat(culture).format(number);
