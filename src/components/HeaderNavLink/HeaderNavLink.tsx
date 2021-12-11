import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import language from '../../assets/languages.svg'
import transactions from '../../assets/transactions.svg'
import account from '../../assets/account.svg'
import signin from '../../assets/signin.svg'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import MyAccountDropdown from '../MyAccountDropdown/MyAccountDropdown'

export const loggedIn = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: '#transactions',
    imgSrc: transactions,
    alt: 'Transactions',
    text: 'Transactions',
  },
  {
    path: 'profile',
    imgSrc: account,
    alt: 'Accounts',
    text: 'My Account',
  },
]

export const login = [
  { path: 'language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: 'login',
    imgSrc: signin,
    alt: 'Log in',
    text: 'Log in',
  },
  {
    path: 'sign-up',
    imgSrc: account,
    alt: 'Sign up',
    text: 'Sign up',
  },
]
export interface ItemType {
  path?: string
  imgSrc?: string
  alt: string
  text: string
}

export interface LinkTypes {
  item: Array<ItemType>
}

// export const Dropdown = loggedIn.forEach(function (arrayItem) {
//   let x = arrayItem.path;
//   if(x === "profile") {
//     return (
//       <div>
//         <p>This is my account</p>
//         <MyAccountDropdown />
//       </div>
//     )
//   } else {
//     <p>This is NOT my account</p>
//   }
// });

const profileName = loggedIn.map(item =>(
    <p>{item.text}</p>
))

console.log(profileName);



export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => (
  
  <Item>
    <Link to={`/${path === "My Account"
        ? 
        <Dropdown>
          <Dropbtn>{profileName}</Dropbtn>
          <Dropdowncontent>
            <a href="#">a</a>
            <a href="#">b</a>
            <a href="#">c</a>
          </Dropdowncontent>
        </Dropdown> 
        : 
        <p>{text}</p>}
        `} 
        data-testid={text}>
      <img src={imgSrc} alt={alt} />
      <span>{text}</span>
    </Link>
  </Item>
)

const Item = styled.li`
  a {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    display: flex;
    border: none;
    background-color: transparent;
    align-items: center;
    }
    span {
      margin-inline-start: 10px;

      ${mediaQueries(null, 'xl')`
        display: none;
      `}
    }
  }
`

const Dropbtn = styled.div `
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  :hover {
    background-color: #3e8e41;
  }
`;

const Dropdown = styled.div ` 
  position: relative;
  display: inline-block;
  :hover {
    display: block;
    background-color: #3e8e41;
  }
`

const Dropdowncontent = styled.div `
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
  :hover {
    display: block;
  }
`