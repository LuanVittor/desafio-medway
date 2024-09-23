import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Dot = styled.div<{ delay: string }>`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: #01cfb5; 
  border-radius: 50%;
  animation: ${bounce} 0.6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
`;

const LoadingText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #001e56;
  margin-left: 10px;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
      <LoadingText>Carregando...</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
