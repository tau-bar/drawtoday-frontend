import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/post/Post";
import { getPosts } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./BrowsePage.scss";

const BrowsePage = ({ ...other }) => {
	const dispatch = useDispatch();
	const {
		posts: { posts },
	} = useSelector((state: RootState) => state);

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		dispatch(getPosts(20, offset));
	}, []);

	return (
		<div className="BrowsePage">
			{posts.map((post, i) => (
				<Post post={post.drawing} key={`browse-page-post-${i}`} />
			))}
			<Button
				onClick={() => dispatch(getPosts(20, offset))}
				variant="contained"
			>
				Load More
			</Button>
		</div>
	);
};

export default BrowsePage;
