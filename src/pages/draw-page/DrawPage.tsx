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
		user: { userId },
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		if (userId !== 0) {
			dispatch(getWordOfDay(userId));
		}
	}, [userId]);

	return (
		<div className="DrawPage">
			<WordCard>{wordOfTheDay}</WordCard>
			<Canvas />
		</div>
	);
}

export default DrawPage;
