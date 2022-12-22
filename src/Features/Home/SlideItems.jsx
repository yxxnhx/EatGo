import styled from '@emotion/styled';

const SlideItem = styled.div`
  width: 280px;
  /* max-width: 100%; */
  height: auto;

  @media only screen and (max-width: 1440px) {
    width: 200px;
    height: 300px;
  }

  @media only screen and (max-width: 1024px) {
    width: 150px;
    height: 270px;
  }
`;

const SlideImg = styled.div`
  width: 280px;
  height: 350px;
  background: ${(props) => `url('../../img/slide/${props.src}.png')`};
  background-size: cover;
  transition: transform 1.5s ease-in;
  transform: ${(props) => `translateY(-${props.count * 120}px)`};
  overflow: hidden;
 
  &:hover {
    transform: scale(1.2);
    transition: all ease .5s;
  }

  @media only screen and (max-width: 1440px) {
    width: 200px;
    height: 300px;
  }

  @media only screen and (max-width: 1024px) {
    width: 150px;
    height: 270px;
  }
`;

export default function SlideItems({ list }) {
  return (
    <>
      {
        list.map((item) => (
          <SlideItem key={item.id}>
            <SlideImg src={item.src} />
          </SlideItem>
        ))
      }
    </>
  );
}
