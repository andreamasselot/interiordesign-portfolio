import styled from "styled-components";
import woman from "../../images/woman.jpg";
import coffee from "../../images/coffee.jpg";

export const SContainer = styled.div`
  max-width: 1000px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 20px;
  margin-top: 75px;
`;
export const STitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const STitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;
export const SSecondaryTitle = styled.div`
  font-size: 24px;
  font-weight: regular;
  color: #c7b7a3;
`;
export const SWomanContainer = styled.div`
  width: 600px;
  height: 700px;
`;
export const SWomanImage = styled.div`
  width: 100%;
  background-image: url(${woman});
`;
export const SSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const SCircle = styled.div`
  border-radius: 100%;
  border: 1px black solid;
  width: 300px;
  height: 300px;
  background-image: url(${coffee});
  background-position: center;
`;
