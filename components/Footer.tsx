import { useCallback, useState } from "react";
// @ts-ignore
import MailchimpSubscribe from "react-mailchimp-subscribe";
import AnimWhenVisible from "./Anim";

import s from "./Footer.module.sass";

type Props = {};
export default function Header(props: Props) {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const onSubmit = useCallback(
    (subscribe) => {
      if (!email) {
        setHasError(true);
        setMsg("Please enter your email");
        return;
      }

      if (hasError) {
        setMsg("Could not subscribe at this time");
        return;
      }

      setMsg("Subscribing ...");
      subscribe({ EMAIL: email });

      setTimeout(() => {
        setMsg("Thank you for subscribing!");
        setTimeout(() => {
          setMsg("");
        }, 10000);
      }, 2000);
    },
    [email, hasError]
  );

  const validateEmail = (email: string): boolean => {
    if (!email) {
      return true;
    }

    return (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null
    );
  };

  const onInput = useCallback((e) => {
    const email = e.target.value;
    setEmail(email);

    const valid = validateEmail(email);
    if (valid) {
      setHasError(false);
      setMsg("");
    } else {
      setHasError(true);
      setMsg("Please enter a correct email");
    }
  }, []);

  const transformMessage = (message: string): string => {
    if (!message) {
      return message;
    }

    const alreadySubIdx = message.indexOf("already subscribed");
    if (alreadySubIdx > -1) {
      return message.substring(0, alreadySubIdx + 18);
    }

    return message;
  };

  return (
    <section className={s.container}>
      <div className={s.heading_footer}>
        <div className={s.logo}>
          <AnimWhenVisible
            variants={{
              visible: { opacity: 1, y: [-50, 0, -15, 0] },
              hidden: { opacity: 0, y: -20 },
            }}
            transition={{ duration: 1.2, times: [0, 0.6, 0.3, 0, 3] }}
          >
            <img src="/assets/logo369-np.png" alt="" />
          </AnimWhenVisible>
        </div>
        <div className={s.r}>
        <div className={s.group_ic}>
            <div className={s.ic_item}>
              <a href="https://www.tiktok.com/@lucistvv" target='_blank' rel="noopener noreferrer">
                <img src="/assets/OurEcosystem/tiktok.svg" alt="" />
              </a>
            </div>
            <div className={s.ic_item}>
              <a href="https://www.facebook.com/lucistv.news" target='_blank' rel="noopener noreferrer">
                <img src="/assets/OurEcosystem/fb.svg" alt="" />
              </a>
            </div>
            <div className={s.ic_item}>
              <a href="https://www.youtube.com/c/LucisTVGaming" target='_blank' rel="noopener noreferrer">
                <img src="/assets/OurEcosystem/ytb.svg" alt="" />
              </a>
            </div>
            <div className={s.ic_item}>
              <a href="https://t.me/sankeonft" target='_blank' rel="noopener noreferrer">
                <img src="/assets/OurEcosystem/tele.svg" alt="" />
              </a>
            </div>
            <div className={s.ic_item}>
              <a href="https://twitter.com/Lucis_TV" target='_blank' rel="noopener noreferrer">
                <img src="/assets/OurEcosystem/tw.svg" alt="" />
              </a>
            </div>
            <div className={s.ic_item}>
              <a href="https://discord.com/channels/911921072830574603/926398655093702666" target='_blank' rel="noopener noreferrer">
                <img src="/assets/OurEcosystem/dis.svg" alt="" />
              </a>
            </div>
          </div>
          <div className={s.emailForm}>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }: any) => (
                <>
                  <AnimWhenVisible
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 },
                    }}
                  >
                    <p className={s.title}>SUBSCRIBE TO OUR NEWSLETTER</p>
                  </AnimWhenVisible>
                  <AnimWhenVisible
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 20 },
                    }}
                  >
                    <div className={s.form}>
                      <div className={s.inputC}>
                        <input
                          type="text"
                          className={s.input}
                          placeholder="your.email@example.com"
                          onInput={onInput}
                          onChange={onInput}
                        />
                      </div>
                      <button
                        className={s.btn}
                        onClick={() => onSubmit(subscribe)}
                        disabled={hasError}
                      >
                        Subscribe
                      </button>
                    </div>
                  </AnimWhenVisible>

                  {status === "error" ? (
                    <p
                      className={`${s.msg} ${s.hasError}`}
                      dangerouslySetInnerHTML={{
                        __html: transformMessage(message),
                      }}
                    />
                  ) : (
                    <p className={`${s.msg} ${hasError ? s.hasError : ""}`}>
                      {msg}
                    </p>
                  )}
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
