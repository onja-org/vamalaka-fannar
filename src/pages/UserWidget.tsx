import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout, userSelector } from "../redux/slices/userSlice";
import { Paths } from "../paths";
import { adsSelector, fetchAds } from "../redux/slices/adsSlice";
import profile from "../images/adolfia.jpg";
import { ModalProps } from "../components/ModalWidget/useModal";
import { fonts } from "../globalStyles/fonts";

export const MyAccountWidget: FC<ModalProps> = ({ hide }) => {
  const user = useSelector(userSelector);
  const offers = useSelector(adsSelector);
  const dispatch = useDispatch();

  const countOffers =
    offers &&
    offers.filter((el) => (el.username === user.username ? el.username : 0));

  function fetchUser() {
    dispatch(logout());
  }

  useEffect(() => {
    dispatch(fetchAds([]))
  },[dispatch])


  return (
    <Container>
      <Wrapper>
        <ProfileWrapper onClick={hide}>
          <Link to={Paths.PROFILE} key={user.id}>
            <Image src={profile} alt="my profile" />
            <div style={{ color: "#0E54BB", marginBottom: "20px" }}>
              {user.username}
            </div>
          </Link>

          <Link to={Paths.MY_OFFER} key={user.createdAt}>
            Offers: <OfferNum>{countOffers.length}</OfferNum>
          </Link>
        </ProfileWrapper>

        <span onClick={hide}>
          <LogoutButton onClick={fetchUser}>
            <Link to={Paths.DEFAULT} key={user.id}>
              Log out
            </Link>
          </LogoutButton>
        </span>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  text-align: center;

  a {
    ${fonts}
    font-size: 25px;
    line-height: 30px;
    color: #041d42;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 75px;
  border: 1px solid #000000;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const ProfileWrapper = styled.button`
  display: block;
  width: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  line-height: 25px;
  background-color: transparent;
`;

const LogoutButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  color: #041d42;
  background-color: transparent;
  margin-top: 18px;
`;

const OfferNum = styled.span`
  padding: 7px 8px 1px 8px;
  font-size: 18px;
  background-color: #e9b633;
  border-radius: 6px;
`;
