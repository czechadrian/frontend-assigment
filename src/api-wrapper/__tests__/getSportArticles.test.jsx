import { apiGet, createUrl } from "../apiCall";
import { getSportArticles } from "../getSportArticles";

jest.mock("../apiCall", () => {
  return {
    createUrl: jest.fn().mockReturnValue(`/articles/sport`),
    apiGet: jest.fn(),
  };
});

describe("getSportArticles", () => {
  createUrl.mockReset();
  createUrl.mockReturnValue(`/articles/sport`);
  test("should get invoice", () => {
    getSportArticles();
    expect(apiGet).toHaveBeenCalledWith(`/articles/sport`);
  });
});
