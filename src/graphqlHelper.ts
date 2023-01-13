import axios from 'axios'
import { Photo } from './components/MyAccount/MyAccount'
import { BACKEND_URL } from './localhostURL'
import { NewOfferData } from './redux/slices/userOfferSlice'

import { gql, request } from "graphql-request";
export const sendQuery = (query: any, variables?: any): Promise<any> => {
  return axios.post(`${BACKEND_URL}/graphql?`, {
    query,
  });
};

export const sendAuthorizedQuery = (
  query: string,
  token: string,
  variables?: any
): Promise<any> => {

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return request(`${BACKEND_URL}/graphql?`, query, variables, config.headers);
};

export const getAdsQuery = () => {
  return `{
          ads{id,title,body,category{title,id}, user{username, email, id, photos{url,isPrimary}}, photos{url, info, isPrimary}}
      }`;
};

export const getCategoriesQuery = () => {
  return `{
          categories{title, id, description}
      }`;
};

export const registerMutation = (
  username: string,
  password: string,
  email: string,
  confirmPassword: string,
  role: string
) => `mutation{
  register(registerInput:{username:"${username}",password:"${password}",confirmPassword:"${confirmPassword}",email:"${email}",role:"${role}"})
    { id,
      createdAt,
      email,
      username,
      token
    }}`;

export const loginMutation = (username: string, password: string) => {
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
  }`;
};

export const getUserOffers = (userId: string) => {
  return `{
  getUserAds(userId:"${userId}"){id,title,body,category{title}, user{username, email}}
}`;
};

export const getOfferById = (id: string) => {
  return `{getad(id:"${id}"){id,title,body,price,unit,amountOfProduct,category{title,id},currency,price,user{username, email, id}}}`;
};

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
  ${Boolean(title) ? `title:"${title}"` : ""} 
  ${Boolean(body) ? `body:"${body}"` : ""}
  ${Boolean(photos) ? `photos:"${photos}"` : ""}
  ${Boolean(currency) ? `currency:"${currency}"` : ""}
  ${Boolean(price) ? `price:${price}` : ""}
  ${Boolean(unit) ? `unit:"${unit}"` : ""}
  ${Boolean(amountOfProduct) ? `amountOfProduct:${amountOfProduct}` : ""}
  ${
    Boolean(categoryId) ? `categoryId:"${categoryId}"` : ""
  }){ id,title,body,photos{url},currency,price,unit,amountOfProduct}}`;
};

export const createNewOffer = (
{title, body,currency,unit, price,categoryId,amountOfProduct, photos}:Omit<NewOfferData, "id"> 

) => {
  const query = gql`
    mutation createAd(
      $title: String!
      $body: String!
      $photos: [PhotoInput]
      $currency: String
      $price: Float
      $unit: String
      $amountOfProduct: Float
      $categoryId: ID!
    ) {
      createAd(
        title: $title
        body: $body
        photos: $photos
        currency: $currency
        price: $price
        unit: $unit
        amountOfProduct: $amountOfProduct
        categoryId: $categoryId
      ) {
        id
        title
        body
        currency
        unit
        price
        amountOfProduct
      }
    }
  `;
  const variables = {
    title,
    body,
    currency,
    unit,
    price: parseFloat(price as unknown as string),
    categoryId,
    amountOfProduct: parseFloat(amountOfProduct as unknown as string),
    photos,
  };
  return { query, variables };
};

