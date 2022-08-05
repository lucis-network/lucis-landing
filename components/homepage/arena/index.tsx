import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import {useGetDataArena} from "../../../hooks/useArena";
import {Bracket, TournamentGql} from "../../../src/generated/graphql";
import moment from "moment";
import {format} from "utils/Number";
import { useRouter } from "next/router";
import {LINK_HOME_ARENA} from "../../../utils/Enum";
import { slugify } from "utils/String";

const BracketType = [
  { value: "SINGLE", label: "Single elimination" },
  { value: "DOUBLE", label: "Double elimination" },
  { value: "BATTLE_ROYALE", label: "Battle Royal" },
];

export default function Arena() {
  const {getDataArena, getDataArenaLoading, getDataArenaError} = useGetDataArena();
  const [data, setData] = useState<TournamentGql[] | undefined>();
  const router = useRouter()

  useEffect(() => {
    let k = getDataArena;
    if(getDataArena && getDataArena.length > 4) {
      k = getDataArena.slice(0,4);
    }
    setData(k);
  }, [getDataArena])

  const elimination = (item:Bracket) => {
    return BracketType.find(
      (bracket) => bracket.value === item?.type
    )?.label;
  }

  const joinNow = () => {
    window.open(LINK_HOME_ARENA, '_blank');
  }

  const createNow = () => {
    window.open(LINK_HOME_ARENA + "/create", '_blank');
  }

  const getDetailArena = (item: TournamentGql) => {
    window.open(LINK_HOME_ARENA + `/${item.uid}/${slugify(item.name)}`, '_blank');
  }
  return (
    <>
      <div className={s.wrapper}>
        <div className={`lucis-container-2 ${s.container}`}>
          <div className={s.title}>
            <img src="/assets/homepage/arena.png" alt=""/>
          </div>
          <div className={s.listItems}>
            {
              data && data.map((item, index) => {
                return (
                  <div key={`${item.uid}${index}`}>
                    <div className={s.item} onClick={() => getDetailArena(item)}>
                      <div className={s.itemImg}>
                        <div className={s.itemDescImg}>
                          <div className={s.itemDescImgLR}>
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
                            <span>{item?.team_size} vs {item?.team_size}</span>
                          </div>
                        </div>
                        <div className={s.thumbnail}>
                          <img
                            //src={item?.cover}
                            src="/assets/homepage/test_arena.png"
                            alt=""/>
                        </div>
                      </div>
                      <div className={s.itemDesc}>
                        <div className={s.itemFreeEntry}>
                          {/*<p>{item?.game?.name}</p>*/}
                          <span>Free entry</span>
                        </div>
                        <div className={s.itemAva}>
                          <img src={item?.user?.profile?.avatar ? item?.user?.profile?.avatar : "/assets/homepage/default_avatar.png"} alt=""/>
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
                            "MMM Do hh:mm"
                          )}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={s.desc}>
            <p>Let's create your own playing field and show your level to others!</p>
          </div>
          <div className={s.groupBtn}>
            <div className={`${s.btn} ${s.btnJoin}`} onClick={joinNow}>
              <div>Join Now</div>
            </div>
            <div className={`${s.btn} ${s.btnCreate}`} onClick={createNow}>
              <div>Create Now</div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
