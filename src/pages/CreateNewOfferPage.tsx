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

export interface NewFormProps {
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

export const CreateNewOffer = () => {
  const dispatch = useAppDispatch()
  const offerUpdateAdError = useSelector(selectUpdateAdError)
  const categories = useSelector(categoriesSelector)
  const categoriesOptions = categories.map(category => ({ label: category.title, value: category.title }))
  const formData = {
    id: '',
    title: '',
    photos: {
      url: '',
      info: '',
      isPrimary: false,
    },
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

  const [newOffers, setNewOffers] = React.useState(formData);
  const setTitle = ({ target }) => { setNewOffers({ ...newOffers, title: target.value }) }
  const setDescription = ({ target }) => { setNewOffers({ ...newOffers, body: target.value }) }
  const setAmountOfProduct = ({ target }) => { setNewOffers({ ...newOffers, amountOfProduct: target.value }) }
  const setPrice = ({ target }) => { setNewOffers({ ...newOffers, price: target.value }) }
  const setUnit = ({ target }) => { setNewOffers({ ...newOffers, unit: target.value }) }
  const setCurrency = ({ target }) => { setNewOffers({ ...newOffers, currency: target.value }) }

  const submitNewOffer = React.useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      event?.preventDefault()
    },
    []
  )

  useEffect(() => {
    dispatch(fetchCategories([]))
  }, [dispatch])

  
  return (
    <Wrapper>
      <WapperEditOffer>
        <HeaderEditOffer>Create New Offer</HeaderEditOffer>
        <Form>
          <FormEditDetail>
            <Input
              label={'Product name*'}
              placeholder={'Product name'}
              inputType={'text'}
              inputId={'product'}
              inputValue={newOffers.title}
              onChange={setTitle}
            />
            <Input
              inputId={'product'}
              inputType={'text'}
              inputValue={newOffers.body}
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
              inputValue={String(newOffers.price)}
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
              inputValue={String(newOffers.amountOfProduct)}
              onChange={setAmountOfProduct}
            />
          </FormEditDetail>
          {offerUpdateAdError && <ErrorMessage message={offerUpdateAdError.message} />}
          <WrapperButton>
            <Button
              label={'Save changes'}
              isPrimary={true}
              type={'submit'}
              onClick={(e) => submitNewOffer(e)}
            />
            <Button
              label={'Reset'}
              isPrimary={true}
              onClick={() => { }}
              type={'button'}
            />
             <Button icon={''} type="button" onClick={() => {}} label="Create new" />
          </WrapperButton>
        </Form>
      </WapperEditOffer>
      {// add onchange and receive object {url:"avatar-clove-1633680562459-442152569.jpg", info:"dry clove", isPrimary:true} store it here in state array 
}
      <UploadFile image={''}/>
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
export const WapperEditOffer = styled.div`
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

