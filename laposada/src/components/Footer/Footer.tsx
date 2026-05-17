import type { SocialLink } from '@/types'
import { FaFacebookSquare, FaInstagramSquare, FaTripadvisor } from 'react-icons/fa'
import { config } from '@/config'

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: config.facebookPageUrl,
    ariaLabel: 'Visita nuestra página de Facebook - Restaurante La Posada',
    Icon: FaFacebookSquare,
    hoverClass: 'hover:text-[#1877f2]',
  },
  {
    href: config.instagramUrl,
    ariaLabel: 'Visita nuestra cuenta de Instagram - La Posada Casa Pepe',
    Icon: FaInstagramSquare,
    hoverClass: 'hover:text-[#e1306c]',
  },
  {
    href: config.tripadvisorUrl,
    ariaLabel: 'Ver opiniones en TripAdvisor - Restaurante La Posada',
    Icon: FaTripadvisor,
    hoverClass: 'hover:text-[#00B300]',
  },
]

const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear()

  return (
    <div className="text-center py-5 bg-[#f8f8f8]">
      <div className="flex justify-center mb-[10px]">
        {SOCIAL_LINKS.map(({ href, ariaLabel, Icon, hoverClass }: SocialLink) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-[10px] text-[#676767] text-2xl transition-colors duration-300 ${hoverClass}`}
            aria-label={ariaLabel}
          >
            <Icon />
          </a>
        ))}
      </div>
      <p>© {currentYear} Copyright La Posada Casa Pepe. All Rights Reserved</p>
    </div>
  )
}

export default Footer
