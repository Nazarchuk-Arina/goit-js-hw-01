function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = deliveryFee + price;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
