import axios from 'axios'
import { Photo } from './components/MyAccount/MyAccount'
import { BACKEND_URL } from './localhostURL'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
  return axios.post(`${BACKEND_URL}/graphql?`, {
    query,
  })
}


export const sendAuthorizedQuery = (query: any, token: string, variables?: any,): Promise<any> => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.post(`${BACKEND_URL}/graphql?`, {
    query,
  }, config)
}

export const getAdsQuery = () => {
  return `{
          ads{id,title,body,category{title,id}, user{username, email, id, photos{url,isPrimary}}, photos{url, info, isPrimary}}
      }`
}

export const getCategoriesQuery = () => {
  return `{
          categories{title, id, description}
      }`
}

export const registerMutation = (
  username: string,
  password: string,
  email: string,
  confirmPassword: string,
  role: string,
) => {
  return `mutation{
    register(
      registerInput:{
        username:"${username}",
        password:"${password}",
        confirmPassword:"${confirmPassword}",
        email:"${email}", 
        role:"${role}",
      }
    ){
      id,
      createdAt,
      email,
      username,
      token,
      }
    }
  }`
}

export const loginMutation = (
  username: string, 
  password: string
  ) => {
  return `mutation{
    login(username:"${username}",
    password:"${password}",
    ){
      id,
      createdAt,
      email,
      username,
      token,
      photos{url,isPrimary}
    }
  }`
}


export const getUserOffers = (
  userId: string,
  ) => {
return `{
  getUserAds(userId:"${userId}"){id,title,body,category{title}, user{username, email}}
}`
}


export const getOfferById = (id: string) => {
  return `{getad(id:"${id}"){id,title,body,price,unit,amountOfProduct,category{title,id},currency,price,user{username, email, id}}}`
}

export const updateAd = (
  id: string,
  title?: string,
  body?: string,
  photos?: [Photo],
  currency?: string,
  price?: number,
  unit?: string,
  amountOfProduct?: number,
  categoryId?: string
) => {

  return `mutation{updatead(id:"${id}"
  ${Boolean(title) ? `title:"${title}"` : ''} 
  ${Boolean(body) ? `body:"${body}"` : ''}
  ${Boolean(photos) ? `photos:"${photos}"` : ''}
  ${Boolean(currency) ? `currency:"${currency}"` : ''}
  ${Boolean(price) ? `price:${price}` : ''}
  ${Boolean(unit) ? `unit:"${unit}"` : ''}
  ${Boolean(amountOfProduct) ? `amountOfProduct:${amountOfProduct}` : ''}
  ${Boolean(categoryId) ? `categoryId:"${categoryId}"` : ''}){ id,title,body,photos{url},currency,price,unit,amountOfProduct}}`
}