import React, { useEffect } from 'react'
import { OffersList } from '../components/OffersList/OffersList'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { fetchAds, adsSelector } from '../redux/slices/adsSlice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const ads = useSelector(adsSelector)

  useEffect(() => {
    dispatch(fetchAds([]))
  }, [dispatch])

  return (
    <div>
      <OffersList offers={ads} />
    </div>
  )
}
