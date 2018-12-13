export const authenticate = (user: string, password: string) => {
  return Promise.resolve({
    authenticate: true,
    access: "access token",
  });
};
