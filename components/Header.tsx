import Image from "./Image";
import Link from "next/link";
import s from "./Header.module.sass";
import Logo from "../assets/img/logo_hoz@2x_2.png";
import GradientButton from "./Button/GradientButton";
import { useWindowSize } from "../hooks/useWindowSize";
import { MenuMobile } from "./Menu/MenuMobile";
import { useCallback, useEffect, useRef, useState } from "react";
import { scrollToSection } from "../utils/DOM";

import { Modal, Button } from "antd";
import { AppEmitter } from "../services/emitter";
import SubMenu from "./Submenu";
type Props = {
  handleMenuOpen: Function;
};
export default function Header(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [href, setHref]= useState<string>("")
  const [width, height] = useWindowSize();
  const showSubMenu = isSubMenu ? s.isSubmenu : s.hideSubmenu;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleMouseOver = () => {
    setIsSubMenu(true);
  };
  const handleMouseLeave = () => {
    setIsSubMenu(false);
  };

  useEffect(() => {
    const subscription = AppEmitter.addListener(
      "setJoinUsVisible",
      (visible: boolean) => {
        setIsModalVisible(visible);
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById("subMenu");
    element?.addEventListener("mouseover", handleMouseOver);
    element?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element?.removeEventListener("mouseover", handleMouseOver);
      element?.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  const datas = [
    {
      id: 1,
      href: "/play-to-earn",
      title: "Lucis play-to-earn 2.0",
      disabled: false,
    },
    { id: 2, href: "/tournaments", title: "Lucis tournament platform", disabled: false },
    {
      id: 3,
      href: "/social-fi",
      title: "Lucis socialfi",
      disabled: false,
    },
    { id: 4, href: "/ranking", title: "Lucis ranking", disabled: false },
    {
      id: 5,
      href: "/raffle",
      title: "Lucis raffle",
      disabled: false,
    },
    {
      id: 6,
      href: "/scholarship",
      title: "Lucis scholarship",
      disabled: false,
    },
    { id: 7, href: "/marketplace", title: "Lucis marketplace", disabled: false },
  ];

  if (width > 1024) {
    return (
      <div className={`${s.pcMenu} bg-nav`}>
        <div className="container py-20px flex justify-between items-center relative z-10`">
          <div className={s.logo}>
            <Link href="/">
              <Image src={Logo} alt="logo" priority />
            </Link>
          </div>
          <nav className={s.menu}>
            <ul className="flex justify-between items-center m-0">
              <li
                className="text-white text-24px leading-28px px-40px py-15px ml-15px"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setHref('/')
                  setTimeout(() => {
                    scrollToSection("#EcoSystem" ?? "", true, -90);
                  }, 1000);
                }}
              >
                <Link href={`${href}`}>Zone</Link>
              </li>
              <li>
                <Link href="/tournaments">Tournament</Link>
              </li>
              <li>
                <Link href="/docs">Docs</Link>
              </li>

              <li className={s.menuItem} id="subMenu">
                <img
                  className={s.ic_submenu}
                  onClick={() => {
                    setIsSubMenu(!isSubMenu);
                  }}
                  src="/assets/header/ic_submenu.svg"
                  alt=""
                />
                <div
                  className={`${s.subMenu} ${showSubMenu}`}
                  style={isSubMenu == false ? { pointerEvents: "none" } : {}}
                >
                  <div className={s.styleSubmenu}>
                    <div className={s.contentSubmenu}>
                      <img src="/assets/header/ic_item_sub_menu.svg" alt="" />
                      <SubMenu
                        onClick={() => {
                          setIsSubMenu(false);
                        }}
                        datas={datas}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <GradientButton
                  onClick={showModal}
                  type={1}
                  className="text-white text-24px leading-28px px-40px py-15px ml-15px"
                  style={{ whiteSpace: "nowrap", fontWeight: "600" }}
                >
                  Contact Us
                </GradientButton>{" "}
              </li>
            </ul>
          </nav>

          <Modal
            title="Contact us"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <p>
                Feel free to discuss more with us, just leave your content here
                and we'll reach you soon.
              </p>
              <p>We're mainly opening for Investors, media partners, game publishers.</p>
              <p>
                We also open to discuss with everyone who wanna become developer
                and ambassadors, or be a part of our team.
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
                {
                  `<your content here>`
                }
                <br />
              </div>
              <br />
              <p style={{ color: "#00c4ff" }}>
                Note: Lucis network will never dm you first.
              </p>
            </div>
            <div id="content_btn">
              <div id="btn_Chat">
                <a
                  href="mailto://partner@lucis.network"
                >
                  Email us
                </a>
                <img src="/assets/Banner/teleChat.svg" alt="" />
              </div>

              {/* <div id="btn_Chat">
                <a
                  href="https://t.me/lucis_network_application_form"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us
                </a>
                <img src="/assets/Banner/teleChat.svg" alt="" />
              </div> */}
            </div>
          </Modal>
        </div>
      </div>
    );
  } else {
    return <MenuMobile />;
  }
}
