
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { adsSelector } from '../../redux/slices/adsSlice'



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

const UserWidget: React.FC<OffersListProps> = () => {
  const offers = useSelector(adsSelector)

  const filterOffers = () => {
   return offers.filter( name => name.username === 'Adolfia')
  }
  const userSeller = filterOffers()
  const getTheUserName = userSeller.map(name => {
  return name?.user?.username
  })


  return (
        <ProfileLink>
             <li>   
               <img src={''}/>
               <p>{getTheUserName[0]}</p>
               <p><b>Offers : </b>{ userSeller.length}</p>
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
	visibility: hidden;
  opacity: 0;
  min-width: 5rem;
   position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
	left: 0;
  display: none;
  width: 182px;
  height: 253px;

  li {
    clear: both;
    width: 100%;
  }
  a {
    text-decoration: underline;
    color: #979797;
    display:block
  }
  }
`







