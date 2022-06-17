import styled from "styled-components";

export const StyledLink = styled.div`
  a {
    text-decoration: none;
    border: 1px;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    background-color: green;
    color: black;
  }
`;

export const HomeLink = styled(StyledLink)`
  a {
    position: relative;
    right: 40vw;
    background-color: bisque;
  }
`;

export const StyledDetails = styled.details`
  summary {
    background-image: url(http://drawcentral.com/wp-content/uploads/2016/04/wood-grain-3.jpg);
    background-size: cover;
    padding: 4px;
    border: none;
    box-shadow: 1px 1px 2px grey;
    color: white;
    cursor: pointer;
  }
  p {
    font-size: 12pt;
    background-color: lightgrey;
    padding: 4px;
    margin: 0;
    box-shadow: 1px 1px 2px grey;
  }
`;
