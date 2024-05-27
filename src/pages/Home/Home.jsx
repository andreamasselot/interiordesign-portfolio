import { SCircle, SContainer, SEnterBtn, SSecondaryTitle, SSection, STitle, STitleContainer, SWomanImage } from "./styled";

export const Home = () => {
  return (
    <SContainer>
        <STitleContainer>
            <STitle>ANDREA MASSELOT</STitle>
              <SSecondaryTitle>Interior Design</SSecondaryTitle>
        </STitleContainer>
      <SSection>
      <div>
        <SWomanImage></SWomanImage>
      </div>
        <SCircle to='/concepts'>
            <SEnterBtn>ENTER</SEnterBtn>
        </SCircle>
      </SSection>
    </SContainer>
    
  )
};
