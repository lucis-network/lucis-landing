import s from "./ChestPrize.module.sass"
import {Maybe} from "@graphql-tools/utils";
import PrizePopover from "./popover";

export type ChestPrizeProps = {
  image: string,
  title: Maybe<string>,
  description?: Maybe<string>,
  rarity: Maybe<string>,
}

const ChestPrize = ({image, title, description, rarity}: ChestPrizeProps) => {
  return (
    <PrizePopover
      image={image}
      title={title}
      description={description}
      rarity={rarity}
    >
      <div className={`${s.chestPrize} ${rarity ?? ''}`}>
        <div className={s.prizeImg}>
          <img src={image ?? '/assets/P2E/lucky-chest/defaultPrizeImage.png'} alt="" />
        </div>
        <div className={s.prizeTitle}>
          {title ?? ''}
        </div>
      </div>
    </PrizePopover>
  )
}

export default ChestPrize