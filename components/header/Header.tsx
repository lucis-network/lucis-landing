  import Link from "next/link";
import s from "./Header.module.sass";
import {useRouter} from "next/router";
import React from "react";
import { MenuMobile } from "components/Menu/MenuMobile";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <div className={`${s.pcMenu} bg-nav`}>
        <div className={`${s.menu_container}`}>
          <div className={s.logoSection}>
            <Link href="/" passHref>
              <a>
                <img src="/assets/header/new_logo.png" className={s.logo} alt="logo"/>
              </a>
            </Link>
            {
              // @ts-ignore
              ("IS_TESTNET" == "true") && <p>Testnet</p>
            }
          </div>
          <div
            className={`lucis-container-2 ${s.container} px-0 relative z-10`}
          >
            <div>
              <ul className={s.block_item_menu}>
                <li className={s.logoTab}>
                  <Link href="/">
                    <img src="/assets/header/logo_mobile.png" className={s.logo} alt="logo"/>
                  </Link>
                </li>
                <li className={`${router.pathname === "/" || router.pathname.includes("home") ? s.active : ""}`}>
                  <Link href="/" passHref>
                    <a>
                      HOME
                    </a>
                  </Link></li>
                <li className={`${router.pathname.includes("/playcore") ? s.active : ""}`}><Link href="https://play-beta.lucis.network/">PLAYCORE</Link></li>
                <li className={`${router.pathname.includes("/arena") ? s.active : ""}`}><Link href="https://play-beta.lucis.network/arena">ARENA</Link></li>
                <li><a href="https://insight.lucis.network/" target="_blank"
                       rel="noopener noreferrer">INSIGHT</a></li>
                <li className={`${router.pathname.includes("/ranking") ? s.active : ""}`}><Link href="/ranking">RANKING</Link></li>
                <li className={s.default}><a>SCHORLARSHIP <span>Coming Soon</span></a></li>
                <li className={s.default}><a>SOCIAL <span>Coming Soon</span></a></li>
              </ul>
            </div>
            <div>
              <div className={s.loginSection}>
                <div
                  className={s.overviewBtn}
                >
                  <div>CONTACT US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile />
    </>
  );
};
