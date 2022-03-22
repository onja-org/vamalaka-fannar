import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import language from "../../assets/languages.svg";
import transactions from "../../assets/transactions.svg";
import account from "../../assets/account.svg";
import signin from "../../assets/signin.svg";
import { fonts } from "../../globalStyles/fonts";
import { mediaQueries } from "../../mediaQueries/mediaQueries";
import { useModal } from "../UserWidget/UserWidget";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/slices/userSlice";
import { UserWidget } from "../UserWidget/UserWidget";

export const loggedIn = [
  { path: "#language", imgSrc: language, alt: "Languages", text: "English" },
  {
    path: "#transactions",
    imgSrc: transactions,
    alt: "Transactions",
    text: "Transactions",
  },
  {
    path: "profile",
    imgSrc: account,
    alt: "Accounts",
    text: "Account",
  },
];

export const login = [
  { path: "language", imgSrc: language, alt: "Languages", text: "English" },
  {
    path: "login",
    imgSrc: signin,
    alt: "Log in",
    text: "Log in",
  },
  {
    path: "sign-up",
    imgSrc: account,
    alt: "Sign up",
    text: "Sign up",
  },
];
export interface ItemType {
  path?: string;
  imgSrc?: string;
  alt: string;
  text: string;
}

export interface LinkTypes {
  item: Array<ItemType>;
}

export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => {
  const { isOpen, show, hide } = useModal();
  const user = useSelector(userSelector);

  return (
    <Item>
      {alt === "Accounts" ? (
        <>
          <StyledAccount onClick={show} onMouseEnter={show}>
            <StyledImage src={imgSrc} alt={alt} />
            <StyledSpan>{text}</StyledSpan>
          </StyledAccount>
          {user && <UserWidget isOpen={isOpen} close={hide} />}
        </>
      ) :
        (<Link to={`/${path}`} data-testid={alt}>

          <StyledImage src={imgSrc} alt={alt} />
          <StyledSpan>{text}</StyledSpan>
        </Link>)}
    </Item>
  );
};

const ItemTextStyle = ` 
  ${fonts}
c  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  line-height: 30px;
  color: #041d42;
  text-decoration: none;
  display: flex;
  border: none;
  background-color: transparent;
  align-items: center;
`;

const Item = styled.ul`
  padding-inline-start: 0;
  &:nth-of-type(3) {
    padding-inline-start: 2rem;
  }
  a {
   ${ItemTextStyle}
  }
`;

const StyledSpan = styled.span`
  margin-inline-start: 10px;

  ${mediaQueries(null, "xl")`
    display: none;
  `}

  ${mediaQueries("xl", null)`
  width: 95px;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 15px;
  ${mediaQueries("md", null)`
    max-width: 40px;
  `}
`;

const StyledAccount = styled.a`
  ${ItemTextStyle};
`;
