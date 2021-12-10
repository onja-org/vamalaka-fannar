
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Offer } from '../Offer/Offer'
import { Paths } from '../../paths'
import addSVG from "./icons/plus-circle.svg"

interface User {
  firstName: string
  lastName: string
}

export interface Photo {
  url: string
  info: string
  isPrimary: boolean
}
interface OfferData {
  id: string
  title: string
  body: string
  username: User
  photos: Photo[]
}

export interface OffersListProps {
  offers: OfferData[]
  username: string
  id: string
}

const UserWidget: React.FC<OffersListProps> = ({ offers, username, id }) => {
  return (
        <ProfileLink>
          <li>
            <Link to={`${Paths.PROFILE}/:${username}`}>Preview</Link>
          </li>
          <li>
            <Link to={`${Paths.PROFILE}/:${id}`}>Edit</Link>
          </li>
        </ProfileLink>
  )
}

export default UserWidget


const ProfileLink = styled.ul`
  padding: 0;
  list-style: none;
  display: inline;
  margin: 0;
  padding: 0;
  background: orange;
	visibility: hidden;
  opacity: 0;
  min-width: 5rem;
   position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
	left: 0;
  display: none;

  li {
    clear: both;
    width: 100%;
  }
  li:hover {background: #555}
  a {
    text-decoration: underline;
    color: #979797;
    display:block
  }
  }
`



const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`


//   ul li:hover {background: #555;}
//   ul li:hover ul {display: block;}
//   ul li ul {
//     position: absolute;
//     width: 200px;
//     display: none;
//   }
//   ul li ul li { 
//     background: #555; 
//     display: block; 
//   }
//   ul li ul li a {display:block;} 
//   ul li ul li:hover {background: #666;}