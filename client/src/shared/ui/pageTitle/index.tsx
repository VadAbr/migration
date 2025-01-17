import { FC } from 'react'
import { Text } from '@consta/uikit/Text'

type TPageTitle = {
  text: string
}

export const PageTitle: FC<TPageTitle> = ({ text }) => {
  return (
    <Text size={'2xl'} align="center">
      {text}
    </Text>
  )
}
