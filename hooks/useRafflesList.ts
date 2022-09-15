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

export const useGetRaffles = ({filter}: GetRafflesProps): {
  getRafflesLoading: boolean,
  getRafflesError: ApolloError | undefined,
  refetchRaffles: () => Promise<ApolloQueryResult<any>>,
  getRafflesData: {
    searchRaffle: RaffleGql[]
  },
} => {
  const {
    loading: getRafflesLoading,
    error: getRafflesError,
    refetch: refetchRaffles,
    data: getRafflesData,
  } = useQuery(GET_RAFFLES, {
    variables: {
      filter: filter
    },
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
      }
    }
  }
`

const GET_RAFFLES = gql`
  query ($filter: RaffleFilter!) {
    searchRaffle (filter: $filter) {
      uid
      name
      img
    }
  }
`

