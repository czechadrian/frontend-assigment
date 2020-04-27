import { fetchSportArticles } from "../sport-articles-actions";
import { getSportArticles } from "../../../api-wrapper/getSportArticles";

jest.mock("../../../api-wrapper/getSportArticles");

describe("fetch sport articles", () => {
  it("should dispatch init and success actions", async () => {
    const dispatchStub = jest.fn();
    const payload = [
      {
        id: 789702,
        date: "2. februar 2019",
        image: "https://placeimg.com/280/180/nature",
        category: "sport",
        title:
          "Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender",
        preamble:
          "MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.",
      },
      {
        id: 123544,
        date: "1. oktober 2018",
        image: "https://placeimg.com/280/180/nature",
        category: "sport",
        title:
          "Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!",
        preamble:
          "Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.",
      },
    ];
    getSportArticles.mockReset();
    getSportArticles.mockResolvedValue(payload);
    await fetchSportArticles()(dispatchStub);

    expect(dispatchStub).toHaveBeenCalledTimes(2);
    expect(dispatchStub).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        type: "articles-sport/FETCH_INIT",
      })
    );
    expect(dispatchStub).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        type: "articles-sport/FETCH_SUCCESS",
      })
    );
  });
  it("should dispatch init and failure actions", async () => {
    const dispatchStub = jest.fn();

    getSportArticles.mockReset();
    getSportArticles.mockRejectedValue();
    await fetchSportArticles()(dispatchStub);

    expect(dispatchStub).toHaveBeenCalledTimes(3);
    expect(dispatchStub).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        type: "articles-sport/FETCH_INIT",
      })
    );
    expect(dispatchStub).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        type: "articles-sport/FETCH_FAILURE",
      })
    );
  });
});
