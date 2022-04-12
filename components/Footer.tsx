import Link from "next/link";
import AnimWhenVisible from "./Anim";

import s from "./Footer.module.sass";
import MailChimpSignUp from "./MailChimpSignUp/MailChimpSignUp";

type Props = {};
export default function Header(props: Props) {
  return (
    <section className="lucis-container">
      <div className={`${s.heading_footer} section-content`}>

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


          <MailChimpSignUp />

        </div>
      </div>
          <div className={s.links}>
            <Link href="/docs">Litepaper</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/careers">Careers</Link>
          </div>
      <div>
        <img src="/assets/footer/footer.png" alt="" />
      </div>
    </section>
  );
}
