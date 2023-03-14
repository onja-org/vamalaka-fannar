import React, { useEffect } from "react";
import styled from "styled-components";
import { InputEditProfile } from '../components/InputEditProfile/InputEditProfile'
import Button from "../components/Buttons/Buttons";
import { ThumbnailGrid } from "../components/ThumbnailGrid/ThumbnailGrid";
import { UploadFile } from "../components/UploadFile/UploadFile";
import { useHistory } from "react-router";
import { ImageThumbnail } from "./CreateNewOfferPage";
import { useSelector } from "react-redux";
import { fetchUserLogin, fetchUserRegister, userSelector } from "../redux/slices/userSlice";
import { fetchUserOffers } from "../redux/slices/userOfferSlice";
import { useAppDispatch } from "../redux/hooks";


const initialThumbnails = [
  {
    imageSource: '',
    emptyImage: true,
    alt: "",
    showStar: false
  },
  {
    imageSource: '',
    emptyImage: true,
    alt: "",
    showStar: false
  },
  {
    imageSource: '',
    emptyImage: true,
    alt: "",
    showStar: false
  },
  {
    imageSource: '',
    emptyImage: true,
    alt: "",
    showStar: false
  },
  {
    imageSource: '',
    emptyImage: true,
    alt: "",
    showStar: false
  },
  {
    imageSource: '',
    emptyImage: true,
    alt: "",
    showStar: false
  },
]

export const EditProfilePage = () => {
const [imageThumbnails, setImageThumbnails] = React.useState <ImageThumbnail[] > (initialThumbnails);

const [usersList, setusersList] = React.useState({})


const user = useSelector(userSelector);
const dispatch = useAppDispatch()



console.log("oooo",usersList)
console.log("username",user)
console.log("test", user.username) 

useEffect(() => {
  // dispatch(fetchUserLogin({}))
  dispatch(fetchUserRegister({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    role: ''
  }))
}, [dispatch])

useEffect(() => {
  //   const usersList = user.map((use) => {
  //     return {
  //       username: use.username
  //     }
  //   })
  // return username.username
   setusersList(usersList as any)
}, [user])

  return (
      <ContentWrapper>
        <div>
        <Wrapper>
        <h3>Your profile Information</h3>
            <div>
                <div>Your full name</div>
                <NameWrapper> {user.username }</NameWrapper>
            </div>
            <div>
                <div>
                    Role
                </div>
                <div>
                    Role of the user
                </div>
            </div>
            <div>
                <div>
                    Email:
                </div>
                <div>
                  {user.email}
                </div>
            </div>
            </Wrapper>
            <form>
              <TextAreaWrapper>
              <label>Personal Bio</label>
                <TextareaField rows={10}/>
              </TextAreaWrapper>
                <InputEditProfile label={"Address"} placeholder={""}/>
                <InputEditProfile label={"City"} placeholder={""}/>
                <InputEditProfile label={"State"} placeholder={""}/>
                <InputEditProfile label={"Country"} placeholder={""}/>
                <InputEditProfile label={"Contact Phone Number"} placeholder={""}/>
            </form>

            <ButtonWrapper>
            <ButtonSubWrapper>

            <Button
              label={'Save changes'}
              isPrimary={true}
              type={'submit'}
              onClick={() => {}}
            />
            </ButtonSubWrapper>
            <ButtonSubWrapper>
            <Button
              label={'Reset'}
              isPrimary={true}
              onClick={() => {}}
              type={'button'}
            />
            </ButtonSubWrapper>
            <ButtonSubWrapper>
            <Button
              type={'button'}
              label={'Preview'}
              isPrimary={false}
              onClick={() => { }}
            />
            </ButtonSubWrapper>
            </ButtonWrapper>
            </div>
            <div>
              <UploadFile thumbs={[]} onUploadSuccess={''} text={''}></UploadFile>
            <ThumbnailGrid  onClickImage={() => {}} onDeleteImage={() => {}} thumbs={imageThumbnails} />
            </div>
   </ContentWrapper>
  )
}




const TextareaField = styled.textarea`
width: -webkit-fill-available;






`


const ButtonSubWrapper = styled.div`
margin-right: 8px
`


const ThumbNailWrapper = styled.div`
margin-top: -160px
`
const ButtonWrapper = styled.div`
display: flex;
margin-top: 10px;
margin-left: 15px;
`


const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
grid-gap: 100px
`


const TextAreaWrapper = styled.div`
margin-left: 15px;


`


const Wrapper = styled.div`
margin-left: 15px;
margin-bottom: 15px
`
const NameWrapper = styled.div`
 color: red
`