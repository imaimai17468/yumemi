import React from 'react'
import style from './ToggleButton.module.scss'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
}

export default function ToggleButton(props: Props): JSX.Element {
  const [active, setActive] = React.useState(false)
  const className = clsx(style.button, style[props.size ?? 'medium'], {
    [style.active]: active,
    [style.not_active]: !active,
  })

  return (
    <button
      className={className}
      onClick={() => {
        setActive(!active)
        props.onClick?.()
      }}
    >
      {props.children}
    </button>
  )
}
