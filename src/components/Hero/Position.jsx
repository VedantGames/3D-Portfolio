import React from 'react';
import styled, { keyframes } from 'styled-components';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const col1 = '#fea';
const col2 = '#aef';

const typeScale = {
  bigDisplay: "5.61rem",
  display: "4.209rem",
  headline: "3.157rem",
  title: "2.369rem",
  subtitle: "1.777rem",
  text: "1.333rem",
  paragraph: "1rem",
  helperText: "0.75rem",
  copyrightText: "0.563rem",
};

const PageHeaderStyled = styled.h2`
  grid-column: 2 / 13;
  font-size: ${typeScale.headline};
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding-block: 1.25rem;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;

  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-left: 1rem;
  }
`;

const textRotate1 = keyframes`
0%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
40%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
60%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
`;

const textRotate2 = keyframes`
0%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
40%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
60%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
100%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
`;

const PositionT = styled(PageHeaderStyled)`
  background: unset;
  line-height: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  margin-block: 0;
  margin-inline: 0;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${col1};
  text-shadow: 0 0 10px;
  cursor: default;
  .text {
    span {
      display: inline-block;
      will-change: transform;
      transform-style: preserve-3d;
      transform-origin: bottom;
      animation: ${textRotate1} 2.4s infinite alternate;
    }
    &.second {
      color: ${col2};
      position: absolute;
      top: 2%;
      left: 0;
      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate2} 2.4s infinite alternate;
      }
    }
  }
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.title};
  }
  @media screen and (max-width: 480px) {
    font-size: ${typeScale.subtitle};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text.second {
      left: auto;
    }
  }
`;

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <PositionT>
          <div className="text first" aria-label="Full Stack Developer">
            {produceSpans("Full Stack Developer")}
          </div>
          <div className="text second" aria-label="Game Developer">
            {produceSpans("Game Developer")}
          </div>
        </PositionT>
    </div>
  );
};

export default Position;