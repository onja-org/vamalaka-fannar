
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Buttons/Buttons";
import  Email  from "../icons/mail.png";
import  Call  from "../icons/call.png";
import { useHistory} from "react-router-dom";
import DefaultProfile from '../images/default.png'
import leftArrow from '../images/gallery-arrows.png'
import rightArrow from '../images/gallery-arrows1.png'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import '../../src/slider.css'
import { ImageThumbnail } from "./CreateNewOfferPage";

export interface NewFormProps  {
  amountOfProduct: string,
  body:string,
  categoryId: string,
  currency: string,
  id: string,
  imageThumbnails: ImageThumbnail [],
  photos:[],
  price: string,
  title:string,
  unit: string
}


export const OfferDetailPage = () => {

  const history = useHistory <NewFormProps> ()
  const historyData = history.location.state
  const newOfferData = historyData
  const imageSlider = newOfferData.imageThumbnails
  const thumnailsWithImage = imageSlider.filter((thumb) => thumb.imageSource !== '')
  
    const prefixUrl = `http://localhost:4000/uploads/`
    const [current, setCurrent] = useState(0);
    const length = thumnailsWithImage.length
  


  const nextSlide = () => {
     setCurrent(current === length - 1 ? 0 : current + 1);
   };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
   };

    return(
        <Wrapper>
          <TopWrapper>
            <DescriptionWrapper>
              <div>
                <h1>{newOfferData.categoryId}</h1> 
              </div>
                <h3>Description :</h3>
                <div>{newOfferData.body}</div>
            </DescriptionWrapper>
            <GrideWrpper>
              <PriceWrapper>
                <h4> Price:</h4>
                  <p> {newOfferData.price} /pieces</p>
                </PriceWrapper>
              <AvalabiltyWrapper>
                <h5> Avalability:</h5>
                <p> {newOfferData.amountOfProduct} pieces / month</p>
              </AvalabiltyWrapper>
            </GrideWrpper>
          </TopWrapper>
          <ImageSliderWrapper>
            <div>
              <LeftArrowWrapper>
                <FlechSLiderRight src={leftArrow}></FlechSLiderRight>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
              </LeftArrowWrapper>
            </div>
            <div>
            {imageSlider.map((slide, index) => {
                return (
                  <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                  >
                    {index === current && (
                      <Image src={prefixUrl + slide.imageSource} alt={slide.alt} className='image' />
                    )}
                  </div>
                );
                  })}
            </div>
            <RightArrowWrapper>
              <FlechSLiderLeft src={rightArrow}></FlechSLiderLeft>
              <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            </RightArrowWrapper>
            </ImageSliderWrapper>
            <InfoWrapper>
               <ProfileWrapper>
                <ImageProfile src={DefaultProfile}></ImageProfile>
                <ButtonWrapper>
               <Button 
                   type="submit" 
                   label= "View profile and see other items"  
                   disabled = {false}
                >

                </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                <Button 
                   type="submit" 
                   label= "Add Johnny to favourites"  
                   disabled = {false}>

                </Button>
                </ButtonWrapper>
               </ProfileWrapper>
               <ContactWrappet>
                 <div>contact name of the woner of the profile</div>
                 <ButtonWrapper>
                 <Button 
                   icon={Email} 
                   type="submit" 
                   label= "Send an email"  
                   disabled = {false}
                >

                </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button 
                    icon={Call} 
                    type="submit" 
                    label= "Reveal phone number"  
                    disabled = {false}>
                  </Button>
                  </ButtonWrapper>
               </ContactWrappet>
            </InfoWrapper>
           
        </Wrapper>
    )
}

export const Wrapper = styled.div`
background-color: #ffff;
padding: 30px
`
export const GrideWrpper = styled.div`

`

export const Image = styled.img`
  margin-top: 90px;
  margin-bottom: 80px

 
`

export const PriceWrapper = styled.div`
display: grid;
grid-template-columns: 100px 2fr;
`
export const AvalabiltyWrapper = styled.div`
display: grid;
grid-template-columns: 100px 2fr;
`
export const ImageProfile = styled.img`
  width: 30%;
  border-radius: 10px;
 
`
export const ImageWrapper = styled.div`
 position: center;
 
`
export const TopWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
`

export const InfoWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
`
export const ImageSliderWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 2fr;
gap: 20px
`

export const DescriptionWrapper = styled.div`
`
export const ProfileWrapper = styled.div``
export const ContactWrappet = styled.div``
export const ButtonWrapper = styled.div`
   margin-top : 30px
`
export const LeftArrowWrapper = styled.div`

`
export const RightArrowWrapper = styled.div`
margin-left: auto;
`
export const FlechSLiderLeft = styled.img`
height: 70px;
width: 70px;
`
export const FlechSLiderRight = styled.img`
`
