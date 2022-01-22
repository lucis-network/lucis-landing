import {useCallback, useState} from "react"
import s from './Footer.module.sass'

type Props = {}
export default function Header(props: Props) {
  const [msg, setMsg] = useState('');

  const onSubmit = useCallback(() => {
    setMsg('Subscribing ...')
    setTimeout(() => {
      setMsg('Thank you for subscribing!')
      setTimeout(() => {
        setMsg('')
      }, 10000)
    }, 2000);
  }, []);

  return (
    <section className={s.container}>
      <div className={s.heading_footer}>
        <div className={s.logo}>
          <img src="/assets/logo369-np.png" alt="" />
        </div>
        <div className={s.r}>
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

          <div className={s.emailForm}>
            <p className={s.title}>SUBSCRIBE TO NEWSLETTER</p>
            <div className={s.form}>
              <div className={s.inputC}>
                <input type="text" className={s.input} placeholder="your.email@example.com"/>
              </div>
              <button className={s.btn} onClick={onSubmit}>Subscribe</button>
            </div>
            <p className={s.msg}>{msg}</p>
          </div>
        </div>
      </div>

      <div>
        <img src="/assets/footer/footer.png" alt="" />
      </div>
    </section>
  )
}
