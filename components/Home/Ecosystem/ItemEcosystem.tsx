import Button3D from 'components/Button3D'
import { useWindowSize } from 'hooks/useWindowSize'
import { useRouter } from 'next/router'
import s from './ItemEcosystem.module.sass'

type Props = {
  dataEcosystems?: any
}
export default function ItemEcosystem(props: Props) {
  const { dataEcosystems } = props
  
  const router = useRouter()
  const [width] = useWindowSize()

  return (
    dataEcosystems.map((e:any) => (
    <div className={s.itemEcosystem} key={e.id}>
      
      {width < 1024 && <h1>{e.titleH1}</h1>}
      <div className={s.heading}>
        {width >= 1024 && <h1>{e.titleH1}</h1>}
        <div dangerouslySetInnerHTML={{__html: `${e.titleP}`}} />
          <div>
            <Button3D 
            title={`${e.titleButton}`}
            normal 
            onClick={() => {
              router.push(`/${e.href}`)
            }} 
          />
          </div>
      </div>
      <div 
        className={`${s.im_Block}`}
      >
        <img src={`${e.srcImg}`} alt="" />
      </div>
    </div>
    ))
  )
}