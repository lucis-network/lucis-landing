import s from './Footer.module.sass'

type Props = {}
export default function Header(props: Props) {

  return (
   <section className={s.container}>
     <div className={s.heading_footer}>
      <div className={s.logo}>
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className={s.group_ic}>
        <div className={s.ic_item}>
          <img src="/assets/OurEcosystem/TikTok.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/footer/fb.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/footer/ytb.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/OurEcosystem/tele.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/footer/dis.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/footer/Twitter.png" alt="" />
        </div>
      </div>
     </div>

    <div>
      <img src="/assets/footer/footer.png" alt="" />
    </div>
   </section>
  )
}
