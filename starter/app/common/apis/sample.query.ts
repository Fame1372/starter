import { useQuery } from "@tanstack/react-query";

import Client from "@/common/apis/client.utility";

export interface UsersListQueryParams {
  id: number;
}

export interface UsersListResponse {
  id: number;
  name: string;
}

export type UsersListType = (params?: UsersListQueryParams) => Promise<UsersListResponse[]>;

export const usersList: UsersListType = async (params) => {
  const client = new Client();
  return await client.get("/users", params);
};

export function useUsersList({
  enabled,
  query,
}: {
  enabled?: boolean;
  query?: UsersListQueryParams;
}) {
  return useQuery<UsersListResponse[], Error>({
    queryFn: () => usersList(query),
    queryKey: ["users-list", query],
    enabled,
  });
}
