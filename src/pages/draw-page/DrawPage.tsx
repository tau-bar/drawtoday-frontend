import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Canvas from "../../components/canvas/Canvas";
import WordCard from "../../components/card/WordCard";
import { getDrawing, getWordOfDay } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./DrawPage.scss";

function DrawPage({ ...other }) {
	const dispatch = useDispatch();
	const {
		words: { wordOfTheDay, id },
		user: { userId },
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		if (userId !== 0) {
			dispatch(getWordOfDay(userId));
		}
	}, [userId]);

	useEffect(() => {
		if (id !== 0 && userId !== 0) {
			dispatch(getDrawing(userId, id));
		}
	}, [id, userId]);

	return (
		<div className="DrawPage">
			<WordCard>{wordOfTheDay}</WordCard>
			<Canvas />
		</div>
	);
}

export default DrawPage;
