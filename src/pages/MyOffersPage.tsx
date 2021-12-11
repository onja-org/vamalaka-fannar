import styled from 'styled-components'
import { useSelector } from 'react-redux'
import MyOffers from '../components/MyOffers/MyOffers'
import { adsSelector } from '../redux/slices/adsSlice'
import { userSelector } from '../redux/slices/userSlice'

export function MyOffersPage() {
  const offers = useSelector(adsSelector)
  const user = useSelector(userSelector)
  
  return (
    <Wrapper>
      <MyOffers offers={offers} username={user.username}  id={'123412132'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  max-width: 1167px;
  margin: 0 auto;
`
