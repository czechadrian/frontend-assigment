import { apiGet, createUrl } from "api-wrapper/apiCall";

export const getFashionArticles = () => {
  const url = createUrl(`/articles/fashion`);
  return apiGet(url);
};
