import {ApolloError, ApolloQueryResult, gql, useQuery} from "@apollo/client";
import {TournamentFilterInput, TournamentGql, TournamentSearchInput } from "src/generated/graphql";

type Props = {
  input: TournamentSearchInput,
  data: TournamentFilterInput
}

export const useGetDataArena = (): {
  getDataArenaLoading: boolean,
  getDataArenaError: ApolloError | undefined,
  refetchgetDataArena: () => Promise<ApolloQueryResult<any>>,
  getDataArena: TournamentGql[] | undefined,
} => {
  const {
    loading: getDataArenaLoading,
    error: getDataArenaError,
    refetch: refetchgetDataArena,
    data,
  } = useQuery(SEARCH_ARENA, {
    variables: {
      input: {
        type: "CLOSED",
        value: ""
      },
      data: {
        bracket: "ALL",
        game_uid: "",
        prize_pool: "NONE",
        size: "",
        time: "DESC"
      },
    },
    fetchPolicy: "no-cache"
  })

  return {
    getDataArenaLoading,
    getDataArenaError,
    refetchgetDataArena,
    getDataArena: data?.search,
  }
}

const SEARCH_ARENA = gql`
  query search($input: TournamentSearchInput!, $data: TournamentFilterInput!) {
    search(input: $input, data: $data) {
      uid
      name
      cover
      pool_size
      participants
      team_size
      thumbnail
      join_fee
      brackets {
        uid
        type
      }
      team_size
      prize_allocation
      game {
        logo
        name
        tournaments {
          uid
          name
        }
      }
      currency {
        symbol
        icon
      }
      cache_tournament {
        team_participated
      }
      user {
        profile {
          display_name
          avatar
          user_name
        }
      }
      totalPrizePool
      brackets {
        type
        start_at
      }
    }
  }
`;