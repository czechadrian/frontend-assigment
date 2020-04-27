import * as React from "react";
import { FunctionComponent, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "app/reducers";
import { TArticle } from "app/reducers/data";
import { months, TFetchingStatus } from "app/constants";
import { makeStyles } from "@material-ui/core/styles";
import { sortBy } from "lodash";
import {
  Article,
  Box,
  Content,
  DateC,
  Filters,
  FormControlComp,
  FormGroupComp,
  Header,
  Image,
  Nav,
  Preamble,
  Title,
  Wrapper,
} from "app/screens/articles-styled-components";

const image = require("image.png");

export const Articles: FunctionComponent = () => {
  const [checks, setChecks] = useState({
    checkedSport: false,
    checkedFashion: false,
  });
  const handleChange = (event: any) => {
    setChecks({ ...checks, [event.target.name]: event.target.checked });
  };
  const [sort, setSort] = React.useState("");

  const handleChangeSort = (event: any) => {
    setSort(event.target.value);
  };

  const sortElements = () => {
    return sortBy(
      getAvailableArticles,
      [
        (o) => {
          return o.date.substring(o.date.length - 4, o.date.length);
        },
      ],
      [
        (i) => {
          let regexp = new RegExp("[a-zA-Z]+");
          // @ts-ignore
          return months[regexp.exec(i.date)[0]];
        },
      ],
      [
        (date) => {
          let regexp = new RegExp("^[0-9]+");
          // @ts-ignore
          return regexp.exec(date.date)[0];
        },
      ]
    );
  };
  const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
  const getAvailableArticles: TArticle[] = useTypedSelector((state) => {
    let a: any = [];
    const sportArticles = state.data.sportArticles;
    const fashionArticles = state.data.fashionArticles;
    if (
      sportArticles.fetchingStatus === TFetchingStatus.Success &&
      checks.checkedSport
    ) {
      sportArticles.articles.forEach((art) => a.push(art));
    }
    if (
      fashionArticles.fetchingStatus === TFetchingStatus.Success &&
      checks.checkedFashion
    ) {
      fashionArticles.articles.forEach((art) => a.push(art));
    }
    return a;
  });
  const displayArticles: any = () => {
    let articles = getAvailableArticles;
    if (sort !== "") {
      articles = sort === "desc" ? sortElements() : sortElements().reverse();
    }
    return (
      articles &&
      articles.map((article) => {
        return (
          <Article>
            <Image
              src={article.image === "" ? image : article.image}
              alt={"image"}
            />
            <Content>
              <Header>
                <Title>{article.title}</Title>
                <DateC>{article.date}</DateC>
              </Header>
              <Preamble>{article.preamble}</Preamble>
            </Content>
          </Article>
        );
      })
    );
  };
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Wrapper>
      <Nav>
        <Filters>
          Data sources
          <FormGroupComp>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checks.checkedFashion}
                  onChange={handleChange}
                  name="checkedFashion"
                />
              }
              label="Fashion"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checks.checkedSport}
                  onChange={handleChange}
                  name="checkedSport"
                />
              }
              label="Sport"
            />
          </FormGroupComp>
        </Filters>
        <FormControlComp className={classes.formControl}>
          <InputLabel id="sort-label">Sort by date</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-simple-select"
            value={sort}
            onChange={handleChangeSort}
          >
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
        </FormControlComp>
      </Nav>
      <Box>{displayArticles()}</Box>
    </Wrapper>
  );
};

export default Articles;
