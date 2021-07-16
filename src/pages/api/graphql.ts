import { ApolloServer } from 'apollo-server-micro';
import { ApolloGateway } from '@apollo/gateway';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
import CustomDataSource from 'src/utils/customGatewayDataSource';

const serviceList = [
  { name: 'Users', url: 'https://milo-user-service.vercel.app/api/graphql' },
  // { name: 'Users', url: 'http://localhost:3001/api/graphql' },
];

process.setMaxListeners(serviceList.length * 2);

const gateway = new ApolloGateway({
  serviceList,
  // serviceHealthCheck: true,
  buildService({ url }) {
    return new CustomDataSource({ url });
  },
});

const apolloServer = new ApolloServer({
  gateway,
  subscriptions: false,
  introspection: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
  plugins: [ApolloServerPluginInlineTraceDisabled()],
  async context({ req, res }) {
    return { req, res };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
