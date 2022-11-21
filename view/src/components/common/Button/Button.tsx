import React from 'react'
import style from './Button.module.scss'
import clsx from 'clsx'

interface Props {
  purpose?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'middle'
  children: React.ReactNode
  onClick?: () => void
}

export default function Button(props: Props): JSX.Element {
  // 指定されていない場合はデフォルト値を設定する
  const purpose = props.purpose ?? 'primary'
  const size = props.size ?? 'middle'
  const className = clsx(style.button, style[purpose], style[size])

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
