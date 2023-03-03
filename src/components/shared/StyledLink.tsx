import styled from '@emotion/styled';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  color: ${(props) => (props.color ? props.color : '#7b00ff')};
  border: 1px solid ${(props) => (props.color ? props.color : '#7b00ff')};
  transition: all 125ms ease-in;
  font-size: 10px;
  &:hover {
    transition: 125ms all ease-in;
    color: ${(props) => (props.color ? '#7b00ff' : props.color)};
    background-color: ${(props) => (props.color ? props.color : '#7b00ff')};
    border: 1px solid ${(props) => (props.color ? props.color : '#7b00ff')};
  }
`;
