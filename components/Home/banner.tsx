import Button3D from "components/Button3D";
import s from "./banner.module.sass";
import TotalBanner from "./Total/TotalBanner";

import { Modal, Button } from 'antd';
import { useState } from "react";


type Props = {};

function Banner(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <section className={`${s.container_banner}`}>
      <div className="stars-bg"></div>
      <div className={s.im_banner}>
        <div className={s.heading}>
          <h1>Guild Hub of the Play To Earn world</h1>
          <p>
            We connect investors and players in the world of play-to-earn gaming
            and metaverse
          </p>
          <div className={s.groupButton}>
            <div onClick={showModal} className={s.item_btn}>
              <Button3D title="Become our Investor" />
            </div>
            <div onClick={showModal} className={s.item_btn}>
              <Button3D title="Become our Scholar" normal />
            </div>
          </div>
        </div>
        <div className={s.content_glass}>
          <img src="/assets/Banner/vr-glass.png" alt="" />
        </div>



        <Modal title="Contact us" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>          
          <p>Feel free to discuss more with us, just leave your content here and we'll reach you soon.</p>
          <p>We're mainly opening for Investors, scholars.</p>
          <p>We also open to discuss with every who wanna become developer and ambassadors, or be a part of our team.</p>
          
          <p>Please send us the content in Telegram by clicking the bellow button.</p>
          <p>The content might follow this template:</p>
          
          <div 
          style={{
            color:'#FFF',
            background: 'rgba(63, 183, 219,0.5)',
            padding: '30px',
            borderRadius: '40px 40px 40px 0',
            fontSize: 'smaller'
          }}
          >
            From: Alexander Geogre<br/>
            Proposal: Become an Investor<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non quam id libero pulvinar accumsan at eu est. Nulla faucibus nisi eget mattis cursus.<br/>
          </div>
          <br/>
          <p style={{color:'#00c4ff'}}>Note: Lucis network will never dm you first.</p>
        </div>
        <div id="content_btn">
          <div id="btn_Chat">
            <a href="https://t.me/lucis_network_application_form" target="_blank" rel="noreferrer">Chat with us</a>
            <img src="/assets/Banner/teleChat.svg" alt="" />
          </div>
        </div>
      </Modal>
      </div>

      {/* Total */}
      <div className={s.block_total}>
        <TotalBanner title="Total Investors" titleNumber="10+" />
        <TotalBanner title="Total Scholars" titleNumber="100+" />
        <TotalBanner title="Total Games" titleNumber="18+" />
        <TotalBanner title="Monthly Revenue" titleNumber="$100k+" />
      </div>
    </section>
  );
}

export default Banner;
