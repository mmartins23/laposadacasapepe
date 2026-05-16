import type { ContactEntry } from '@/types'
import msgIcon from '@/assets/msg-icon.png'
import { SiFacebook, SiWhatsapp, SiGooglemaps } from 'react-icons/si'
import { IoMdClock } from 'react-icons/io'

const CONTACT_ENTRIES: ContactEntry[] = [
  {
    Icon: SiFacebook,
    iconClass: 'text-[#1877f2]',
    lines: ['Restaurante La Posada'],
    href: 'https://www.facebook.com/profile.php?id=100063636669626',
    ariaLabel: 'Visita nuestra página de Facebook - Restaurante La Posada',
  },
  {
    Icon: SiWhatsapp,
    iconClass: 'text-[#25d366]',
    lines: ['+34 653 83 82 63'],
    href: 'https://wa.me/34653838263',
    ariaLabel: 'Enviar un mensaje por WhatsApp al +34 653 83 82 63',
  },
  {
    Icon: IoMdClock,
    iconClass: 'text-[#181716]',
    lines: ['Jueves a Domingo: 13:00 - 16:00'],
  },
  {
    Icon: SiGooglemaps,
    iconClass: 'text-[#db4437]',
    lines: ['Calle Francisco Salzillo 22, Abanilla', 'Murcia, 30640'],
    href: 'https://maps.app.goo.gl/WQLMBdXU3pHkZJ8h7',
    ariaLabel: 'Ver la ubicación en Google Maps - Calle Francisco Salzillo 22, Abanilla, Murcia',
  },
]

const Contact = (): JSX.Element => {
  return (
    <div
      id="Contacto"
      className="my-[80px] mx-auto max-w-[90%] flex justify-between flex-wrap max-[768px]:flex-col max-[768px]:items-center"
    >
      <div className="flex-[0_0_48%] text-[#676767] mb-5 max-[768px]:flex-[0_0_100%]">
        <h3 className="text-[#000f38] font-medium text-[25px] flex items-center mb-5">
          Envíanos un mensaje
          <img src={msgIcon} alt="Email Icon" className="w-[35px] ml-[10px]" />
        </h3>
        <p className="max-w-[450px]">
          No dudes en comunicarte con nosotros. Tus comentarios, preguntas y sugerencias son
          importantes para nosotros, ya que nos esforzamos por brindar un servicio excepcional en
          nuestro restaurante. Encuentra nuestra información de contacto a continuación.
        </p>
        <ul>
          {CONTACT_ENTRIES.map((entry: ContactEntry) => {
            const textContent = entry.lines.map((line: string, i: number) => (
              <span key={line}>
                {line}
                {i < entry.lines.length - 1 && <br />}
              </span>
            ))

            const iconEl = (
              <span className={`w-5 mr-[10px] text-2xl ${entry.iconClass}`}>
                <entry.Icon />
              </span>
            )

            return (
              <li key={entry.lines[0]} className="flex items-center my-5">
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={entry.ariaLabel}
                    className="flex items-center"
                  >
                    {iconEl}
                    {textContent}
                  </a>
                ) : (
                  <>
                    {iconEl}
                    {textContent}
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex-[0_0_48%] mb-5 max-[768px]:flex-[0_0_100%]">
        <iframe
          className="border-0 w-full h-[300px] mt-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.148176902746!2d-1.0436340843945726!3d38.20645639497786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6391c029d067a7%3A0x9b9ef112d993607a!2sCalle%20Francisco%20Salzillo%2C%2022%2C%2030640%20Abanilla%2C%20Murcia!5e0!3m2!1sen!2ses!4v1621701316369!5m2!1sen!2ses"
          allowFullScreen
          title="Google Map"
        />
      </div>
    </div>
  )
}

export default Contact
