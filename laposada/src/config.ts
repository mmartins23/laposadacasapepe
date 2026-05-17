const env = import.meta.env

export const config = {
  whatsappUrl: `https://wa.me/${env.VITE_WHATSAPP_NUMBER ?? '34653838263'}`,
  facebookUrl: env.VITE_FACEBOOK_URL ?? 'https://www.facebook.com/profile.php?id=100063636669626',
  facebookPageUrl: env.VITE_FACEBOOK_PAGE_URL ?? 'https://www.facebook.com/p/Restaurante-La-Posada-100063636669626/',
  instagramUrl: env.VITE_INSTAGRAM_URL ?? 'https://www.instagram.com/laposadacasapepe/',
  tripadvisorUrl: env.VITE_TRIPADVISOR_URL ?? 'https://www.tripadvisor.es/Restaurant_Review-g2102293-d6681221-Reviews-La_Posada-Abanilla.html',
  mapsUrl: env.VITE_MAPS_URL ?? 'https://maps.app.goo.gl/WQLMBdXU3pHkZJ8h7',
} as const
