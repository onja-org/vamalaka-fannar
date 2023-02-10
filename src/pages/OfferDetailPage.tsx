
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Buttons/Buttons";
import  Email  from "../icons/mail.png";
import  Call  from "../icons/call.png";
import { useHistory, useLocation } from "react-router-dom";
import DefaultProfile from '../images/default.png'





export const OfferDetailPage = () => {
  const history = useHistory()
  const historyData = history.location.state
  const newOfferData : any  = historyData
   const imageSource = `http://localhost:4000/uploads/` + newOfferData.photos[0].url
     console.log("imageSource", imageSource)
    return(
        <Wrapper>
            <TopWrapper>
            <DescriptionWrapper>
              <div>
              <h1>Category value</h1>
              <div>{newOfferData.categoryId}</div> 
              </div>
                
                <h3>Description</h3>
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
            <div>
            <Image src= {imageSource}  alt={newOfferData.photos[0].info} ></Image>
            </div>
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

export const DescriptionWrapper = styled.div`
`
export const ProfileWrapper = styled.div``
export const ContactWrappet = styled.div``
export const ButtonWrapper = styled.div`
   margin-top : 30px
`