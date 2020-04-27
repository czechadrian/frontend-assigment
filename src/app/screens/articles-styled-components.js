import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import media from "../media";
import FormGroup from "@material-ui/core/FormGroup";

export const Wrapper = styled.div`
  border: 2px solid black;
  margin: 25px;
  display: flex;
  justify-content: space-between;
  ${media.label0`
  flex-direction: column;
  `}
  ${media.label1300`
  flex-direction: row;
  `}
`;
export const Filters = styled.div`
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  margin: 2.5%;
  margin-right: 5%;
  min-width: 20%;
  max-width: 20%;
`;
export const Nav = styled.div`
  display: flex;
  ${media.label0`
  flex-direction: row;
  justify-content:space-between;
  `}
  ${media.label1300`
  flex-direction: column;
  justify-content: flex-start;
  `}
`;
export const Box = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 80%;
`;
export const Article = styled.div`
  flex-direction: row;
  display: flex;
`;
export const Content = styled.div`
  width: 100%;
`;
//${media``}
export const Header = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const Preamble = styled.div``;
export const DateC = styled.div``;
export const FormControlComp = styled(FormControl)`
  max-width: 10%;
  margin: 35px;
  display: flex;
  flex-direction: row-reserve;
  justify-content: flex-end;
  float: right;
`;
export const FormGroupComp = styled(FormGroup)`
  ${media.label0`
  flex-direction: row;
`}
  ${media.label1300`
  flex-direction: column;
`}
`;
