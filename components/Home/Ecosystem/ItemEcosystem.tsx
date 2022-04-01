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
      
      {width < 768 && <h1>{e.titleH1}</h1>}
      <div className={s.heading}>
        {width >= 768 && <h1>{e.titleH1}</h1>}
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
      <div className={`${s.im_Block} ${e.id == 3 || e.id == 6 ? s.setMargin: ''}`}>
        <img src={`${e.srcImg}`} alt="" />
      </div>
    </div>
    ))
  )
}