import Card from '@/components/Card';
import Link from '@/components/Link';
import dynamic from 'next/dynamic';
//import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
//import { graphqlClient } from '@/pages/api/graphql';

const Item = dynamic(() => import('@/components/Item'));

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

type IProps = {
  items: Array<ItemsProps>
}

export default function List({ items }: IProps) {
  return (
    <Card>
      {
        items && (items.map((item) => (
          <Link href={`/api/character/${item.id}`} key={item.id}>
            <Item {...item} />
          </Link>
        ))
        )
      }
    </Card>
  );
}

