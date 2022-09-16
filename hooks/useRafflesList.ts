import {ApolloError, ApolloQueryResult, gql, useQuery} from "@apollo/client"
import {RaffleGql, RaffleStatusType, RecentWinner} from "src/generated/graphql_p2e"

export const useGetRecentWinners = (): {
  getRecentWinnersLoading: boolean,
  getRecentWinnersError: ApolloError | undefined,
  refetchRecentWinners: () => Promise<ApolloQueryResult<any>>,
  getRecentWinnersData: {
    getRecentWinners: RecentWinner[]
  },
} => {
  const {
    loading: getRecentWinnersLoading,
    error: getRecentWinnersError,
    refetch: refetchRecentWinners,
    data: getRecentWinnersData,
  } = useQuery(GET_RECENT_WINNERS, {
    context: {
      endpoint: 'p2e'
    }
  })

  return {
    getRecentWinnersLoading,
    getRecentWinnersError,
    refetchRecentWinners,
    getRecentWinnersData,
  }
}

type GetRafflesProps = {
  filter: {
    name?: string,
    skip_raffle_uid?: string,
    status?: RaffleStatusType,
    page?: number,
    limit?: number
  }
}

export const useGetRaffles = (): {
  getRafflesLoading: boolean,
  getRafflesError: ApolloError | undefined,
  refetchRaffles: () => Promise<ApolloQueryResult<any>>,
  getRafflesData: {
    topRaffle: RaffleGql[]
  },
} => {
  const {
    loading: getRafflesLoading,
    error: getRafflesError,
    refetch: refetchRaffles,
    data: getRafflesData,
  } = useQuery(GET_RAFFLES, {
    context: {
      endpoint: 'p2e'
    }
  })

  return {
    getRafflesLoading,
    getRafflesError,
    refetchRaffles,
    getRafflesData,
  }
}

const GET_RECENT_WINNERS = gql`
  query {
    getRecentWinners {
      user {
        id
        profile {
          user_name
          display_name
          avatar
        }
      }
      raffle {
        uid
        img
        valued_at
        end_at
      }
    }
  }
`

const GET_RAFFLES = gql`
  query {
    topRaffle {
      uid
      name
      img
    }
  }
`

