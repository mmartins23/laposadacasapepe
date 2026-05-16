import news1 from '../../assets/laposada_news1.jpg'
import news2 from '../../assets/laposasa_news2.jpg'
import news3 from '../../assets/laposada_news3.jpg'

const cards = [
  { src: news1, alt: 'La Posada Restaurant', caption: '¡Tu Mesa Te Espera!' },
  { src: news2, alt: 'La Posada Restaurant Garden', caption: 'Disfruta Nuestro Jardín' },
  { src: news3, alt: 'La Posada Restaurant Barbeque', caption: 'Auténtico Sabor a la Brasa' },
]

const Welcome = () => {
  return (
    <div
      id="El Restaurante"
      className="my-[80px] mx-auto w-[90%] flex items-center justify-between flex-wrap max-[650px]:flex-col"
    >
      {cards.map(({ src, alt, caption }) => (
        <div
          key={caption}
          className="relative flex-[0_0_31%] mb-[20px] max-[650px]:flex-[0_0_100%] max-[650px]:my-5 group"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-[375px] object-cover rounded-[10px] block"
          />
          <div className="absolute inset-0 bg-[rgba(0,15,152,0.3)] rounded-[10px] flex items-center justify-center text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer">
            <p>{caption}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Welcome
