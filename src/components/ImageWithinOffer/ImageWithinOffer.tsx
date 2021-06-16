import React from 'react';
import styled from 'styled-components';

export interface ImageProps {
    src: string,
    alt: string
}

export const ImageWithinOffer: React.FC<ImageProps> = ({src, alt}) => {
    return (
        <Container>
            <img src={src} alt={alt} />
        </Container>
    )
}

const Container = styled.div`
    padding: 0;
    margin: 0;

        img {
            margin: 0;
            padding: 0;

            @media (min-width: 375px) {
                width: 138px;
                height: 219px;
                object-fit: cover;
            }
        }
`;