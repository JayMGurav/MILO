import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { getCookie, setCookie } from './cookies';
import parseCookies from './parseCookies';

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
      const cookies = parseCookies(rawCookies);
      cookies.forEach(({ cookieName, cookieValue, options }) => {
        if (context && context.res) {
          // context.res.cookie(cookieName, cookieValue, { ...options });
          setCookie(context.res, cookieName, cookieValue, { ...options });
        }
      });

      // if (context && context.res) {
      //   context.res.setHeader('Set-Cookie', rawCookies);
      // }
    }
    return response;
  }
}

export default CustomDataSource;

// const cookies = parseCookies(rawCookies);
// cookies.forEach(({ cookieName, cookieValue, options }) => {
//   if (context && context.res) {
//     context.res.cookie(cookieName, cookieValue, { ...options });
//   }
// });
