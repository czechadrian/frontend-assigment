import { apiGet, createUrl } from "api-wrapper/apiCall";

export const getSportArticles = () => {
  const url = createUrl(`/articles/sports`);
  return apiGet(url);
};
