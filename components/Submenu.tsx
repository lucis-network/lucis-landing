import Link from 'next/link'
import s from './Submenu.module.sass'


type Props = {}

export default function SubMenu(props: Props) {
  return(
    <ul className={s.contentSubmenu}>
      <li><Link href="/ranking">Social-Fi network platform</Link></li>
    </ul>
  )
}