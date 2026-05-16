import type { TitleProps } from '../../types'

const Title = ({ subtitle, title }: TitleProps): JSX.Element => {
  return (
    <div className="text-center text-[#141212] text-[15px] font-semibold uppercase mt-[70px] mb-[30px]">
      <p>{subtitle}</p>
      <h2 className="text-[32px] text-primary normal-case mt-[5px]">{title}</h2>
    </div>
  )
}

export default Title
