interface IRESTClient {
  get: (url: string, options?: any) => Promise<any>;
  post: (url: string, body?: object, options?: any) => Promise<any>;
}

export default IRESTClient;
