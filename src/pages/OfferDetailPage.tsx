import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import OfferDetail from '../components/OfferDetails/OfferDetails'
import { useSelector } from 'react-redux';
import { BACKEND_URL } from '../localhostURL';
import { offerDetailsSelector, fetchOfferDetails } from '../redux/slices/offerDetailsSlice';
import { useAppDispatch } from '../redux/hooks';
import { adsSelector } from '../redux/slices/adsSlice';

type Params = {
    offerId: string
}

export const OfferDetailPage = () => {
    const dispatch = useAppDispatch()
    const offer = useSelector(offerDetailsSelector)    
    const offers = useSelector(adsSelector)
    const { offerId } = useParams<Params>()
    const userOffer = offers.find(off => off.id === offerId)
    const imgSrc = `${BACKEND_URL}/uploads/${userOffer?.photos?.[0]?.url}?width=322&height=225&message=${userOffer?.username}`
    
    useEffect(() => {
        dispatch(fetchOfferDetails({offerId}))
    }, [dispatch, offerId])
    
    return (
        <OfferDetail
            offerName={offer?.title}
            offerId={offer?.id}
            amount={25}
            imageSrc={imgSrc}
            amountOfProduct={27}
            location={{ city: 'Mahanoro', country: 'Madagascar' }}
            currency={''}
            username={offer?.user?.username}
            imageDescription={offer?.title}
            offerDescription={offer?.body}
            name={userOffer}
            profile={userOffer.user.photos[0]?.url}
            ratingDescription={''}
            stars={0}
            unit={''}
        />
    )
}
