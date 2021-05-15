export default function formatPrice(price: number): string {
  const priceFormatter = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
  return priceFormatter.format(price);
}
