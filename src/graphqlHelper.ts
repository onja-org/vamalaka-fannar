import axios from 'axios'
import { BACKEND_URL } from './localhostURL'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
  return axios.post(`${BACKEND_URL}/graphql?`, {
    query,
  })
}

export const getAdsQuery = () => {
  return `{
          ads{title, createdAt, id, username,comments{body, id, username}, photos{url, info, isPrimary}, user{username, photos{url}}}
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
  role: string
) => {
  return `mutation{register(registerInput:{username:"${username}", password:"${password}", confirmPassword:"${confirmPassword}",email:"${email}", role:"${role}"}){id,createdAt,email,username,token}}`
}

export const loginMutation = (username: string, password: string) => {
  return `mutation{login(username:"${username}", password:"${password}"){id,createdAt,email,username,token}}`
}
