import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Data from '../data.json'
import SlideItem from './SlideItem';

function Hero() {
    const slideListLength = Data.length;
    const slideWidth = 1060;
    const slidePadding = 12;
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isAnimated, setIsAnimated] = useState(true);
    const [timer, setTimer] = useState(undefined);

    const slideListArr = Data.map((item,idx) => <SlideItem data={item} key={idx} idx={idx} />);
    const clonedSlideListArrFront = Data.map((item,idx) => <SlideItem data={item} key={-idx-1} className="clone" idx={-idx-1} />);
    const clonedSlideListArrBack = Data.map((item,idx) => <SlideItem data={item} key={slideListLength+idx} className="clone" idx={slideListLength+idx} />);
    const totalSlideListArr = clonedSlideListArrFront.concat(slideListArr).concat(clonedSlideListArrBack);


    const moveSlide = (idx) => {
        setCurrentIdx(idx);
        
        if (currentIdx === slideListLength-1|| idx === -slideListLength ) {
            setTimeout(() => {
                setIsAnimated(false);
                setCurrentIdx(0);
            },300);
            setTimeout(() => {
                setIsAnimated(true);
            },400);
        }
        console.log('move!', currentIdx, idx);
    }

    useEffect(() => {
        
    }, [])

    console.log('render');

    return (
        <Container>
            <SlideWrap>
                <SlideBox>
                    <SlideList className={isAnimated ? "animated" : ""} id="slideList" currentIdx={currentIdx} width={slideWidth} padding={slidePadding} length={slideListLength}>
                        {
                            totalSlideListArr
                        }
                    </SlideList>
                </SlideBox>
                <SlideBtn id="leftBtn" onClick={()=>moveSlide(currentIdx-1)}>
                    <span className="iconBox"><svg className="icon" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg></span>
                </SlideBtn>
                <SlideBtn id="rightBtn" onClick={()=>moveSlide(currentIdx+1)}>
                    <span className="iconBox"><svg className="icon" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></span>
                </SlideBtn>
            </SlideWrap>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
   
`;
const SlideWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

`;

const SlideBox = styled.div`
    width: 100%;
    height: 300px;
    padding : 0 50px;
    overflow: hidden;
    position: relative;

`;
const SlideList = styled.ul`
    position: absolute;
    width : ${({length, padding, width}) => (length*3*(padding*2+width))+'px'};
    transform : translateX(-9628px);
    left: ${({currentIdx, padding, width}) => (-currentIdx*(padding*2+width))+'px'};
    
    &.animated {
        transition: all 0.3s ease-out;
    }
`;

const SlideBtn = styled.button`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 120px;
    width: 30px;
    height: 60px;
    opacity: .5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;

    &#leftBtn {
        left: calc((100% - 1210px) / 2);
    }

    &#rightBtn {
        right: calc((100% - 1200px) / 2);
    }

    .iconBox {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .icon {
            user-select: none;
            width: 1em;
            height: 1em;
            display: inline-block;
            fill: currentColor;
            flex-shrink: 0;
            font-size: inherit;
        }
    }

`;