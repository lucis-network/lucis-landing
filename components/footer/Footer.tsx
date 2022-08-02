import Link from "next/link";
import s from "./Footer.module.sass";
import React from "react";
import ButtonWrapper from "components/Button/Button";
import { Button } from "antd";

type Props = {};
export default function Footer(props: Props) {
  return (
    <section className={`${s.container_footer}`}>
      <div className={`lucis-container-2 ${s.container}`}>
        <div className={s.group_link}>
          <ul className={s.block_item_menu}>
            <li><Link href="https://lucis.network">ZONE</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/arena">Privacy Policy</Link></li>
            <li><Link href="/playcore/raffles"><a>Contact Us</a></Link></li>
          </ul>
        </div>
        <div className={s.logoTab}>
          <img src="/assets/header/logo.png" alt=""/>
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
            <div className={s.ic_item}>
              <a
                href="https://discord.gg/Y3E4x4U38k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/footer/discord.svg" alt=""/>
              </a>
            </div>
          </div>
          <div className={s.btn_help}>
            <a href={`https://discord.com/invite/kdDUjJcSF5`}
               target="_blank"
               rel="noopener noreferrer">
              <ButtonWrapper width={200}>Need Help ?</ButtonWrapper>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
