import React, { Component } from "react";
import Slider from "react-slick";
import CardFeature from "../../CardFeature/CardFeature";

import s from './SliderFeature.module.sass'


export default class SimpleSlider extends Component {
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
        <Slider {...settings}>
          <div className={s.block_item}>
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
          </div>
          <div className={s.block_item}>
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
          </div>
          <div className={s.block_item}>
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
            <CardFeature status={true} titleCard='CRM' contentCard='A seamlessly dashboard experience to manage your partners, assets ...' />
          </div>
        </Slider>
      </div>
    );
  }
}