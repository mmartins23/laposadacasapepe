const env = import.meta.env

export const config = {
  whatsappUrl: `https://wa.me/${env.VITE_WHATSAPP_NUMBER}`,
  facebookUrl: env.VITE_FACEBOOK_URL,
  facebookPageUrl: env.VITE_FACEBOOK_PAGE_URL,
  instagramUrl: env.VITE_INSTAGRAM_URL,
  tripadvisorUrl: env.VITE_TRIPADVISOR_URL,
  mapsUrl: env.VITE_MAPS_URL,
} as const
