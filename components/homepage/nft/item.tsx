import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import {Bracket, TournamentGql} from "../../../src/generated/graphql";
import moment from "moment";
import {format} from "utils/Number";
import "swiper/css";
import {LINK_HOME_ARENA} from "../../../utils/Enum";
import {slugify} from "../../../utils/String";

type Props = {
  item: any
}
export default function ItemNFT(props: Props) {
  const {item} = props

  return (
    <>
        <div className={s.item}>
          <div className={s.itemImg}>
            <img
              src={item?.img}
              alt=""/>
          </div>
          <div className={s.content}>
            <div className={s.itemTitle}>
              <p>{item?.title}</p>
            </div>
            <div className={s.itemPrice}>
              <p>{format(item?.price, 2, {zero_trim: true})}USD</p>
            </div>
          </div>
        </div>
      </>
  );
};
