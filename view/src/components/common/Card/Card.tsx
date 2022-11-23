import clsx from 'clsx'
import React from 'react'

import style from './Card.module.scss'

interface Props {
  children?: React.ReactNode
}

export default function Card(props: Props): JSX.Element {
  return (
    <>
      <div className={clsx(style.card)}>
        <div className={style.content}>{props.children}</div>
      </div>
    </>
  )
}
