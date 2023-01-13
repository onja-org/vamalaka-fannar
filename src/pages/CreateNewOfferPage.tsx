import React from "react";
import styled from 'styled-components'
import Button from "../components/Buttons/Buttons";
import { useHistory} from 'react-router-dom';
import { Paths } from '../paths';
import { DropDown } from "../components/DropDown/DropDown";
import Input from "../components/Input/Input";
import { fonts } from "../globalStyles/fonts";
import { useSelector } from 'react-redux'
import { fetchCategories } from '../redux/slices/categoriesSlice'
import { useEffect } from 'react'
import { CURRENCIES_DROP_DOWN_OPTIONS, UNIT_DROP_DOWN_OPTIONS,CATEGORIES_DROP_DOWN_OPTIONS } from '../constants'
import { useAppDispatch } from '../redux/hooks'
import { selectUpdateAdError } from "../redux/slices/offerByIdSlice";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage"
import { UploadFile } from "../components/UploadFile/UploadFile";
import { ThumbnailGrid } from "../components/ThumbnailGrid/ThumbnailGrid";
import {fetchCreateNewOffer, NewOfferData} from "../redux/slices/userOfferSlice"
import loadingIcon from '../icons/small-load-icon.png';


// import { BACKEND_URL } from "../localhostURL";

export interface NewFormProps  extends NewOfferData{
  text: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  user: {
    username: string;
    email: string;
    photos: {
      url: string;
      isPrimary: boolean;
    }
    id: string;
  };
  category: {
    title: string;
    id: string;
  };
  
}

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

export const CreateNewOffer = (text) => {
  const dispatch = useAppDispatch()
  const offerUpdateAdError = useSelector(selectUpdateAdError)
  const history = useHistory();
 
  const formData = {
    id: '',
    title: '',
    photos: [] as any[],
    body: '',
    amountOfProduct: null,
    price: null,
    unit: '',
    currency: '',
    categoryId:''
  }



  const [newOffer, setNewOffers] = React.useState(formData);
  const [isShownButton, setIsShownButton] = React.useState(false);
  const [isDisable, setIsDisable] = React.useState(false)
  
  const setTitle = ({ target }) => { setNewOffers({ ...newOffer, title: target.value }) }
  
  const setDescription = ({ target }) => { setNewOffers({ ...newOffer, body: target.value }); }
  const setAmountOfProduct = ({ target }) => { setNewOffers({ ...newOffer, amountOfProduct: target.value }) }
  const setPrice = ({ target }) => { setNewOffers({ ...newOffer, price: target.value }) }
  const setUnit = ({ target }) => { setNewOffers({ ...newOffer, unit: target.value }) }
  const setCurrency = ({ target }) => { setNewOffers({ ...newOffer, currency: target.value });} 
  const setCategory = ({ target }) => { setNewOffers({ ...newOffer, categoryId: target.value }); } 
 

  const [imageThumbnails, setImageThumbnails] = React.useState(initialThumbnails);
  const handleImageUploadSucces = (filename, description) => {
    const index = imageThumbnails.findIndex((thumb) => thumb.imageSource === '')
    imageThumbnails[index]={...imageThumbnails[index], imageSource:filename, alt: description}
    
    setImageThumbnails([...imageThumbnails])
    checkIfOnlyImageAsignStar(imageThumbnails)
   
  }



  useEffect(() => {

  }, [newOffer.photos])

 
  const submitNewOffer = React.useCallback(
    
    (event: React.MouseEvent<Element, MouseEvent>) => {
   
      setIsShownButton(true)
      setTimeout(() => {
        setIsShownButton(false)
        setIsDisable(true)
      }, 1000)

    
      
      const index = imageThumbnails.findIndex((thumb) => thumb.imageSource !== '')
        event?.preventDefault()
        dispatch(
          fetchCreateNewOffer({
            id: `${index}`,
            title: newOffer.title,
            photos: [{url: `${imageThumbnails[index].imageSource}`,
              info: `${imageThumbnails[index].alt}`,
              isPrimary: true}],
            body:newOffer.body,
            amountOfProduct: newOffer.amountOfProduct,
            price: newOffer.price,
            unit: newOffer.unit,
            currency:newOffer.currency,
            categoryId: newOffer.categoryId,
          })
        )
    },
    
    [dispatch, newOffer]
    
   
  )


const checkIfOnlyImageAsignStar = (imageThumbnails) => {
  const thumnailsWithImage = imageThumbnails.filter((thumb) => thumb.imageSource !== '')
  if(thumnailsWithImage.length === 1) {
    const index = imageThumbnails.findIndex((thumb) => thumb.imageSource !== '')
    imageThumbnails[index]={...imageThumbnails[index], showStar: true} 

    setImageThumbnails([...imageThumbnails])
  }

}


  const handleThumbnailClick = (src: string) => {
    const index = imageThumbnails.findIndex((thumb) => thumb.imageSource === src)

    const hasStar = imageThumbnails[index].showStar
    const isEmpty = imageThumbnails[index].imageSource === "" 

    if(hasStar || isEmpty) {
      return
    }
    else {
      const clearedStars = imageThumbnails.map((thumnail) => ({...thumnail, showStar: false}) )
      clearedStars[index]={...clearedStars[index], showStar: true} 
      setImageThumbnails([...clearedStars])

    }

    
  }


  const handleThumbnailDelete = (src: string) => {
    const index = imageThumbnails.findIndex((thumb) => thumb.imageSource === src)
    const hasStar = imageThumbnails[index].showStar
    imageThumbnails[index]={...imageThumbnails[index], imageSource: '', alt: '', showStar: false}

   
    if(!hasStar) {
   
      setImageThumbnails([...imageThumbnails])
    }
  else {
    const firstIndexImage = imageThumbnails.findIndex((thumb) => thumb.imageSource !== '')
    imageThumbnails[firstIndexImage]={...imageThumbnails[firstIndexImage], showStar: true} 
    setImageThumbnails([...imageThumbnails])  
  }




    checkIfOnlyImageAsignStar(imageThumbnails)
  }

  useEffect(() => {
    dispatch(fetchCategories([]))
  }, [dispatch])

 
  return (
    <Wrapper>
      <WrapperEditOffer>
        <HeaderEditOffer>Create New Offer</HeaderEditOffer>
        <Form  onSubmit={submitNewOffer as any}>
          <FormEditDetail>
            <Input
              label={'Product name*'}
              placeholder={'Product name'}
              inputType={'text'}
              inputId={'product'}
              inputValue={newOffer.title}
              onChange={setTitle}
            />
            <Input
              inputId={'product'}
              inputType={'text'}
              inputValue={newOffer.body}
              placeholder={'write the descripton of you offer'}
              label={'Description*'}
              onChange={setDescription}
            />
            <DropDown
              options={CATEGORIES_DROP_DOWN_OPTIONS}
              placeholder={'SELECT CATEGORY'}
              name={'select the category'}
              id={'category'}
              label={'Category*'}
              onChange={setCategory}
            />
            <Input
              label={'Price'}
              placeholder={'enter the price'}
              inputType={''}
              inputId={'number'}
              inputValue={newOffer.price||''}
              onChange={setPrice}
            />
            <DropDown
              placeholder={'currency'}
              options={CURRENCIES_DROP_DOWN_OPTIONS}
              name={''}
              id={'currency'}
              label={'Currency'}
              onChange={setCurrency}
            />
            <DropDown
              placeholder={'Unit'}
              options={UNIT_DROP_DOWN_OPTIONS}
              name={''}
              id={'unit'}
              label={'Unit'}
              onChange={setUnit}
            />
            <Input
              label={'Amount available'}
              placeholder={'0'}
              inputType={''}
              inputId={'amout'}
              inputValue={newOffer.amountOfProduct || ''}
              onChange={setAmountOfProduct}
            />
          </FormEditDetail>
          {offerUpdateAdError && <ErrorMessage message={offerUpdateAdError.message} />}
          <WrapperButton>
            <Button
              icon={isShownButton ? loadingIcon : ""} 
              isPrimary={isShownButton ? true : false}
              type="submit" 
              label={isShownButton ? "Learn More": "Create new" } 
              disabled={isDisable ? true : false} 
              onClick = { () => setTimeout(()  => {
                history.push(`${Paths.OFFER_ID}`)
              }, 2000)}
              /> 
          </WrapperButton>
        </Form>
      </WrapperEditOffer>
      <ThumbnailWrapper>
        <UploadFile thumbs={imageThumbnails} onUploadSuccess={handleImageUploadSucces} text={text}/>
        <ThumbnailGrid thumbs={imageThumbnails} onClickImage={handleThumbnailClick} onDeleteImage={handleThumbnailDelete} />
      </ThumbnailWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: #fff;
  max-width: 1167px;
  margin: 0 auto;
  @media (min-width: 460px) {
    display: grid;
    grid-template-columns: 3fr 2fr 20px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const WrapperEditOffer = styled.div`
  width: 80%;
  margin: auto;
`
export const WrapperButton = styled.div`
  padding-top: 79px;
  display: flex;
  max-width: 570px;
  padding-bottom: 65px;
  gap: 25px;
  flex-wrap: wrap;
`
export const HeaderEditOffer = styled.h2`
  ${fonts}
  font-family :'Futura Std', Arial, Helvetica, sans-serif;
  padding-bottom: 18px;
  color: #041d42;
  text-align: start;
  padding-top: 114px;
`
export const FormEditDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 426px;
  margin-bottom: 20px;
  width: 80%;
  input {
    padding-left: 30px;
  }
  `
const ThumbnailWrapper = styled.div`
@media (max-width: 460px) {
margin-left: 20px
}
`;


