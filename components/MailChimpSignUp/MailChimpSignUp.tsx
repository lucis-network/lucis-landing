import { DetailedHTMLProps } from "react";
import { useCallback, useState } from "react";
// @ts-ignore
import MailchimpSubscribe from "react-mailchimp-subscribe";
import AnimWhenVisible from "../Anim";
import s from "../Footer.module.sass";

type Props = DetailedHTMLProps<any, any> & {
  isInvestor?: boolean,
  isScholar?: boolean,
}
export default function MailChimpSignUp(props: Props) {
  const {
    isInvestor,
    isScholar,
    ...restProps
  } = props;

  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);



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
      subscribe({
        EMAIL: email,
        INVESTOR: isInvestor ? 1 : 0,
        SCHOLAR: isScholar ? 1 : 0,
      });

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
    <div {...restProps}>
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
  )
}