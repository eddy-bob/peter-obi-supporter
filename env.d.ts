import { readonly } from "vue"

interface ImportMetaEnv {
  readonly VITE_MODE: string
  readonly VITE_BASEURL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}