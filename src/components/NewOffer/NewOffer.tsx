import React from 'react'
import { DropDownImage } from '../DropDownImage/DropDownImage'
import { GridManageImages } from '../GridManageImage/GridManageImages'
import Input from '../InputName/InputName'
import { TextArea } from '../TextArea/TextArea'
import styled from 'styled-components';
import { InputSelect } from '../InputSelect/InputSelect'
import Button from '../Buttons/Buttons'
import plusCircle from './icons/plus-circle.svg'

interface NewOfferProps {
    inputOnchange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    value?: string
    textareaOnchange?: (e: any) => void
    uploadImageOnchange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const options = ['Category 1', 'Category 2']
const NewOffer:React.FC<NewOfferProps> = ({inputOnchange, textareaOnchange, uploadImageOnchange, value}) => {
  return (
    <NewOfferContainer>
        <h2>Create offer</h2>
        <Form>
            <InputFields>
                <Input label="Product name" placeholder="Enter product name" type="text" onChange={inputOnchange} value={value}/>
                <TextArea isTall={true} label="Description" onChange={textareaOnchange} textDescription="Enter description"/>
                <InputSelect 
                    placeholder='SELECT CATEGORY'
                    label='Category'
                    selectName='Category'
                    options={options}
                />
                <Input label="Price" placeholder="Enter price" type="text" onChange={inputOnchange} value={value}/>
                <InputSelect 
                    placeholder='SELECT CURRENCY'
                    label='Currency'
                    selectName='Currency'
                    options={options}
                />
                <InputSelect 
                    placeholder='SELECT UNIT'
                    label='Unit'
                    selectName='Unit'
                    options={options}
                />
                <Input label="Amount available" placeholder="Enter amount available" type="text" onChange={inputOnchange} value={value}/>
            
            </InputFields>
            <UploadImage>
                <DropDownImage onChange={uploadImageOnchange} alt="Dragging and dropping and image" name="file-upload" />
                <GridManageImages />
            </UploadImage>
            <SubmitButton>
                <Button 
                    label="Create offer"
                    isPrimary={false}
                    type="submit"
                    icon={plusCircle}
                />
            </SubmitButton>
        </Form>
    </NewOfferContainer>
  )
}

export default NewOffer

const NewOfferContainer = styled.div`
    max-width: calc(1167px - calc(114px + 76px));
    margin: auto;
    background-color: #fff;
    padding: 114px 76px;
`
const Form = styled.form`
    @media (min-width: 720px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 94px;
    }
    
    @media (min-width: 800px) {
        column-gap: 100px;
    }

    @media (min-width: 980px) {
        column-gap: 136px;
    }
`
const InputFields = styled.div``
const UploadImage = styled.div`
    width: 75%;
    justify-self: center;
    div:nth-of-type(2) {
        img { width: 66% }
    }
`
const SubmitButton = styled.div`
    width: 50%;
`