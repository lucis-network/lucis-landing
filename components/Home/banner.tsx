import Button3D from "components/Button3D";
import s from "./banner.module.sass";
import TotalBanner from "./Total/TotalBanner";

import { Modal, Button } from 'antd';
import { useState } from "react";
import MailChimpSignUp, { AppMailChimpFormSize } from "../MailChimpSignUp/MailChimpSignUp";
import { AppEmitter } from "../../services/emitter";


enum TargetList {
  None = "None",
  Investor = "Investor",
  Scholar = "Scholar",
  // Ambassador,
}
type Props = {};

function Banner(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [targetList, setTargetList] = useState<TargetList>(TargetList.None);

  const showScholarModal = () => {
    setTargetList(TargetList.Scholar);
    setIsModalVisible(true);
  };

  const showInvestorModal = () => {
    setTargetList(TargetList.Investor);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const joinUs = (e: any) => {
    e.preventDefault();
    AppEmitter.emit('setJoinUsVisible', true);
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
            <div onClick={showInvestorModal} className={s.item_btn}>
              <Button3D title="Follow our Investor" />
            </div>
            <div onClick={showScholarModal} className={s.item_btn}>
              <Button3D title="Follow our Scholar" normal />
            </div>
          </div>
        </div>
        <div className={s.content_glass}>
          <img src="/assets/Banner/vr-glass.png" alt="" />
        </div>


        <Modal title={`Subscribe to ${targetList} Newsletter`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div>
            <p>1. Get up to date information about our {targetList} program</p>
            <MailChimpSignUp
              size={AppMailChimpFormSize.sm}
              isInvestor={targetList === TargetList.Investor}
              isScholar={targetList === TargetList.Scholar}
              style={{paddingLeft: 20}}
            />
          </div>


          <div id="content_btn_2" style={{marginTop: 50}}>
            <p>2. Or to join {targetList} program right now:</p>
            <div id="btn_Chat" style={{minWidth: 0, width: 90, marginLeft: 20}}>
              <a href="#" target="_blank" onClick={joinUs}>Join us</a>
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
