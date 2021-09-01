import axios from 'axios'

export const sendQuery = (query: string, variables?: any): Promise<any> => {
  return axios.post('http://localhost:4000/graphql?', {
    query,
  })
}

export const getAdsQuery = () => {
  return `{
          ads{title, createdAt, id, username,comments{body, id, username}, photos{url, info, isPrimary}}
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
