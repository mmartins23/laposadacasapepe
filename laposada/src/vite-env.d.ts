/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_FACEBOOK_URL: string
  readonly VITE_FACEBOOK_PAGE_URL: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_TRIPADVISOR_URL: string
  readonly VITE_MAPS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
