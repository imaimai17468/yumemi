import clsx from 'clsx'
import React from 'react'

import style from './LoadingCard.module.scss'

export default function LoadingCard(): JSX.Element {
  return (
    <div className={clsx(style.loadingCard)}>
      <div className={clsx(style.loadingCard_inner)}>
        <h1>Loading</h1>
        <div className={style.loading_bar}></div>
      </div>
    </div>
  )
}
