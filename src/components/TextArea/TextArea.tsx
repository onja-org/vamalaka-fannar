import styled from 'styled-components'

export interface TextAreaProps {
    onChange?: (e: any) => void
    textDescription: string,
    label: string,
    isTall: boolean
}

export const TextArea:React.FC<TextAreaProps> = ({isTall: bio, label, onChange, textDescription}) => {
    return (
    <Container>
        <Wrapper htmlFor="story"><span>{label}</span>:
        <TextAreaStyled bio={bio} id="story" name="story" value={textDescription} placeholder='add description of the photo' onChange={onChange} required>
            {textDescription}
        </TextAreaStyled>
        </Wrapper>
    </Container>)
}

const Container = styled.div`
    color: #979797;
`

const TextAreaStyled = styled.textarea<{bio: boolean}>`
border: 1px solid #979797;
box-sizing: border-box;
border-radius: 6px;
width: 100%;
margin-top: 15px;
margin-bottom: 20px;
height: ${(props) => props.bio ? '92.93px':'50px'};

::placeholder {
    font-size: 14px;
    line-height: 17px;
    padding-left: 25px;
    padding-top: 10px;
    color: #979797;
}
`

const Wrapper = styled.label``