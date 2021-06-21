import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Rating, RatingProps } from './Rating';

export default {
  title: 'Rating',
  component: Rating,
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const RatedOneStar = Template.bind({});
RatedOneStar.args = {
  star: 1,
  alt: 'star'
};

export const RatedTowStars = Template.bind({});
RatedTowStars.args = {
  star: 2,
  alt: 'star'

};

export const RatedThreeStars = Template.bind({});
RatedThreeStars.args = {
  star: 3,
  alt: 'star'
};
export const RatedFourStars = Template.bind({});
RatedFourStars.args = {
  star: 4,
  alt: 'star'
};
export const RatedFiveStars = Template.bind({});
RatedFiveStars.args = {
  star: 5,
  alt: 'star'
};

