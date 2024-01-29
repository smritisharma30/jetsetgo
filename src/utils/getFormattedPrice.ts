
export const getFormattedPrice = (price: number) => {
  // Ensure the price is a number
  const numericPrice = Number(price);

  // Check if the input is a valid number
  if (isNaN(numericPrice)) {
    return "Invalid Price";
  }

  // Use toLocaleString to format the number and add commas
  const formattedPrice = numericPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  return formattedPrice;
}