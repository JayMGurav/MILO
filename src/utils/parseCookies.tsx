export default function parseCookies(rawCookies: string) {
  if (!rawCookies.includes('=')) {
    throw new Error(
      'Invalid raw cookies, look at the format of a set-cookie header string and provide something similar.'
    );
  }

  function hasExpiresField(cookie) {
    return cookie
      .split(';')
      .map((part) => {
        if (part.split('=').length > 1) {
          return part.split('=')[0].trim().toLowerCase() === 'expires';
        }

        return false;
      })
      .some((bool) => bool);
  }

  /*
    Cookie format: "name=value; Path=/; HttpOnly; Secure"
    Multiple cookies format: "name=value; Path=/; HttpOnly; Secure, name2=value2"
  */
  //  split multiple cookies if present
  const rawCookiesArray = rawCookies.split(',');
  const validRawCookies = rawCookiesArray
    .map((rawCookie, index, ref) => {
      if (hasExpiresField(rawCookie)) {
        return `${rawCookie}${ref[index + 1]}`;
      }

      if (index > 0 && hasExpiresField(ref[index - 1])) return 'invalid';

      return rawCookie;
    })
    .filter((rawCookie) => rawCookie !== 'invalid');

  const parsedCookies = validRawCookies.map((rawCookie) => {
    const [cookieNameAndValue, ...cookieProperties] = rawCookie.split(';');
    const [cookieName, cookieValue] = cookieNameAndValue.split('=');

    const sanitizedCookieProperties = cookieProperties.map((cookieProperty) => {
      const [propertyName, propertyValue] = cookieProperty.split('=');
      const sanitizedPropertyName = propertyName
        .replace('-', '')
        .toLowerCase()
        .trim();

      if (sanitizedPropertyName === 'maxage') {
        return `maxAge=${propertyValue}`;
      } else if (sanitizedPropertyName === 'httponly') {
        return 'httpOnly=true';
      } else if (sanitizedPropertyName === 'samesite') {
        return `sameSite=${propertyValue.toLowerCase()}`;
      }

      if (!propertyValue) {
        return `${sanitizedPropertyName}=true`;
      }

      return `${sanitizedPropertyName}=${propertyValue}`;
    });

    const objectifyedCookieProperties = sanitizedCookieProperties.map(
      (sanitizedCookieProperty) => {
        const [propertyName, propertyValue] =
          sanitizedCookieProperty.split('=');

        return {
          [propertyName]: propertyValue === 'true' ? true : propertyValue,
        };
      }
    );

    const options = {};

    objectifyedCookieProperties.forEach((objectifyedCookieProperty) => {
      Object.entries(objectifyedCookieProperty).forEach(([key, value]) => {
        if (key === 'expires') {
          options[key] = new Date(value as string);
          return;
        }

        if (key === 'maxAge') {
          options[key] = Number(value);
          return;
        }

        options[key] = value;
      });
    });

    return {
      cookieName: cookieName.trim(),
      cookieValue: cookieValue.trim(),
      options,
    };
  });

  return parsedCookies;
}
