
import React, { useState } from "react";
import styled from "styled-components";

export const OfferDetailPage = () => {
    return(
        <Wrapper>
            <TopWrapper>
            <DescriptionWrapper>
                <h1>Category value: </h1>
                <h3>Description</h3>
                <div>lllllllllllllllllllllllllllllllllllllllllllllllllllll</div>
            </DescriptionWrapper>
            <GrideWrpper>
                <h4> Price: value</h4>
                <h5> Avalability: .... </h5>
            </GrideWrpper>
            </TopWrapper>
            <img src="./" alt="any" ></img>
            <InfoWrapper>
               <ProfileWrapper>
                 
               </ProfileWrapper>
               <ContactWrappet>
                 <div>contact name of the woner of the profile</div>
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