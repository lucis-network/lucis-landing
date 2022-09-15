import {ApolloError, ApolloQueryResult, gql, useQuery} from "@apollo/client"
import { RecentWinner } from "src/generated/graphql_p2e"

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

