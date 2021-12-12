import { FC } from "react";
import styled from "styled-components";
import language from "../../assets/languages.svg";
import transactions from "../../assets/transactions.svg";
import account from "../../assets/account.svg";
import signin from "../../assets/signin.svg";
import { fonts } from "../../globalStyles/fonts";
import { mediaQueries } from "../../mediaQueries/mediaQueries";
import { MyAccountWidget } from "../../pages/UserWidget";
import { useModal } from "../ModalWidget/useModal";
import { Modal } from "../ModalWidget/Modal";
import { Link } from "react-router-dom";
import { userSelector } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";

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
    text: "My Account",
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
  hover?: any;
}

export interface LinkTypes {
  item: Array<ItemType>;
}

export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => {
  const { isShown, toggle, unToggle } = useModal();
  const user = useSelector(userSelector);

  const content = <MyAccountWidget hide={unToggle} />;

  return (
    <Item>
      <Link to={`/${path}`} data-testid={text}>
        {text === "My Account" ? (
          <>
            <img src={imgSrc} alt={alt} />
            <span onMouseEnter={toggle}>{text}</span>
          </>
        ) : (
          <>
            <img src={imgSrc} alt={alt} />
            <span>{text}</span>
          </>
        )}
      </Link>
      {user ? <Modal isShown={isShown} hide={unToggle} modalContent={content} /> : ''}
    </Item>
  );
};

const Item = styled.li`
  img {
    width: 100%;
  }
  a {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    display: flex;
    border: none;
    background-color: transparent;
    align-items: center;

    span {
      margin-inline-start: 10px;

      ${mediaQueries(null, "xl")`
        display: none;
      `}
    }
  }
`;
