import clsx from 'clsx'
import Head from 'next/head'
import React from 'react'

import Header from '../Header'
import style from './MainLayout.module.scss'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>PrefProps</title>
        <meta name="" content="" />
        <link rel="icon" href="/pop.png" />
      </Head>
      <div className={clsx(style.parent)}>
        <Header />
        <div className={clsx(style.content)}>{props.children}</div>
      </div>
    </>
  )
}
