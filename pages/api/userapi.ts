import { ApolloServer, gql } from 'apollo-server-micro';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello world',
  },
};

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);
const apolloServer = new ApolloServer({
  schema,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
  async context() {
    return {};
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/userapi' });
