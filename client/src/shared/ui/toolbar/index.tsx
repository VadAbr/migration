import { FC, ReactNode, CSSProperties } from 'react'
import { cnMixScrollBar } from '@consta/uikit/MixScrollBar'
import cn from 'classnames'

import styles from './styles.module.css'

const scrollBarStyles = cnMixScrollBar()

type TToolbar = {
    left?: ReactNode
    right?: ReactNode
    center?: ReactNode
    className?: string
    style?: CSSProperties
}
export const Toolbar: FC<TToolbar> = ({ left, right, center, className, style }) => {
    return (
        <div
            className={cn(styles.container, scrollBarStyles, className)}
            style={style}>
            {left && (
                <div className={cn(styles.item, styles.left)}>
                    {left}
                </div>
            )}
            {center && (
                <div className={cn(styles.item, styles.center)}>
                    {center}
                </div>
            )}
            {right && (
                <div className={cn(styles.item, styles.right)}>
                    {right}
                </div>
            )}
        </div>
    )
}
