import { useState } from 'react'
import s from './OurEcosystem.module.sass'
import TitleName from './TitleSection/TitleName'

type Props ={
}

export default function OurEcosystem(props: Props){
  const [contentRef, setContentRef] = useState(true)
  const styleIm = !contentRef? {display:'none'}: {display:'block'}
  function playVideo(){
    setContentRef(false)
    const Video = document.getElementById('Content_video')
    //@ts-ignore
    Video.src+='?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1'

  }
  return(
    <section id="Medias" className={s.container}>
      <TitleName titleName='Lucis Media' />

      <div className={s.content_video}>
       <iframe id="Content_video" src="https://www.youtube.com/embed/eIz-E4Jbsg8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>

       <div style={styleIm} onClick={playVideo} className={s.bg_video}>
        <img src="/assets/OurEcosystem/bg_video.png" alt="" />
       </div>

      </div>

      <div className={s.group_ic}>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/tiktok.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/fb.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/ytb.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/tele.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/tw.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/dis.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
