import React, { useState } from "react";
import styled from 'styled-components'
import Button from "../components/Buttons/Buttons";
import { DropDown } from "../components/DropDown/DropDown";
import { EditDescription } from "../components/EditDescription/EditDescription";
import Input from "../components/Input/Input";
import { fonts } from "../globalStyles/fonts";
import { useSelector } from 'react-redux'
import { categoriesSelector, fetchCategories } from '../redux/slices/categoriesSlice'
import { useEffect } from 'react'
import { CURRENCIES_DROP_DOWN_OPTIONS, UNIT_DROP_DOWN_OPTIONS } from '../constants'
import { useAppDispatch } from '../redux/hooks'
import { fetchOfferById, fetchOfferUpdateAd, offerByIdSelector, selectUpdateAdError } from "../redux/slices/offerByIdSlice";
import { useParams } from 'react-router-dom';
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";


interface Id {
  id: string
}

export const EditOffer = () => {
  const [submitData, setSubmitData] = useState<{
    id: string;
    title: string;
    body: string;
    amountOfProduct: number;
    price: number;
    unit: string;
    currency: string;
    category: {
      title: string;
      id: string;
    };
    categoryid?: string;
    user: {
      username: string;
      email: string;
      id: string;
    };
  } | null>()

  const { id } = useParams<Id>()
  const dispatch = useAppDispatch()
  const categories = useSelector(categoriesSelector)
  const offerByUniqueId = useSelector(offerByIdSelector)
  const offerUpdateAdError = useSelector(selectUpdateAdError)
  const categoriesOptions = categories.map(category => ({ label: category.title, value: category.title }))

  useEffect(() => {
    setSubmitData(offerByUniqueId)
  }, [offerByUniqueId])

  const setEditName = (title: string) => {
    submitData && setSubmitData({ ...submitData, title })
  }
  const setEditDescription = (body: string) => {
    submitData && setSubmitData({ ...submitData, body })
  }
  const setEditPrice = (price: number) => {
    submitData && setSubmitData({ ...submitData, price })
  }
  const setEditAmountOfProduct = (amount: string) => {
    submitData && setSubmitData({ ...submitData, amountOfProduct: Number(amount) })
  }
  const setEditCurrency = (currency: string) => {
    submitData && setSubmitData({ ...submitData, currency })
  }
  const setEditUnit = (unit: string) => {
    submitData && setSubmitData({ ...submitData, unit })
  }
  const setCategory = (categorid) => {
    const categoryid = categories.find(category => category.title === categorid).id
    submitData && setSubmitData({ ...submitData, categoryid })
  }

  const resetValue = () => {
    setSubmitData(offerByUniqueId)
  }

  const submitUpdateAd = React.useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      event?.preventDefault()
      dispatch(
        fetchOfferUpdateAd({
          id: id,
          title: submitData?.title,
          body: submitData?.body,
          currency: submitData?.currency,
          price: submitData?.price,
          unit: submitData?.unit,
          amountOfProduct: submitData?.amountOfProduct,
          categoryId: submitData?.categoryid,
        })
      )
    },
    [dispatch, submitData,id]
  )

  useEffect(() => {
    dispatch(fetchCategories([]))
    dispatch(fetchOfferById({ id }))
  }, [dispatch, id])

  const categoryName = categories.find(category => category.id === submitData?.categoryid)?.title

  return (
    <Wrapper>
      <WapperEditOffer>
        <HeaderEditOffer>Edit Offer</HeaderEditOffer>
        <Form>
          <FormEditDetail>
            <Input
              label={'Product name*'}
              placeholder={'Product name'}
              inputType={''}
              inputId={'product'}
              inputValue={submitData?.title || ''}
              onChange={(e) => setEditName(e.target.value)}
            />
            <EditDescription
              textdescription={submitData?.body || ""}
              label={'Description*'}
              onChange={(e) => { setEditDescription(e.target.value) }}
            />
            <DropDown
              options={categoriesOptions}
              placeholder={'SELECT CATEGORY'}
              name={categoryName || ''}
              id={'category'}
              label={'Category*'}
              onChange={(e) => setCategory(e.target.value)}
              value={categoryName || submitData?.category.title}
            />
            <Input
              label={'Price'}
              placeholder={'45'}
              inputType={''}
              inputId={'number'}
              inputValue={String(submitData?.price)}
              onChange={(e) => { setEditPrice(Number(e.target.value)) }}
            />
            <DropDown
              placeholder={'currency'}
              options={CURRENCIES_DROP_DOWN_OPTIONS}
              name={submitData?.currency || ''}
              id={'currency'}
              label={'Currency'}
              onChange={(e) => { setEditCurrency(e.target.value) }}
              value={submitData?.currency}
            />
            <DropDown
              placeholder={'Unit'}
              options={UNIT_DROP_DOWN_OPTIONS}
              name={submitData?.unit || ''}
              id={'unit'}
              label={'Unit'}
              onChange={(e) => setEditUnit(e.target.value)}
              value={submitData?.unit}
            />
            <Input
              label={'Amount available'}
              placeholder={''}
              inputType={''}
              inputId={'amout'}
              inputValue={`${submitData?.amountOfProduct}`}
              onChange={(e) => setEditAmountOfProduct(e.target.value)}
            />
          </FormEditDetail>
          {offerUpdateAdError && <ErrorMessage message={offerUpdateAdError.message} />}
          <WrapperButton>
            <Button
              label={'Save changes'}
              isPrimary={true}
              type={'submit'}
              onClick={(e) => submitUpdateAd(e)}
            />
            <Button
              label={'Reset'}
              isPrimary={true}
              onClick={resetValue}
              type={'button'}
            />
            <Button
              type={'button'}
              label={'Preview'}
              isPrimary={false}
              onClick={() => { }}
            />
            <Button
              type={'button'}
              label={'Delete'}
              isPrimary={true}
              onClick={() => { }}
            />
          </WrapperButton>
        </Form>
      </WapperEditOffer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  max-width: 1167px;
  margin: 0 auto;
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


