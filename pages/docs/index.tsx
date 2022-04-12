import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import CardDocs from "components/Card/Doc";


const Career: NextPage = () => {
  return (
    <section className="lucis-container">
      <DocHead title="Career"/>

      <div className={`${s.container} section-content`}>
        <h1>Lucis Docs</h1>

        <div className={s.block}>
          <div className={s.content}>
            <div className={s.jobs}>
              {/* <li><a href="https://docsend.com/view/mjjpga55dwewcdxb" target="_blank" rel="noopener noreferrer">Light paper</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Pitchdeck</a></li>
              <li><a href="https://docsend.com/view/znv8hznu8fe4ckba" target="_blank" rel="noopener noreferrer">Investors packages</a></li> */}
              <CardDocs titleCard='Light paper' srcImg='/docs/doc_2.png' link="https://docsend.com/view/mjjpga55dwewcdxb" />
              <CardDocs titleCard='Pitchdeck' srcImg='/docs/doc_1.png' link="https://docsend.com/view/qxbdpqxhfavu7bvi" />
              <CardDocs titleCard='Investors packages' srcImg='/docs/doc_3.png' link="https://docsend.com/view/znv8hznu8fe4ckba" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Career