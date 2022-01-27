import s from "./SlideTeam.module.sass";

import React, { Component } from "react";
import Slider from "react-slick";
import CardTeam from "components/Home/CardTeam/CardTeam";
import TitleName from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "components/Anim";

const GROUPS = [
  [
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
  ],
  [
    {
      name: "Thế",
      position: "Designer",
    },
    {
      name: "Thư",
      position: "Dev",
    },
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
    {
      name: "Oanh",
      position: "Designer",
    },
    {
      name: "Lợi",
      position: "Dev",
    },
  ],
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

            <div className={s.group_btn}>
              <button className={s.btn_left} onClick={this.previous}>
                <img src="/assets/Feature/ic_left.svg" alt="" />
              </button>
              <button className={s.btn_right} onClick={this.next}>
                <img src="/assets/Feature/ic_right.svg" alt="" />
              </button>
            </div>
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
                      nameTeam={item.name}
                      serviceTeam={item.position}
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
