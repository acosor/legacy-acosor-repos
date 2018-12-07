const authenticate = async (appID: string, appSecret: string) => true;

export const initialize = async (appID: string, appSecret: string) => {
  const isAuthenticated = await authenticate(appID, appSecret);

  if (!isAuthenticated) {
    return {};
  } else {
    return {
      authenticated: true,
    };
  }
};
