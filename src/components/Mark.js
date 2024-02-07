import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import MarkItem from "./MarkItem";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import plusIcon from "../assets/plus.png";

const Mark = () => {
  const [itemName, setItemName] = useState("");
  const [itemNutri, setItemNutri] = useState();
  const markData = useSelector((state) => state.markData);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedMarkData = JSON.parse(localStorage.getItem("MARK"));

    if (storedMarkData) {
      dispatch({ type: "LOAD_MARK", payload: { storedMarkData } });
    }
  }, [dispatch]);

  const addMarkItem = () => {
    dispatch({
      type: "ADD_MARK",
      payload: { itemName, itemNutri },
    });
    setItemName("");
    setItemNutri("");
  };
  const onChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const onChangeItemNutri = (e) => {
    setItemNutri(e.target.value);
  };

  return (
    <Wrap>
      <MarkTitle>자주 먹는 음식 등록(최대 5개)</MarkTitle>
      <AddMark>
        <AddMarkName
          value={itemName || ""}
          onChange={onChangeItemName}
          type="text"
          placeholder="항목을 입력하세요"
        />
        <AddMarkNutri
          value={itemNutri || ""}
          onChange={onChangeItemNutri}
          type="number"
          placeholder="영양성분(숫자만) g"
        />
        <Button onClick={addMarkItem}>
          <span></span>
        </Button>
      </AddMark>
      <Line></Line>
      <MarkItemWrap>
        {markData.map((item, index) => (
          <MarkItem key={index} item={item} />
        ))}
      </MarkItemWrap>
    </Wrap>
  );
};

export default React.memo(Mark);

const Wrap = styled.div`
  width: 500px;
  height: 429px;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 769px) {
    width: inherit;
    height: auto;
    margin-bottom: 200px;
    padding-bottom: 30px;
  }
`;
const MarkTitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 340px) {
    font-size: 16px;
  }
`;
const AddMark = styled.div`
  width: 460px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: calc(100% - 64px) 44px;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 14px;
  }
`;
const AddStyle = styled.input`
  height: 100%;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  background: ${(props) => props.theme.subColor};
  box-shadow: ${(props) => props.theme.shadow};
`;
const AddMarkName = styled(AddStyle)`
  width: 268px;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 44px;
    grid-column: 1 / 3;
  }
`;
const AddMarkNutri = styled(AddStyle)`
  width: 130px;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 44px;
  }
`;
const Button = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.plusButtonColor};
  box-shadow: ${(props) => props.theme.shadow};
  span {
    width: 18px;
    height: 18px;
    display: block;
    background: url(${plusIcon}) no-repeat center center / cover;
  }
  @media screen and (max-width: 769px) {
    width: 44px;
    height: 44px;
  }
`;
const Line = styled.div`
  width: 460px;
  height: 1px;
  background: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;
const MarkItemWrap = styled.div`
  width: 100%;
  height: 258px;
  display: flex;
  flex-direction: column;
`;
