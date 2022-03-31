import Link from 'next/link'
import s from './Submenu.module.sass'


type Props = {
  onClick?: () => void,
  datas: any
}

export default function SubMenu(props: Props) {
  const { onClick, datas } = props
  
  return(
    <ul className={s.contentSubmenu}>
      {
        datas.map((e: any) =>(
          <li key={e.id} onClick={onClick} className={`${s.item} ${e.disabled == true ? s.hello : ''}`}><Link href={`/${e.href}`}>{e.title}</Link></li>
        ))
      }
    </ul>
  )
}