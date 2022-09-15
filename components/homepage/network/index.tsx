import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import Partner from "../partner";
import {Button, Input } from "antd";

export default function NetWork() {

  return (
    <>
      <section>
        <div className={s.wrapper}>
          <div className={`lucis-container-2 ${s.container}`}>
            <div className={s.title}>
              <h2>LUCIS NETWORK</h2>
            </div>
            <div className={s.desc}>
              <p>The ultimate Gaming SocialFi Unite Gamers Across The Globe With The Power of Decentralize Finance Where every gamers can experience, show their skills, record their history and get very, very big rewards</p>
            </div>
          </div>
          <div className={s.titlePartner}>
            <div className={s.linearTitlePartner}>
              <div className={s.descLinearTitlePartner}>
                <img src="/assets/homepage/Partners.png" alt=""/>
              </div>
              <div className={s.descLinearTitlePartner}>
                <img src="/assets/homepage/BackerN.png" alt=""/>
              </div>
            </div>
          </div>
          <div className={s.centerTitlePartner}>
            <span className={s.linearCenterTitlePartner}>
              Partners
            </span>
            <span>
              and
            </span>
            <span className={s.linearCenterTitlePartner}>
              Backer
            </span>
          </div>
          <Partner />
          {/*<div className={`lucis-container-2 ${s.containerEmail}`}>*/}
          {/*  <div className={s.descEmail}>*/}
          {/*    <h2>MORE SKILLS, MORE REWARDS JOIN US ON SOCIALS</h2>*/}
          {/*  </div>*/}
          {/*  <div className={s.email}>*/}
          {/*    <Input placeholder={"Your email address"} className={s.inputEmail}></Input>*/}
          {/*    <div className={`${s.btn} ${s.btnJoin}`}>*/}
          {/*      <div>SUBSCRIBE</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>
      </>
  );
};
