import React, { FunctionComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BACKEND_URL } from "../../localhostURL";
import { mediaQueries } from "../../mediaQueries/mediaQueries";
import { Paths } from "../../paths";
import { useAppDispatch } from "../../redux/hooks";
import { userOffersSelector, fetchUserOffers } from "../../redux/slices/userOfferSlice";
import { userSelector } from "../../redux/slices/userSlice";

const WidgetWrapper = styled.div`
  position: absolute;
  top: 15%;
  right: 30px;
  outline: 0;
  background: #FFF5F1;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 182px;
  padding: 1rem;

  ${mediaQueries('lmd', null)`
   right: 1%;
  `}
`;
export const UserWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding: 1.5rem;

  .link-to-offer, .link-to-home {
    color: #041D42;
    font-size: 25px;
    font-family: Futura Std
  }
`;
const Image = styled.img`
  height: 75px;
  border: 2px solid #000000;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Username = styled.p`
  font-family: Futura Std;
  font-size: 25px;
  margin-block-start: 0;
  margin-block-end: 1rem;
  color: #0E54BB;
`;

const OffersNum = styled.span`
  padding: 7px 8px 1px 8px;
  font-size: 18px;
  color: #041D42;
  background: #E9B633;
  border-radius: 6px;
  padding-bottom: 4px;
`;

const LogoutButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  margin-top: 18px;
`;

export interface UserWidgetProps {
  isOpen?: boolean;
  close?: () => void;
}

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  return {
    isOpen,
    show,
    hide,
  };
};

export const UserWidget: FunctionComponent<UserWidgetProps> = ({
  isOpen,
  close,
}) => {
  const user = useSelector(userSelector);
  const userOffers = useSelector(userOffersSelector);
  const dispatch = useAppDispatch()
  const userId = user?.id
  const userPhoto = `${BACKEND_URL}/uploads/${user.photos[0]?.url}`;
  const offersNumber = Object.keys(userOffers).length;

  useEffect(() => {
    isOpen &&
      dispatch(fetchUserOffers({ userId }))
  }, [dispatch,isOpen, userId])

  const modal = (
    <React.Fragment>
      <WidgetWrapper onClick={close}>
        <UserWidgetContainer>
          <Link to={Paths.PROFILE} key={user.username}>
            <Image src={userPhoto} alt="my profile" />
            <Username style={{ color: "#0E54BB", marginBottom: "20px" }}>
              {user.username}
            </Username>
          </Link>

          <Link className="link-to-offer" to={Paths.PROFILE}>
            Offers: <OffersNum>{offersNumber}</OffersNum>
          </Link>
          <LogoutButton>
            <Link className="link-to-home" to={Paths.DEFAULT}>
              Log out
            </Link>
          </LogoutButton>
        </UserWidgetContainer>
      </WidgetWrapper>

    </React.Fragment>
  );
  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

