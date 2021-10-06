import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RoundedCornerImage } from '../components/RoundedCornerImage/RoundedCornerImage'
import { useAppDispatch } from '../redux/hooks'
import { fetchUserName, userNameSelector } from '../redux/slices/userNameSlice'
export const ViewProfile = () => {
  const dispatch = useAppDispatch()
  const username = useSelector(userNameSelector)
  console.log(username.username)

  useEffect(() => {
    dispatch(fetchUserName(username))
  }, [])
  // const name = username.map((name) => name.username)
  return (
    <div>
      <p>user profile page{username.username}</p>
      <RoundedCornerImage
        alt=''
        imageSource=''
        onClick={() => alert('user photo')}></RoundedCornerImage>
    </div>
  )
}
