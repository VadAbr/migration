import { FC } from 'react'

type TImage = {
  src: string
}

export const Image: FC<TImage> = ({ src }) => {
  return <img style={{ width: '100%' }} src={src} alt={''} />
}
