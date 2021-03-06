import s from "./SlideTeam.module.sass";

import React, { Component } from "react";
import Slider from "react-slick";
import CardTeam from "components/Home/CardTeam/CardTeam";
import TitleName from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "components/Anim";

const GROUPS = [
  [
    {
      name: "Anh Tran",
      position: "CEO",
      img:"/assets/Team/tu_a.png",
      status: true,
      linkIn:"https://www.linkedin.com/in/tuanhbeu"
    },
    {
      name: "Hoa Phung",
      position: "COO",
      img:"/assets/Team/hoa.png",   
      status: true,
    },
    {
      name: "Binh Duy",
      position: "CFO",
      img:"/assets/Team/binh.png",   
      status: true,
    },
    {
      name: "Luat NGUYEN",
      position: "CTO",
      img:"/assets/Team/Luat.png",
      status: true,
      linkIn:"https://www.linkedin.com/in/luat-dinh-nguyen/"
    },
    {
      name: "Loi nguyen",
      position: "Development Lead",
      img:"/assets/Team/Loi.png",
      status: true,
      linkIn:"https://www.linkedin.com/in/loi-nguyen-249a07144/"
    },
    // {
    //   name: "Hung nguyen",
    //   position: "Community Leader",
    //   img:"/assets/Team/hunng.png",
    //   status: true,
    //   linkIn:"https://www.linkedin.com/in/hwngbob/"
    // },
    // {
    //   name: "Tan NGUYEN",
    //   position: "Research Leader",
    //   img:"/assets/Team/tan.png",
    //   status: true,
    //   linkIn:"https://www.linkedin.com/in/nguyen-tan-4447b122b/?fbclid=IwAR2iXun7oqawXVSUZ81n5FQptkQZK9KZQfWNtpyLVD7FMtqYE7kRkDR5sUw"
    // },
    // {
    //   name: "Long NGUYEN",
    //   position: "Axie Infinity Lead",
    //   img:"/assets/Team/long.png",
    //   status: true,
    //   linkIn:"https://www.linkedin.com/in/long-nguyen-51ba1622b/"
    // },
    // {
    //   name: "Viet NGUYEN",
    //   position: "Thetan Lead",
    //   img:"/assets/Team/viet.png",
    //   status: true,
    //   linkIn:"https://www.linkedin.com/in/viet-nguyen-24b029196/"
    // },
  ],
  // [
  //   {
  //     name: "Viet The",
  //     position: "Frontend Developer",
  //     img:"/assets/Team/the.png",
  //     status: true,
  //     linkIn:"https://www.linkedin.com/in/dao-the-951b4922b/"
  //   },
  //   {
  //     name: "Oanh nguyen",
  //     position: "UX/UI Designer",
  //     img:"/assets/Team/oanh.png",
  //     status: true,
  //     linkIn:"https://www.linkedin.com/in/oanh-oanh-795077148/"
  //   },
  //   {
  //     name: "Huyen nguyen",
  //     position: "QA Manager",
  //     img:"/assets/Team/huyen.png",
  //     status: true,
  //     linkIn:"https://www.linkedin.com/in/huyen-nguyen-42b83822b/"
  //   },
  //   {
  //     name: "Huong do",
  //     position: "UX/UI Designer",
  //     img:"/assets/Team/huong.png",
  //     status: true,
  //     linkIn:"http://linkedin.com/in/dawn-humo-330241187"
  //   },
  //   {
  //     name: "Linh NGUYEN",
  //     position: "HR",
  //     img:"/assets/Team/linh.png",
  //     status: true,
  //     linkIn:"https://www.linkedin.com/in/linh-nguyen-84a8441b4/"
  //   },
  // ],
];
export default class SimpleSliderTeam extends Component {
  constructor(props: any) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    //@ts-ignore
    this.slider.slickNext();
  }
  previous() {
    //@ts-ignore
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <AnimWhenVisible>
          <div className={s.heading_feature}>
            <TitleName titleName="Team" />

            {/* <div className={s.group_btn}>
              <button className={s.btn_left} onClick={this.previous}>
                <img src="/assets/Feature/ic_left.svg" alt="" />
              </button>
              <button className={s.btn_right} onClick={this.next}>
                <img src="/assets/Feature/ic_right.svg" alt="" />
              </button>
            </div> */}
          </div>
        </AnimWhenVisible>

        <AnimWhenVisible>
          {/* @ts-ignore*/}
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {GROUPS.map((mems, idx) => {
              return (
                <div key={idx} className={s.block_team}>
                  {mems.map((item, mIdx) => (
                    <CardTeam
                      key={item.name + mIdx}
                      statusCard={1}
                      srcImg={item.img}
                      srcLinkedIn={item.linkIn}
                      nameTeam={item.name}
                      serviceTeam={item.position}
                      setLinkin={item.status}
                      enableAnim={false}
                    />
                  ))}
                </div>
              );
            })}
          </Slider>
        </AnimWhenVisible>
      </div>
    );
  }
}
