import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'


const Career: NextPage = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section className="lucis-container" style={{marginTop: 50}}>
      <DocHead title="Career"/>

      <div className={`${s.container}`}>
        <h1>For Investors</h1>

        <div>
          <img src="/assets/investorPakeages/baogia1.png" alt="" />
          <img src="/assets/investorPakeages/baogia2.png" alt="" />
          <img src="/assets/investorPakeages/baogia3.png" alt="" />
          <img src="/assets/investorPakeages/baogia4.png" alt="" />
          <img src="/assets/investorPakeages/baogoia5.png" alt="" />
          <img src="/assets/investorPakeages/baogia6.png" alt="" />
          <img src="/assets/investorPakeages/baogia7.png" alt="" />
          <img src="/assets/investorPakeages/baogia8.png" alt="" />
          <img src="/assets/investorPakeages/baogia9.png" alt="" />
          <img src="/assets/investorPakeages/baogia10.png" alt="" />
          <img src="/assets/investorPakeages/baogia11.png" alt="" />
          <img src="/assets/investorPakeages/baogia12.png" alt="" />
          <img src="/assets/investorPakeages/baogia13.png" alt="" />
          <img src="/assets/investorPakeages/baogia14.png" alt="" />
        </div>
      
        <div className={s.ReadOur}>
          <a href="https://docsend.com/view/4f86mptn2x8iwuf6" target="_blank" rel="noreferrer">Read our docs online</a>
        </div>
      </div>      
      {showButton && (
        <button onClick={scrollToTop} className="btn-scrollTop">
          &#8679;
        </button>
      )}
    </section>
  );
};

export default Career