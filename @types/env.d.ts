declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_API_URL: string
      }
    }
}

export {}