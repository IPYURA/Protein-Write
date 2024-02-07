import React from "react";
import "../App.css";
import MainItem from "./MainItem";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Main = () => {
  const { mainData } = useSelector((state) => state);
  return (
    <Wrap>
      {mainData.map((item, index) => (
        <MainItem key={index} item={item} />
      ))}
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  overflow-y: auto;
  width: 690px;
  height: 572px;
  border-radius: 16px;
  padding: 25px;
  background: #fff;
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 304px;
    padding: 14px;
  }
`;
