const AppUtility = {
  verifyAppSecret: async (appID: string, appSecret: string) => {
    return {
      appID,
      verified: true,
    };
  },
};

export default AppUtility;
