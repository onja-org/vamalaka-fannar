import React from "react";
import styled from 'styled-components'
import Button from "../components/Buttons/Buttons";
import { DropDown } from "../components/DropDown/DropDown";
import Input from "../components/Input/Input";
import { fonts } from "../globalStyles/fonts";
import { useSelector } from 'react-redux'
import { categoriesSelector, fetchCategories } from '../redux/slices/categoriesSlice'
import { useEffect } from 'react'
import { CURRENCIES_DROP_DOWN_OPTIONS, UNIT_DROP_DOWN_OPTIONS } from '../constants'
import { useAppDispatch } from '../redux/hooks'
import { selectUpdateAdError } from "../redux/slices/offerByIdSlice";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage"
import { UploadFile } from "../components/UploadFile/UploadFile";
import { ThumbnailGrid } from "../components/ThumbnailGrid/ThumbnailGrid";
// import { BACKEND_URL } from "../localhostURL";

export interface NewFormProps {
  text: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  id: string;
  title: string;
  photos: {
    url: string;
    info: string;
    isPrimary: boolean;
  }
  body: string;
  amountOfProduct: number;
  price: number;
  unit: string;
  currency: string;
  category: {
    title: string;
    id: string;
  };
  categoryid: string;
  user: {
    username: string;
    email: string;
    photos: {
      url: string;
      isPrimary: boolean;
    }
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
 
  const categories = useSelector(categoriesSelector)
  
  const categoriesOptions = categories.map(category => ({ label: category.title, value: category.title }))
  const formData = {
    id: '',
    title: '',
    photos: [] as any[],
    body: '',
    amountOfProduct: 0,
    price: 0,
    unit: '',
    currency: '',
    category: {
      title: '',
      id: '',
    }
  }



  const [newOffer, setNewOffers] = React.useState(formData);
  
  const setTitle = ({ target }) => { setNewOffers({ ...newOffer, title: target.value }) }
  


  const setDescription = ({ target }) => { setNewOffers({ ...newOffer, body: target.value }); }
  const setAmountOfProduct = ({ target }) => { setNewOffers({ ...newOffer, amountOfProduct: target.value }) }
  const setPrice = ({ target }) => { setNewOffers({ ...newOffer, price: target.value }) }
  
  const setUnit = ({ target }) => { setNewOffers({ ...newOffer, unit: target.value }) }
  const setCurrency = ({ target }) => { setNewOffers({ ...newOffer, currency: target.value });} 
 
  //  console.log('setCurrency::::::',setCurrency(newOffer);
  // const setUploadedImages = ({ target }) => { setNewOffers({ ...newOffer, photos: [...newOffer.photos, target.value] }) }

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
      event?.preventDefault()
      
    },
    []
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
        <Form>
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
              options={categoriesOptions}
              placeholder={'SELECT CATEGORY'}
              name={'select the category'}
              id={'category'}
              label={'Category*'}
            />
            <Input
              label={'Price'}
              placeholder={'45'}
              inputType={''}
              inputId={'number'}
              inputValue={String(newOffer.price)}
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
              placeholder={''}
              inputType={''}
              inputId={'amout'}
              inputValue={String(newOffer.amountOfProduct)}
              onChange={setAmountOfProduct}
            />
          </FormEditDetail>
          {offerUpdateAdError && <ErrorMessage message={offerUpdateAdError.message} />}
          <WrapperButton>
            {/* <Button
              label={'Save changes'}
              isPrimary={true}
              type={'submit'}
              onClick={(e) => submitNewOffer(e)}
            /> */}
            <Button icon={''} type="button" onClick={(e) =>  submitNewOffer(e)} label="Create new" />
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
  display: grid;
  grid-template-columns: 3fr 2fr 20px;
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
`;
