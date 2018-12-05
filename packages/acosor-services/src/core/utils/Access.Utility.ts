const AccessUtility = {
  generateAccess: async (appID: string) => {
    return {
      appID,
      access: "1234567890",
    };
  },
  verify: async (appID: string, access: string) => {
    return {
      appID,
      verified: true,
    };
  },
};

export default AccessUtility;
