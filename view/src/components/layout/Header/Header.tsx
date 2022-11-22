import style from './Header.module.scss'
import clsx from 'clsx'

export default function Header(): JSX.Element {
  return (
    <>
      <header className={clsx(style.header)}>
        <div className="header_inner">
          <div className="header_logo">
            <h1 className={clsx(style.header_logo_title)}>PrefPops</h1>
          </div>
        </div>
      </header>
    </>
  )
}
