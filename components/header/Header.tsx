  import Link from "next/link";
import s from "./Header.module.sass";
import {useRouter} from "next/router";
import React, {useState} from "react";
import { MenuMobile } from "components/Menu/MenuMobile";
  import {Modal} from "antd";
  import ButtonBorder from "../Button/buttonBorder/ButtonBorder";

export default function Header() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
                <li className={`${router.pathname.includes("/playcore") ? s.active : ""}`}><Link href={process.env.NEXT_PUBLIC_P2E_URL_PROD ?? ""} passHref>
                  <a target="_blank">
                    PLAYCORE
                  </a>
                </Link></li>
                <li className={`${router.pathname.includes("/arena") ? s.active : ""}`}><Link href={process.env.NEXT_PUBLIC_P2E_URL_PROD + "arena" ?? ""} passHref>
                  <a target="_blank">
                    ARENA
                  </a>
                </Link></li>
                <li><a href="https://insight.lucis.network/" target="_blank"
                       rel="noopener noreferrer">INSIGHT</a></li>
                <li className={`${router.pathname.includes("/ranking") ? s.active : ""}`}><Link href={process.env.NEXT_PUBLIC_P2E_URL_PROD + "ranking" ?? ""} passHref>
                  <a target="_blank">
                    RANKING
                  </a>
                </Link></li>
                <li className={s.default}><a>SCHORLARSHIP <span>Coming Soon</span></a></li>
                <li className={s.default}><a>SOCIAL <span style={{left: 0}}>Coming Soon</span></a></li>
              </ul>
            </div>
            <div>
              <div className={s.loginSection}>
                <div
                  className={s.overviewBtn}
                  onClick={() => {
                    setIsModalVisible(true);
                  }}
                >
                  <div>CONTACT US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile />

      <Modal
        title="Contact us"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p>
            Feel free to discuss more with us, just leave your content here and
            we'll reach you soon.
          </p>
          <p>
            We're mainly opening for Investors, media partners, game publishers.
          </p>
          <p>
            We also open to discuss with everyone who wanna become developer and
            ambassadors, or be a part of our team.
          </p>

          <p>
            Please get in touch with us via email: <b>partner@lucis.network</b>
          </p>
          <br />
          <div
            style={{
              color: "#FFF",
              background: "rgba(63, 183, 219,0.5)",
              padding: "30px",
              borderRadius: "40px 40px 40px 0",
              fontSize: "smaller",
            }}
          >
            From: Alexander George
            <br />
            Proposal: Become an Investor
            <br />
            {`<your content here>`}
            <br />
          </div>
          <br />
          <p style={{ color: "#00c4ff" }}>
            Note: Lucis network will never dm you first.
          </p>
        </div>
        <div id="content_btn">
          <ButtonBorder>
            <div className={s.btnEmailUs}>
              <a href="mailto://partner@lucis.network">Email us</a>
              <img src="/assets/Banner/teleChat.svg" alt="" />
            </div>
          </ButtonBorder>
        </div>
      </Modal>
    </>
  );
};
