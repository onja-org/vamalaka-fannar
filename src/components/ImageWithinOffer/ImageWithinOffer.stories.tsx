import React from 'react';

import {Story, Meta} from '@storybook/react';

import {ImageWithinOffer, ImageProps} from './ImageWithinOffer';
import FirstOffer from '../../stories/assets/offer.svg';
import SecondOffer from '../../stories/assets/offer2.svg';

export default {
    title: "Offer/ImageWithinOffer",
    component: ImageWithinOffer,
    argTypes: {
		backgroundColor: { control: 'color' }
	}
} as Meta;

const firstImage = {
    src: FirstOffer,
    alt: "First image for offer"
}

const secondImage = {
    src: SecondOffer,
    alt: "Second image for offer"
}

const Template: Story<ImageProps>  = (args) => <ImageWithinOffer {...args} />

export const FirstImage = Template.bind({});
FirstImage.args = {
    src: firstImage.src,
    alt: firstImage.alt
}

export const SecondImage = Template.bind({});
SecondImage.args = {
    src: secondImage.src,
    alt: secondImage.alt,
}