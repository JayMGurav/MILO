import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { getCookie } from './cookies';

class CustomDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    const authTokenFromCookie = getCookie(
      context?.req,
      process.env.AUTH_COOKIE_NAME
    );
    // modify each on-going requests before it is sent to subgraph
    if (authTokenFromCookie) {
      request.http.headers.set('Authorization', authTokenFromCookie);
    }
  }

  didReceiveResponse({ response, context }) {
    const rawCookies = response.http.headers.get('set-cookie');
    if (rawCookies) {
      if (context && context.res) {
        context.res.setHeader('Set-Cookie', rawCookies);
      }
    }
    return response;
  }
}

export default CustomDataSource;
