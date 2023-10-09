export const getDate = () => {
  let date = new Date();

  let ambilTanggal = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  return ambilTanggal;
};
