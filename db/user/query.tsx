import { useQuery } from "@tanstack/react-query";

import { getUser } from "./action";

export const useGetUser = async () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
};
