import React from "react";
import Canvas from "../../components/canvas/Canvas";
import WordCard from "../../components/card/WordCard";
import "./DrawPage.scss";

const DrawPage = ({ ...other }) => {
  return (
    <div className="DrawPage">
      <WordCard>Word</WordCard>
      <Canvas />
    </div>
  );
};

export default DrawPage;
