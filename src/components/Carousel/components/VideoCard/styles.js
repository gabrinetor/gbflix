import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 300px;
  width: 305px;
  height: 198px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 26px;
  transition: opacity .3s;
  &:hover {
    transform: scale(1.1); 
  }
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 15px;
  }
`;