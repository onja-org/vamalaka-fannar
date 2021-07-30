import axios from 'axios'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
  return axios.post('http://localhost:4000/graphql?', {
    query,
  })
}

export const getAdsQuery = () => {
  return `{
          ads{title, createdAt, id, username,comments{body, id, username}, photos{url, info, isPrimary}}
      }`
}
