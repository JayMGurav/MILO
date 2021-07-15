import { serialize, parse } from 'cookie';
import { ICookieOptions } from './parseCookies';

export const MAX_AGE = 7 * 24 * 3600000; // 1 week

const defaultCookieOptions: ICookieOptions = {
  maxAge: MAX_AGE,
  expires: new Date(Date.now() + MAX_AGE * 1000),
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  sameSite: 'lax',
};

export function setCookie(
  res: any,
  cookieName: string,
  cookieValue: string,
  options: ICookieOptions = defaultCookieOptions
) {
  const cookie = serialize(cookieName, cookieValue, { ...options });

  res.setHeader('Set-Cookie', cookie);
}

export function removeCookie(res: any, cookieName: string) {
  const cookie = serialize(cookieName, '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
}

export function parseCookies(req: any) {
  if (req?.cookies) return req?.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req?.headers?.cookie;
  return parse(cookie || '');
}

export function getCookie(req: any, cookieName: string) {
  const cookies = parseCookies(req);
  if (cookies) {
    return cookies[cookieName];
  }
  return null;
}
