
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Buttons/Buttons";
import  Email  from "../icons/mail.png";
import  Call  from "../icons/call.png";
import { useHistory } from "react-router-dom";

export const OfferDetailPage = () => {

  const history = useHistory()
  const historyData = history.location.state
  
   console.log('history::::::',history);

console.log(' historyData ::::::', historyData );



    return(
        <Wrapper>
            <TopWrapper>
            <DescriptionWrapper>
                <h1>Category value: </h1>
                <h3>Description</h3>
                <div>llllll</div>
            </DescriptionWrapper>
            <GrideWrpper>
                <h4> Price: value</h4>
                <h5> Avalability: .... </h5>
            </GrideWrpper>
            </TopWrapper>
            <img src="./" alt="any" ></img>
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