import { SCircle, SContainer, SSecondaryTitle, SSection, STitle, STitleContainer, SWomanContainer, SWomanImage } from "./styled";

export const Home = () => {
  return (
    <SContainer>
      <STitleContainer>
          <STitle>ANDREA MASSELOT</STitle>
          <SSecondaryTitle>Interior Design</SSecondaryTitle>
      </STitleContainer>
    <SSection>
      <SWomanContainer>
        <SWomanImage></SWomanImage>
      </SWomanContainer>
      <SCircle></SCircle>
    </SSection>
    </SContainer>
    
  )
};
