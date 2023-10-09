export const filterDate = ({ Transaksi, Tanggal }) => {
  const filterAll = Transaksi.filter((data) => {
    if (data.tanggal === Tanggal) {
      return true;
    } else if (Tanggal === "") {
      return true;
    }
    return false;
  });

  return filterAll;
};
