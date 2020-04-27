import { apiGet, createUrl } from "../apiCall";
import { getFashionArticles } from "../getFashionArticles";

jest.mock("../apiCall", () => {
  return {
    createUrl: jest.fn().mockReturnValue(`/articles/fashion`),
    apiGet: jest.fn(),
  };
});

describe("getFashionArticles", () => {
  createUrl.mockReset();
  createUrl.mockReturnValue(`/articles/fashion`);
  test("should get invoice", () => {
    getFashionArticles();
    expect(apiGet).toHaveBeenCalledWith(`/articles/fashion`);
  });
});
