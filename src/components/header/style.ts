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
      color: #35a29f;
    }
  }
`;

const Span = styled.div`
  color: #fff;
  font-size: 35px;
`;

const ContentListBar = styled.div`
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 0;
  width: 200px;
  background-color: #006;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 30px 0;
    color: #fff;
    font-size: 18px;
  }

  li.active {
    font-weight: bold;
    color: #35a29f;
  }
  
`;

export { Header, ContentImg, ContentList, Span, ContentListBar };
