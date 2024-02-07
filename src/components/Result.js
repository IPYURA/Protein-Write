import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { calculateBarWidth } from "../theme";

let realWidth = 0;

const Result = () => {
  const [goalText, setGoalText] = useState();
  const dispatch = useDispatch();

  const { sumNutrition, goal } = useSelector((state) => state);
  const onChangeGoal = (e) => {
    setGoalText(e.target.value);
  };

  const writeGoal = () => {
    setGoalText(goalText);
    dispatch({ type: "SET_GOAL", payload: { goalText } });
  };
  if (goalText !== undefined && goal !== undefined) {
    realWidth = calculateBarWidth(goalText, sumNutrition);
  }

  return (
    <ResultWrap>
      <GoalSet>
        <Goal>단백질 섭취 목표: {goalText} g</Goal>
        <div>
          <GoalSetInput
            value={goalText || ""}
            type="number"
            placeholder="숫자만 입력"
            onChange={onChangeGoal}
          />
          <GoalSetButton onClick={writeGoal}>저장</GoalSetButton>
        </div>
      </GoalSet>

      <TodaysNutrition>오늘 먹은 단백질: {sumNutrition} g</TodaysNutrition>

      <FinalResult>
        <ToGoal>
          목표까지{" "}
          {goalText !== undefined
            ? goal - sumNutrition > 0
              ? goal - sumNutrition
              : null
            : null}
          g
        </ToGoal>
        <BarWrap>
          <Bar $realwidth={realWidth}></Bar>
          <Percentage>{realWidth.toFixed(2) + "%"}</Percentage>
        </BarWrap>
      </FinalResult>
    </ResultWrap>
  );
};

export default Result;

const ResultWrap = styled.div`
  width: 500px;
  height: 196px;
  background: #fff;
  border-radius: 16px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.shadow};

  @media screen and (max-width: 1280px) {
    width: 159px;
    height: 429px;
    margin-left: 31px;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 200px;
    margin-left: 0;
    position: fixed;
    padding: 15px 40px;
    bottom: 0;
    left: 0;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.2);
  }
`;
const Goal = styled.span`
  @media screen and (max-width: 1280px) {
    word-break: keep-all;
    font-size: 16px;
    margin-top: 30px;
  }
`;
const GoalSet = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 10px;
    div {
      margin-top: 20px;
      display: flex;
    }
  }
  @media screen and (max-width: 769px) {
    flex-direction: row;
  }
`;
const GoalSetInput = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid ${(props) => props.theme.softTextColor};
  border-radius: 8px;
  padding-left: 5px;
  margin-right: 5px;
`;
const GoalSetButton = styled.button`
  width: 52px;
  height: 25px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  background: ${(props) => props.theme.deleteButtonColor};
  box-shadow: ${(props) => props.theme.shadow};
`;
const TodaysNutrition = styled.div`
  font-size: 18px;
  @media screen and (max-width: 1280px) {
    font-size: 16px;
    margin-top: -80px;
  }
`;
const FinalResult = styled.div`
  position: relative;
  display: flex;
`;
const ToGoal = styled.span`
  font-size: 18px;
  @media screen and (max-width: 1280px) {
    font-size: 16px;
    margin-top: -80px;
  }
`;
const BarWrap = styled.div`
  width: 257px;
  height: 25px;
  position: relative;
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.subColor};
  border-radius: 8px;
  padding: 2px;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;
const Bar = styled.div`
  height: 100%;
  border-radius: 6px;
  background: ${(props) => props.theme.plusButtonColor};
  transition: 0.7s;
  width: ${(props) => props.$realwidth}%;
`;
const Percentage = styled.span`
  position: absolute;
  right: 10px;
  top: -15px;
`;
