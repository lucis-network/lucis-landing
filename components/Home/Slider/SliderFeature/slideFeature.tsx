import AnimWhenVisible from "components/Anim";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import CardFeature from "../../CardFeature/CardFeature";

import s from "./SliderFeature.module.sass";
export default class SlideFeature extends Component {
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
      <>
        <AnimWhenVisible>
          <div className={s.heading_feature}>
            <h1>Ecosystem & Features</h1>
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
        <div className="section-content">
          <AnimWhenVisible>
            {/* @ts-ignore*/}
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div className={s.block_item}>
                <CardFeature
                  linkImg="/assets/Feature/glass_feature.png"
                  status={true}
                  titleCard="Lucis Scholarships Platform"
                  contentCard="A platform to connect Investors and Gamers through scholarships"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass2.png"
                  status={false}
                  titleCard="Lucis NFT Mistery Box Launchpad (INO)"
                  contentCard="A platform to sell mistery boxes from our well-selected games"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass3.png"
                  status={true}
                  titleCard="Lucis NFT Marketplacea"
                  contentCard="Trading NFTs for Tokens or OTHER GAME'S NFTs"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass4.png"
                  status={false}
                  titleCard="Lucis DeFi Services"
                  contentCard="Leverage all DeFi services to gain more profit / benefits for investors / scholars"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass5.png"
                  status={true} 
                  titleCard="Lucis Media"
                  contentCard="All up-to-date news, information, hidden gems, etc in GameFi Industry"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass6.png"
                  status={false}
                  titleCard="Lucis Academy"
                  contentCard="Many free courses, tutorials, tips for scholars to gain more benefits & in-game performance"
                />
              </div>
              <div className={s.block_item}>
                <CardFeature
                  linkImg="/assets/Feature/glass_feature.png"
                  status={true}
                  titleCard="DAO management"
                  contentCard="Voting for Investors and scholars in choosing new game, the tournament rules, game Guild ranking"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass2.png"
                  status={false}
                  titleCard="CRM"
                  contentCard="A seamlessly dashboard experience to manage your partners, assets"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass3.png"
                  status={true}
                  titleCard="Performance, Ranking, Insight system"
                  contentCard="Track the scholar earning performance, ranking. We use some data analysis model to calculate ranking"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass4.png"
                  status={false}
                  titleCard="Accounting, Financial"
                  contentCard="Cash in, cash out, investment tools for Investors"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass5.png"
                  status={true}
                  titleCard="Assets management"
                  contentCard="Manage your NFT, game account, with E2E encryption NFT lending/ borrowing"
                />
                <CardFeature
                  linkImg="/assets/Feature/glass6.png"
                  status={false}
                  titleCard="Tournaments"
                  contentCard="Contact to game for server test (people and guild)"
                />
              </div>
            </Slider>
          </AnimWhenVisible>
        </div>
      </>
    );
  }
}
