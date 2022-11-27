export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "dev" | "cert" | "prod";
    }
  }
}
