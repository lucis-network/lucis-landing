import {ApolloError, ApolloQueryResult, gql, useApolloClient, useQuery} from "@apollo/client";
import { ChestDetail, IntroductoryChestPrizes, LuckyChestUserInfo } from "src/generated/graphql_p2e";

type GetChestDetailProps = {
  game_platform_id: number,
  tier: string,
}

type GetUserHistoryProps = {
  game_platform_id?: number,
  tier?: string,
  page?: number,
  limit?: number,
}

export type ClaimChestPrizeProps = {
  user_prize_history_uid: string,
  onError?: (error: ApolloError) => void,
  onCompleted?: (data: any) => void,
}

export const useGetChestDetail = ({game_platform_id, tier}: GetChestDetailProps): {
  getChestDetailLoading: boolean,
  getChestDetailError: ApolloError | undefined,
  refetchChestDetail: () => Promise<ApolloQueryResult<any>>,
  getChestDetailData: ChestDetail,
} => {
  const {
    loading: getChestDetailLoading,
    error: getChestDetailError,
    refetch: refetchChestDetail,
    data,
  } = useQuery(GET_CHEST_DETAIL, {
    variables: {
      game_platform_id: game_platform_id,
      tier: tier,
    },
    context: {
      endpoint: 'p2e'
    },
    fetchPolicy: "no-cache"
  })

  return {
    getChestDetailLoading,
    getChestDetailError,
    refetchChestDetail,
    getChestDetailData: data?.getChestDetail,
  }
}

export const useGetAllChest = (): {
  getAllChestLoading: boolean,
  getAllChestError: ApolloError | undefined,
  refetchGetAllChest: () => Promise<ApolloQueryResult<any>>,
  getDataAllChest: IntroductoryChestPrizes,
} => {
  const {
    loading: getAllChestLoading,
    error: getAllChestError,
    refetch: refetchGetAllChest,
    data,
  } = useQuery(GET_ALL_CHEST, {
    variables: {
    },
    context: {
      endpoint: 'p2e'
    },
    fetchPolicy: "no-cache"
  })

  return {
    getAllChestLoading,
    getAllChestError,
    refetchGetAllChest,
    getDataAllChest: data?.introductoryChestPrizes,
  }
}

const GET_CHEST_DETAIL = gql`
  query($game_platform_id: Int!, $tier: LuckyChestTier!) {
    getChestDetail(game_platform_id: $game_platform_id, tier: $tier) {
      id
      title
      ticket_cost
      ticket_cost_type
      created_at
      sponsors {
        uid
        name
        img
        link
      }
      prizes {
        id
        title
        desc
        quantity_in_stock
        valued_at
        img
        rarity
      }
    }
  }
`

const GET_ALL_CHEST = gql`
  query {
    introductoryChestPrizes{
      id
      prizes {
        id
        title
        desc
        quantity_in_stock
        valued_at
        img
        rarity
      }
    }
  }
`