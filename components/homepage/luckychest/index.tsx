import s from "./index.module.sass";
import React from "react";
import { LuckyChestTier } from "src/generated/graphql_p2e";
import { useGetChestDetail } from "hooks/useLuckyChest";
import ChestPrize from "./prize";

export enum GAMES {
  FACEITCSGO = 1,
  GARENALOL = 2,
}

export default function LuckyChest() {
  const {getChestDetailLoading, getChestDetailError, getChestDetailData} = useGetChestDetail({
    game_platform_id: GAMES.GARENALOL,
    tier: LuckyChestTier.Standard,
  })

  return (
    <>
      <div className={s.wrapper}>
        <div className={`lucis-container-2 ${s.container}`}>
          <div className={s.listItems}>
            {getChestDetailData?.prizes.map(prize => (
              <>
                <ChestPrize
                  key={prize?.id}
                  description={prize?.desc}
                  image={prize?.img ?? ''}
                  title={prize?.title}
                  rarity={prize?.rarity}
                />
              </>
            ))}
          </div>
          <div className={s.boxImages}>
            <img src="/assets/homepage/box_luckychest.svg"  alt=""/>
          </div>
        </div>
      </div>
      </>
  );
};
