
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Buttons/Buttons";
import  Email  from "../icons/mail.png";
import  Call  from "../icons/call.png";
import { useHistory, useLocation } from "react-router-dom";




export const OfferDetailPage = () => {
  // let location = useLocation()
  const history = useHistory()
  const historyData = history.location.state
//   console.log(title)
//   const newOffer = historyData
const newOfferData : any  = historyData

console.log("historyData", newOfferData)
console.log("log", newOfferData.photos[0].url)
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
                 <div>
                 <h4> Price: {newOfferData.price} /pieces</h4>
                 </div>
                <div>
                  <h5> Avalability: {newOfferData.amountOfProduct} / month</h5>
                </div>
            </GrideWrpper>
            </TopWrapper>
            <img src={newOfferData.photos[0].url} alt="any" ></img>
            <InfoWrapper>
               <ProfileWrapper>
               <Button 
                   type="submit" 
                   label= "View profile and see other items"  
                   disabled = {false}
                >

                </Button>
                <Button 
                   type="submit" 
                   label= "Add Johnny to favourites"  
                   disabled = {false}>

                </Button>
               </ProfileWrapper>
               <ContactWrappet>
                 <div>contact name of the woner of the profile</div>
                 <Button 
                   icon={Email} 
                   type="submit" 
                   label= "Send an email"  
                   disabled = {false}
                >

                </Button>
                <Button 
                   icon={Call} 
                   type="submit" 
                   label= "Reveal phone number"  
                   disabled = {false}>

                </Button>
               </ContactWrappet>
            </InfoWrapper>
            <ButtonWrapper>
               
             
            </ButtonWrapper>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
background-color: #ffff;
padding: 30px
`
export const GrideWrpper = styled.div`

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
display: grid;
grid-template-columns: 2fr 2fr;
`