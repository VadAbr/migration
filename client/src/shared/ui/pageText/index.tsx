import { FC } from 'react'
import { Text, TextProps } from '@consta/uikit/Text'

type TPageTitle = {
  children: string
} & TextProps

export const PageText: FC<TPageTitle> = ({ children, ...props }) => {
  return <Text {...props} size={'m'} style={{textAlign:'justify', textIndent: '3rem'}}>{children}</Text>
}