export const formatCurrency = (value) => {
    return "Rp" + new Intl.NumberFormat('id').format(Number(value));
  };