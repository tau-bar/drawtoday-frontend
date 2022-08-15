import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/post/Post";
import { getPosts } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./BrowsePage.scss";

const BrowsePage = ({ ...other }) => {
	const dispatch = useDispatch();
	const {
		words: { wordOfTheDay },
		posts: { posts },
		user: { userId },
	} = useSelector((state: RootState) => state);

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		dispatch(getPosts(20, offset, userId));
	}, [userId]);

	return (
		<div className="BrowsePage">
			{posts.length === 0 && (
				<p>
					There are no drawings for <strong>{wordOfTheDay}</strong>{" "}
					yet. Get drawing!
				</p>
			)}
			{posts.map((post, i) => (
				<PostCard post={post} key={`browse-page-post-${i}`} />
			))}
			{posts.length > 0 && (
				<Button
					onClick={() => dispatch(getPosts(20, offset, userId))}
					variant="contained"
				>
					Load More
				</Button>
			)}
		</div>
	);
};

export default BrowsePage;
