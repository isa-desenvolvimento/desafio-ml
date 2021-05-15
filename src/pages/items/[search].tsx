import Card from '@/components/Card';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Item = dynamic(() => import('@/components/Item'));
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

type IProps = {
  items: Array<ItemsProps>
}

export default function List({
  items = [{
    id: '1', title: 'title', thumbnail: '/assets/Logo_ML.png', price: 123, address: { city_name: 'sasdads' }, shipping: { free_shipping: false },
  }],
}: IProps) {
  return (
    <Card>
      {
          items && (items.map((item) => (
            <Link href={`/details/${item.id}`} key={item.id}>
              <Item {...item} />
            </Link>
          ))
          )
        }
    </Card>
  );
}
