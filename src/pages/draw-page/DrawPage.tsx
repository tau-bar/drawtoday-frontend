import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Canvas from "../../components/canvas/Canvas";
import WordCard from "../../components/card/WordCard";
import { getWordOfDay } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./DrawPage.scss";

function DrawPage({ ...other }) {
	const dispatch = useDispatch();
	const {
		words: { wordOfTheDay },
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		dispatch(getWordOfDay());
	}, []);

	return (
		<div className="DrawPage">
			<WordCard>{wordOfTheDay}</WordCard>
			<Canvas />
		</div>
	);
}

export default DrawPage;
