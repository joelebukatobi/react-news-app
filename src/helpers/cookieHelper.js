import cookie from 'cookie';

// Helper function to set the token in a cookie
export const setTokenCookie = (token) => {
  document.cookie = cookie.serialize('token', token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Set the token cookie with a 7-day expiration
    path: '/',
  });
};

// Helper function to remove the token cookie
export const removeTokenCookie = () => {
  document.cookie = cookie.serialize('token', '', {
    expires: new Date(0),
    path: '/',
  });
};

// Helper function to get the token from the cookie
export const getTokenFromCookie = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.token;
};
