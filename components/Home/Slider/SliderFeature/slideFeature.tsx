import React, { Component, useRef } from "react";
import Slider from "react-slick";
import CardFeature from "../../CardFeature/CardFeature";

import s from './SliderFeature.module.sass'
export default class SlideFeature extends Component {
  constructor(props:any) {
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
      slidesToScroll: 1
    };
    return (
      <div>

        <div className={s.heading_feature}>
          <h1>LuciS Guild key features</h1>
          <div className={s.group_btn}>
            <button className={s.btn_left} onClick={this.previous}>
              <img src="/assets/Feature/ic_left.svg" alt="" />
            </button>
            <button className={s.btn_right} onClick={this.next}>
              <img src="/assets/Feature/ic_right.svg" alt="" />
            </button>
          </div>
        </div>



      {/* @ts-ignore*/}
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div className={s.block_item}>
            <CardFeature linkImg='/assets/Feature/glass_feature.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass2.png' status={false} titleCard='Financial management' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass3.png' status={true} titleCard='Performance Tracking' contentCard='Track your gamer earning performance, ranking' />
            <CardFeature linkImg='/assets/Feature/glass4.png' status={false} titleCard='Accounting' contentCard='Cash in, cash out, NFT lending' />
            <CardFeature linkImg='/assets/Feature/glass5.png' status={true} titleCard='Financial management' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass6.png' status={false} titleCard='Performance Tracking' contentCard='Track your gamer earning performance, ranking' />
          </div>
          <div className={s.block_item}>
            <CardFeature linkImg='/assets/Feature/glass_feature.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass2.png' status={false} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass3.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass4.png' status={false} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass5.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass6.png' status={false} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
          </div>
          <div className={s.block_item}>
            <CardFeature linkImg='/assets/Feature/glass_feature.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass2.png' status={false} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass3.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass4.png' status={false} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass5.png' status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature linkImg='/assets/Feature/glass6.png' status={false} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
          </div>
        </Slider>
      </div>
    );
  }
}