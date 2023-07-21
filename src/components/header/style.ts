import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #006;
  padding: 0 1em;
`;

const ContentImg = styled.div`
  img {
    width: 180px;
    height: 90px;
  }
`;

const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin: 0 1em;
    cursor: pointer;
    text-transform: uppercase;

    &.active {
      color: #35A29F;
    }
  }
`;

export { Header, ContentImg, ContentList };
