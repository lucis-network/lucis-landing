import { Modal, Button } from "antd";
import { useEffect, useState } from "react";
import MailChimpSignUp, {
  AppMailChimpFormSize,
} from "../MailChimpSignUp/MailChimpSignUp";
import { AppEmitter } from "../../services/emitter";
import s from "./PopupJoinUs.module.sass"

enum TargetList {
  None = "None",
  Investor = "Investor",
  Scholar = "Scholar",
  Explore = "Coming Soon",
  // Ambassador,
}
export default function PopupJoinUs() {
  const [targetList, setTargetList] = useState<TargetList>(TargetList.None);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const comingsoonStyle = isPopup ? s.popupComingSoon : ''

  const showScholarModal = () => {
    setTargetList(TargetList.Scholar);
    setIsModalVisible(true);
    setIsPopup(false);
  };

  const showInvestorModal = () => {
    setTargetList(TargetList.Investor);
    setIsModalVisible(true);
    setIsPopup(false);
  };
  const showComingSoonModal = () => {
    setTargetList(TargetList.Explore);
    setIsModalVisible(true);
    setIsPopup(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const joinUs = (e: any) => {
    e.preventDefault();
    AppEmitter.emit("setJoinUsVisible", true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const subscription = AppEmitter.addListener(
      "setModalSubscript",
      (caseModal: string): void => {
        if (caseModal == "Investor") {
          showInvestorModal();
        } else if (caseModal == "Scholar") {
          showScholarModal();
        } else {
          showComingSoonModal();
        }
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <div>
      <div onClick={showScholarModal}></div>
      <div onClick={showInvestorModal}></div>
      <div onClick={showComingSoonModal}></div>

      <Modal
        // title={`Subscribe to ${targetList} Newsletter`}
        title={
          isPopup ? "" : `Subscribe to ${targetList} Newsletter`
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {
          isPopup? <div className={comingsoonStyle}>Coming Soon</div>
          :<div>
            <div>
              <p>
                1. Get up to date information about our {targetList} program
              </p>
              <MailChimpSignUp
                size={AppMailChimpFormSize.sm}
                isInvestor={targetList === TargetList.Investor}
                isScholar={targetList === TargetList.Scholar}
              />
            </div>

            <div id="content_btn_2" style={{ marginTop: 50 }}>
              <p>2. Or to join {targetList} program right now:</p>
              <div id="btn_Chat" style={{ minWidth: 0, width: 90 }}>
                <a href="#" target="_blank" onClick={joinUs}>
                  Join us
                </a>
              </div>
            </div>
          </div>
        }
      </Modal>
    </div>
  );
}
