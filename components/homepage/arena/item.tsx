import s from "./index.module.sass";
import React from "react";
import {Bracket, TournamentGql} from "../../../src/generated/graphql";
import moment from "moment";
import {format} from "utils/Number";
import "swiper/css";
import {Image} from "antd";


type Props = {
  item: TournamentGql
}
const BracketType = [
  { value: "SINGLE", label: "Single elimination" },
  { value: "DOUBLE", label: "Double elimination" },
  { value: "BATTLE_ROYALE", label: "Battle Royal" },
];

export default function ItemArena(prop: Props) {
  const {item} = prop;

  const elimination = (item:Bracket) => {
    return BracketType.find(
      (bracket) => bracket.value === item?.type
    )?.label;
  }

  return (
    <>
        <div className={s.item}>
          <div className={s.itemImg}>
            <div className={s.itemDescImg}>
              <div className={s.itemDescImgL}>
                <img src="/assets/homepage/ic_user_arena.svg" alt=""/>
                <span>
                          { item.cache_tournament?.team_participated === undefined || null
                            ? 0
                            : item.cache_tournament?.team_participated }
                  /{item?.participants}
                        </span>
              </div>
              <div className={s.itemDescImgGameMode}>
                <span>{item?.brackets && item?.brackets[0] && elimination(item?.brackets[0])}</span>
              </div>
              <div className={s.itemDescImgLR}>
                <img src="/assets/homepage/play_arena.svg" alt=""/>
                <span>{item?.team_size} v {item?.team_size}</span>
              </div>
            </div>
            <div className={s.thumbnail}>
              <img
                src={item?.cover ? item?.cover : "/assets/homepage/test_arena.png"}/>
            </div>
          </div>
          <div className={s.itemDesc}>
            <div className={s.itemFreeEntry}>
              {/*<p>{item?.game?.name}</p>*/}
              <img src="/assets/game/csgo.png" alt=""></img>
              <p>Free entry</p>
            </div>
            <div className={s.itemAva}>
              {/*<img src={item?.user?.profile?.avatar ? item?.user?.profile?.avatar : "/assets/homepage/default_avatar.png"} alt=""/>*/}
              <Image src={item?.user?.profile?.avatar ? item?.user?.profile?.avatar : '/assets/homepage/default_avatar.png'} preview={false} alt="" fallback="/assets/homepage/default_avatar.png" />
            </div>
            <div className={s.itemCreator}>
              <p>Creator</p>
              <h2>{item?.user?.profile?.display_name}</h2>
            </div>
          </div>
          <div className={s.itemTitle}>
            <p>{item?.name}</p>
          </div>
          <div className={s.itemGroupCT}>
            <div className={s.itemCurrency}>{
              format(Number(item?.totalPrizePool), 2, {zero_trim: true})
            }{" "}
              {item.currency.symbol}</div>
            <div className={s.itemTime}>
              <img src="/assets/homepage/date_range_arena.svg" alt=""/>
              <span>{moment(item.brackets?.[0].start_at).format(
                "MMM Do, hh:mm"
              )}</span>
            </div>
          </div>
        </div>
      </>
  );
};
