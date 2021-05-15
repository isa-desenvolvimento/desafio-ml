import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import styles from '@/styles/Item.module.scss';

type Address = {
  'city_name': string;
}

type Shipping = {
  'free_shipping': boolean;
}

type ItemsProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  address: Address;
  shipping: Shipping;
}

export default function ItemList({
  thumbnail, address, price, id, title, shipping,
} : ItemsProps) {
  if (!thumbnail) {
    return null;
  }

  return (
    <div className={styles.container} id={id}>
      <div className={styles.imageContainer}>
        <Image width="180" height="180" src={thumbnail} alt={title} objectFit="contain" />
      </div>
      <div className={styles.containerDetails}>
        <div className={styles.priceContainer}>
          <h2>
            {formatPrice(price)}
          </h2>
          {shipping && <div className={styles.shipping} />}
        </div>
        <span>{title}</span>
      </div>
      <span className={styles.address}>{address?.city_name}</span>
    </div>
  );
}
