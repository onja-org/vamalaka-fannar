import { FC} from "react";
import { Logo } from "../Logo/Logo";
import styled from "styled-components";
import logo from "../Logo/images/vamalaka.svg";
import searchIcon from "../../assets/searchIcon.svg";
import {
  HeaderNavLink,
  ItemType,
  LinkTypes,
} from "../HeaderNavLink/HeaderNavLink";
import { ListItem } from "../HeaderNavLink/List";
import Input from "../HeaderInputSearch/HeaderInputSearch";
import { mediaQueries } from "../../mediaQueries/mediaQueries";

export const Header: FC<LinkTypes> = ({ item }) => {
  return (
    <HeaderStyles>
      <div>
        <Logo logo={logo} alt="Vamalaka logo" />
        <Input
          icon={searchIcon}
          alt="Input search"
          placeholderText="Search for anything..."
        />
        <ListItem >
          {item.map((link: ItemType) => (
            <HeaderNavLink {...link} key={link.path} />
          ))}
        </ListItem>
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  margin: 0;
  width: 100%;
  
  div {
    display: flex;
    justify-content: space-between;   
    gap: 20px; 

    ${mediaQueries("lg", null)`
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 150px;
      align-items: center;  
      gap:50px;  
    `}
    ${mediaQueries("ld", null)`
      grid-template-columns: 2fr 2fr 1fr;
    `}
  }
`;
