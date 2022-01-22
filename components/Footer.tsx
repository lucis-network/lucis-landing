import {useCallback, useState} from "react"
// @ts-ignore
import MailchimpSubscribe from "react-mailchimp-subscribe"

import s from './Footer.module.sass'

type Props = {};
export default function Header(props: Props) {
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  const onSubmit = useCallback((subscribe) => {
    if (!email) {
      setHasError(true)
      setMsg('Please enter your email')
      return
    }

    if (hasError) {
      setMsg('Could not subscribe at this time')
      return;
    }

    setMsg('Subscribing ...')
    subscribe({EMAIL: email})

    setTimeout(() => {
      setMsg("Thank you for subscribing!");
      setTimeout(() => {
        setMsg("");
      }, 10000);
    }, 2000);
  }, [email, hasError]);


  const validateEmail = (email: string): boolean => {
    if (!email) {
      return true
    }

    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null
  }

  const onInput = useCallback((e) => {
    const email = e.target.value;
    setEmail(email);

    const valid = validateEmail(email);
    if (valid) {
      setHasError(false)
      setMsg('')
    } else {
      setHasError(true)
      setMsg('Please enter a correct email')
    }
  }, [])

  const transformMessage = (message: string): string => {
    if (!message) {
      return message;
    }

    const alreadySubIdx = message.indexOf('already subscribed');
    if (alreadySubIdx > -1) {
      return message.substring(0, alreadySubIdx + 18);
    }

    return message
  }


  return (
    <section className={s.container}>
      <div className={s.heading_footer}>
        <div className={s.logo}>
          <img src="/assets/logo369-np.png" alt="" />
        </div>
        <div className={s.r}>
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

          <div className={s.emailForm}>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }: any) => (
                <>
                  <p className={s.title}>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <div className={s.form}>
                    <div className={s.inputC}>
                      <input
                        type="text" className={s.input} placeholder="your.email@example.com"
                        onInput={onInput}
                        onChange={onInput}
                      />
                    </div>
                    <button className={s.btn} onClick={() => onSubmit(subscribe)} disabled={hasError}>Subscribe</button>
                  </div>

                  {status === "error"
                    ? <p className={`${s.msg} ${s.hasError}`} dangerouslySetInnerHTML={{__html: transformMessage(message)}} />
                    : <p className={`${s.msg} ${hasError ? s.hasError : ''}`}>{msg}</p>
                  }
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div>
        <img src="/assets/footer/footer.png" alt="" />
      </div>
    </section>
  );
}
