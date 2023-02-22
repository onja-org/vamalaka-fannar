import React from "react";
import styled from "styled-components";
import { InputEditProfile } from '../components/InputEditProfile/InputEditProfile'
import Button from "../components/Buttons/Buttons";
import { ThumbnailGrid } from "../components/ThumbnailGrid/ThumbnailGrid";
import { UploadFile } from "../components/UploadFile/UploadFile";

export const EditProfilePage = () => {
  return (
    <div>
        <h1>Your profile Information</h1>
            <div>
                <div>Your full name</div>
                <div> name of the user </div>
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
                    Email
                </div>
                <div>
                    Email of the user
                </div>
            </div>
            <form>
                <TextareaField rows={10}> </TextareaField>
                <InputEditProfile label={""} placeholder={""}/>
                <InputEditProfile label={""} placeholder={""}/>
                <InputEditProfile label={""} placeholder={""}/>
                <InputEditProfile label={""} placeholder={""}/>
                <InputEditProfile label={""} placeholder={""}/>
            </form>

            <div>
            <Button
              label={'Save changes'}
              isPrimary={true}
              type={'submit'}
              onClick={() => {}}
            />
            <Button
              label={'Reset'}
              isPrimary={true}
              onClick={() => {}}
              type={'button'}
            />
            <Button
              type={'button'}
              label={'Preview'}
              isPrimary={false}
              onClick={() => { }}
            />
            </div>
            <div>
              <UploadFile thumbs={[]} onUploadSuccess={''} text={''}></UploadFile>
            <ThumbnailGrid  onClickImage={() => {}} onDeleteImage={() => {}} thumbs={[]} />
            </div>
   </div>
  )
}


const TextareaField = styled.textarea`
 width: 500px
`