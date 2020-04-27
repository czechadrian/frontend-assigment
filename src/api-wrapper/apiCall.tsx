import axios, { AxiosRequestConfig } from "axios";
import { isEmpty } from "lodash";
import queryString from "query-string";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiGet = async <RES extends any>(
  queryUrl: string,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.get<RES>(queryUrl, {
    ...axiosOptions,
  });
  return data;
};

export const createUrl = (queryUrl: string, queryParams = {}) => {
  if (isEmpty(queryParams)) {
    return queryUrl;
  }
  return queryUrl + "?" + queryString.stringify(queryParams);
};
