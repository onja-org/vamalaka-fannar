import { useEffect } from 'react'
import { OffersList } from '../components/OffersList/OffersList'
import {
  adsSelector,
  fetchAds,
  adsStatusSelector,
} from '../redux/slices/adsSlice'
import {
  categoriesSelector,
  fetchCategories,
} from '../redux/slices/categoriesSlice'
import { IntroContent } from '../components/IntroContent/IntroContent'
import { Categories } from '../components/Categories/Categories'
import { mediaQueries } from '../mediaQueries/mediaQueries'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { styled } from '@storybook/theming'
import { IconSize, Loading } from '../components/Loading/Loading'
import { FETCH_STATUS } from '../constants'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const offers = useSelector(adsSelector)
  const offerStatus = useSelector(adsStatusSelector)
  const categories = useSelector(categoriesSelector)

  useEffect(() => {
    dispatch(fetchAds([]))
    dispatch(fetchCategories([]))
  }, [dispatch])

  return (
    <HomeContainer>
      <IntroContent />
      <Categories
        categories={categories}
        primary={true}
        selectCategory={() => alert('Selected category')}
      />
      <hr />
      {offerStatus === FETCH_STATUS.LOADING ? (
        <LoadingContainer>
          <Loading size={IconSize.xl} />
        </LoadingContainer>
      ) : (
        <OffersList offers={offers} />
      )}
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

const LoadingContainer = styled.div`
  text-align: center;
`
