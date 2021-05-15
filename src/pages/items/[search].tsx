import Card from '@/components/Card';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { graphqlClient } from '@/pages/api/graphql';

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

export default function List({ items }: IProps) {
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

export const getServerSideProps = async (ctx) => {
  const { search } = await ctx.params;

  const query = `  
    query{
      results(query: "${search}") {
        id
        title
        price 
        picture
        condition
        shipping{
          free_shipping
        }
        thumbnail
        address{
          city_name
        }  
      }
    }
  `;

  const { data } = await graphqlClient.executeOperation({ query });

  return {
    props: {
      items: data.results,
    },
  };
};
