import Image from 'next/image';
import styles from '@/styles/Item.module.scss';

type location = {
  'name': string;
}

type origin = {
  'name': string;
}

type episode = {
  'episode': number;
  'air_date': string
}

type ItemsProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  location: location;
  origin: origin;
  episode: episode;
}

export default function ItemList({
  id, thumbnail, location, origin, episode,
}: ItemsProps) {
  if (!thumbnail) {
    return null;
  }

  return (
    <div className={styles.container} id={id}>
      <div className={styles.imageContainer}>
        <Image width="180" height="180" src={thumbnail} objectFit="contain" />
      </div>
      <div className={styles.containerDetails}>
        <div className={styles.priceContainer}>
          <h2>
            {location} <br /> {origin} <br /> {episode} <br />
          </h2>
        </div>
      </div>
    </div>
  );
}
