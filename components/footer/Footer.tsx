import Link from "next/link";
import s from "./Footer.module.sass";
import React, {useRef} from "react";
import homepage from "../homepage/Homepage.module.sass";

type Props = {};
export default function Footer(props: Props) {
  const gotoDestiny = () => {
    const section = document.getElementById( 'id_destiny' );
    console.log(section);
    if(section) {
      section.scrollIntoView({behavior: "smooth", block: "end"});
    }
  }
  return (
    <section className={`${s.container_footer}`} >
      <div className={`lucis-container-2 ${s.container}`}>
        <div className={s.group_link}>
          <ul className={s.block_item_menu}>
            <li><a onClick={() => gotoDestiny()}>ZONE</a></li>
            <li><Link href="https://tournament-lucis.gitbook.io/lucis-tournament/"><a target="_blank">FAQ</a></Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className={s.logoTab}>
          <a
            href="./"
            rel="noopener noreferrer"
          >
            <img src="/assets/header/new_logo.png" alt=""/>
          </a>
        </div>
        <div className={s.wrapper}>
          <div className={s.group_ic}>
            <div className={s.ic_item}>
              <a
                href="https://www.tiktok.com/@lucistvv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/footer/tiktok.svg" alt=""/>
              </a>
            </div>
            <div className={s.ic_item}>
              <a
                href="https://www.facebook.com/lucis.network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/footer/facebook.svg" alt=""/>
              </a>
            </div>
            <div className={s.ic_item}>
              <a
                href="https://discord.gg/Y3E4x4U38k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/footer/discord.svg" alt=""/>
              </a>
            </div>
            <div className={s.ic_item}>
              <a
                href="https://www.youtube.com/lucisnetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/footer/youtub.svg" alt=""/>
              </a>
            </div>
            <div className={s.ic_item}>
              <a
                href="https://twitter.com/LucisNetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/footer/twitter.svg" alt=""/>
              </a>
            </div>
            {/*<div className={s.ic_item}>*/}
            {/*  <a*/}
            {/*    href="https://twitter.com/LucisNetwork"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    <img src="/assets/footer/twitch.svg" alt=""/>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>

          <a href={`https://discord.com/invite/kdDUjJcSF5`}
             target="_blank"
             rel="noopener noreferrer">
            <button className={`${homepage.btnCommon} ${s.btn_help}`}>Need Help ?</button>
          </a>
        </div>
      </div>
    </section>
  );
}
