import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const slideInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  padding-top: 100px;
  background-color: #f8f9fa;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Introduction = styled.div`
  text-align: center;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 1.5s ease-in-out;
  margin-bottom: 30px;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #001e56;
  font-weight: 800;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.5;
  color: #001e56;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #001e56;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  position: relative;
  margin-top: 20px;
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  padding-left: 20px;
  animation: ${slideInLeft} 1s ease forwards;
  border-left: 3px solid #01cfb5;

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 15px;
    height: 15px;
    background-color: #01cfb5;
    border-radius: 50%;
  }
`;

export const JobTitle = styled.h3`
  font-size: 1.3rem;
  color: #001e56;
  margin: 0;
`;

export const JobDescription = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin: 5px 0 0 0;
  line-height: 1.5;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 800px;
  margin-top: 30px;
`;

export const SkillItem = styled.div`
  background-color: #ffffff;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #ffffff;
  background-color: #001e56;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #004085;
    transform: scale(1.05);
  }
`;

export const skills = [
  'Python', 'Django', 'JavaScript', 'Angular', 'React', 
  'Node.js', 'Docker', 'Material UI', 'Git - Github', 
  'Redux', 'Testes Unitários'
];