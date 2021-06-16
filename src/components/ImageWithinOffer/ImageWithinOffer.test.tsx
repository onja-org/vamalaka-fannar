import React from 'react';
import {render, screen} from '@testing-library/react';
import {ImageWithinOffer} from './ImageWithinOffer';
import Image from '../../stories/assets/offer.svg';

test('Image test', () => {
    render(<ImageWithinOffer src={Image} alt="First offer image" />);
    const image = screen.getByAltText('First offer image');
})