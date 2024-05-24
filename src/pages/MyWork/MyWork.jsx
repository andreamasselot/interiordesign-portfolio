import frame from "../../images/empty-frame.jpg";
import { Title } from "../../components/Title/Title";
import { SContainer, SDescription, SProject, SProjectImage, SProjectImageContainer, STitleWrapper } from "./styled";

export const MyWork = () => {
  return (
    <SContainer>
      <SProject>
        <STitleWrapper>
          <Title/>
            <SDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Fusce dictum gravida leo, quis commodo mauris hendreri ...
            </SDescription>
        </STitleWrapper>
            <SProjectImageContainer>
              <SProjectImage src={frame} alt="empty frame" />
            </SProjectImageContainer>
      </SProject>
    </SContainer>
  )
};