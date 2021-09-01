import { useEffect } from 'react'
import {
  OffersList,
  OffersListProps,
} from '../components/OffersList/OffersList'
import { adsSelector, fetchAds } from '../redux/slices/adsSlice'
import {
  categoriesSelector,
  fetchCategories,
} from '../redux/slices/categoriesSlice'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { IntroContent } from '../components/IntroContent/IntroContent'
import { Categories } from '../components/Categories/Categories'
import { styled } from '@storybook/theming'
import { mediaQueries } from '../mediaQueries/mediaQueries'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const offers = useSelector(adsSelector)
  const categories = useSelector(categoriesSelector)

  // Add disptach to useEffect
  useEffect(() => {
    dispatch(fetchAds([]))
    dispatch(fetchCategories([]))
  }, [dispatch])

  const ListOfOffers = function (props: OffersListProps): JSX.Element {
    return <OffersList {...props} />
  }

  return (
    <HomeContainer>
      <IntroContent />
      <Categories
        categories={categories}
        primary={true}
        selectCategory={() => alert('Selected category')}
      />
      <hr />
      <ListOfOffers offers={offers} />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  max-width: 1125px;
  margin: auto;
  padding: 16px;

  hr {
    display: none;
    margin-bottom: 39px;
  }

  ${mediaQueries('lmd', null)`
    hr {
      display: block;
    }
  `}
`
