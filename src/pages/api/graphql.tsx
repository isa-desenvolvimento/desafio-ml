import { ApolloServer, gql } from 'apollo-server-micro';
import { searchItems } from './Items';

const typeDefs = gql`
  type Address {
    city_name: String
  }

  type Shipping {
    free_shipping: Boolean
  }

  type Item {
    id: String 
    title: String 
    price: Float
    picture: String 
    condition: String 
    address: Address
    thumbnail: String
    shipping: Shipping
  }

  type Query{
    results(query: String): [Item]!
    item(id: String): Item!
  }
`;

const resolvers = {
  Query: {
    results: (_, { query }) => searchItems(query),
  },
};
export const graphqlClient = new ApolloServer({ typeDefs, resolvers });

export default (req, res) => {
  graphqlClient.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
