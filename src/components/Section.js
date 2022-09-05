import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = (props) => {
    const { 
        title, description, backgroundImg, 
        leftBtnText, rightBtnText 
    } = props;
    
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItmeText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItmeText>
        </Fade>
        
        <ButtonContainer>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {
                        rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>

                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
        </ButtonContainer>

    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    // width: 100vw;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItmeText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const ButtonGroup = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    margin: 5px;
    text-align: center;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    // margin-top: 10px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

