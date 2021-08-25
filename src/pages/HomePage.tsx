import { useEffect } from 'react'
import {
  OffersList,
  OffersListProps,
} from '../components/OffersList/OffersList'
import { adsSelector, fetchAds } from '../redux/slices/adsSlice'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { IntroContent } from '../components/IntroContent/IntroContent'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const offers = useSelector(adsSelector)

  useEffect(() => {
    dispatch(fetchAds([]))
  }, [dispatch])

  const ListOfOffers = function (props: OffersListProps): JSX.Element {
    return <OffersList {...props} />
  }
  return (
    <>
      <IntroContent />
      <ListOfOffers offers={offers} />
    </>
  )
}
