import { ApolloServer } from 'apollo-server-micro';
import { ApolloGateway } from '@apollo/gateway';

const serviceList = [
  { name: 'Users', url: 'http://localhost:3000/api/userapi' },
];

process.setMaxListeners(serviceList.length * 2);

const gateway = new ApolloGateway({
  serviceList,
});

const apolloServer = new ApolloServer({
  gateway,
  subscriptions: false,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
  async context() {
    return {};
  },

  // ApolloServerPluginInlineTraceDisabled
  engine: false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
