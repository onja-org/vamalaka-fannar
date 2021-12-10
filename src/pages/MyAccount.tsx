import styled from 'styled-components'
import { useSelector } from 'react-redux'
import MyAccount from '../components/MyAccount/MyAccount'
import { adsSelector } from '../redux/slices/adsSlice'
import { userSelector } from '../redux/slices/userSlice'

export function MyAccountPage() {
  const offers = useSelector(adsSelector)
  const user = useSelector(userSelector)
  
  return (
    <Wrapper>
      <MyAccount offers={offers} username={user.username} id={'123412132'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  max-width: 1167px;
  margin: 0 auto;
`
