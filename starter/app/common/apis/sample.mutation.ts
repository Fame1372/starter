"use client";
import { useMutation } from "@tanstack/react-query";
import Client from "../client.utility";

export const createAd: any = async (params: any) => {
  const client = new Client();
  return await client.post("/categoryFood/list", params);
};

export function useCreateAd() {
  return useMutation({
    mutationFn: async (params: Partial<any>) => createAd(params),
  });
}
