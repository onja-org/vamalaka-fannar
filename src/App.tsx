import './App.css'
import { useEffect } from 'react'
import { adsSelector, fetchAds } from './redux/slices/adsSlice'
import { useAppDispatch } from './redux/hooks'
import { useSelector } from 'react-redux'
import { OffersList } from './components/OffersList/OffersList'

function App() {
  const dispatch = useAppDispatch()
  const ads = useSelector(adsSelector)

  useEffect(() => {
    dispatch(fetchAds([]))
  }, [dispatch])

  return (
    <div className='App'>
      <OffersList offers={ads} />
    </div>
  )
}

export default App
