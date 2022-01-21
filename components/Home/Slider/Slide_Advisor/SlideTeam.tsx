import s from './SlideTeam.module.sass'


import React, { Component } from "react";
import Slider from "react-slick";
import CardTeam from 'components/Home/CardTeam/CardTeam';
import TitleName from 'components/Home/TitleSection/TitleName';

export default class SimpleSliderAdvisor extends Component {
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
          <TitleName titleName='Advisor' />
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
          <div className={s.block_team}>
            <CardTeam statusCard={1} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={2} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={3} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={4} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={4} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={3} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={2} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={1} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
          </div>
          <div className={s.block_team}>
          <CardTeam statusCard={1} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={2} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={3} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={4} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={4} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={3} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={2} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={1} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
          </div>
          <div className={s.block_team}>
          <CardTeam statusCard={1} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={2} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={3} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={4} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={4} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={3} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={2} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
            <CardTeam statusCard={1} nameTeam='Oanh nguyen' serviceTeam='Desginer'  />
          </div>
        </Slider>
      </div>
    );
  }
}