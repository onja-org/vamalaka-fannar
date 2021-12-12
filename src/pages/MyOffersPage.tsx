import styled from "styled-components";
import { Link } from "react-router-dom";
import edit from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";
import addSVG from "../icons/plus-circle.svg";
import { Paths } from "../paths";
import Button from "../components/Buttons/Buttons";
import { Offer } from "../components/Offer/Offer";
import { adsSelector } from "../redux/slices/adsSlice";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/slices/userSlice";

interface User {
  firstName: string;
  lastName: string;
}

export interface Photo {
  url: string;
  info: string;
  isPrimary: boolean;
}
interface OfferData {
  id: string;
  title: string;
  body: string;
  username: User;
  photos: Photo[];
}

export interface OffersListProps {
  offers: OfferData[];
  username: string;
  id: string;
}

export function MyOfferPage() {
  const offers = useSelector(adsSelector);
   return (
    <WrapperOffer>
      <MyOffer offers={offers} username={"username"} id={"123412132"} />
    </WrapperOffer>
  );
}

const MyOffer: React.FC<OffersListProps> = ({ offers }) => {

    const user = useSelector(userSelector);
    const myOffer = offers && offers.filter(offer => offer.username === user.username ? offer.username : '')

  return (
    <Container>
      <Wrapper>
        <div>
          <h3>My Offer</h3>
        </div>
      </Wrapper>
      <OfferWrapper>
        <Wrapper>
          <div></div>
          <Link to={`${Paths.CREATE_NEW_OFFER}`}>
            <Button
              icon={addSVG}
              type="button"
              onClick={() => {}}
              label="Create new"
            />
          </Link>
        </Wrapper>
        <OfferList>
          {myOffer.map((offer) => (
            <li key={offer.id}>
              <Offer
                offerName={offer.title}
                amount={25}
                amountOfProduct={27}
                location={{ city: "Mahanoro", country: "Madagascar" }}
                currency={""}
                detailButtonText="See details"
                imageDescription={offer.photos?.[0].info}
                photos={offer?.photos}
                imageForRating={""}
                isLearnEnabled={true}
                isFavourited={false}
                favoriteButtonText="Add to favourite"
                name={offer.username}
                offerDescription={offer.body}
                profile={""}
                ratingDescription={""}
                star={0}
                unit={""}
              />
              <ImageButton>
                <Button label="EDIT" type="button" icon={edit} />
                <Button label="DELETE" type="button" icon={deleteIcon} />
              </ImageButton>
            </li>
          ))}
        </OfferList>
      </OfferWrapper>
    </Container>
  );
};

export default MyOfferPage;

const Container = styled.article`
  max-width: 1008px;
  margin: auto;
  padding: 74px 16px;

  h3 {
    font-size: 30px;
  }
`;


const OfferWrapper = styled.section`
  padding: 0;

  h4 {
    font-size: 24px;
  }
`;

const OfferList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    position: relative;
  }
`;

const ImageButton = styled.div`
  position: absolute;
  top: 34px;
  left: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperOffer = styled.div`
  background-color: #fff;
  max-width: 1167px;
  margin: 0 auto;
`;
