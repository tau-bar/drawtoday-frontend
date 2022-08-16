import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/post/Post";
import { NUM_POSTS_PER_REQUEST } from "../../config/constants";
import { getPosts } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./BrowsePage.scss";

const BrowsePage = ({ ...other }) => {
	const dispatch = useDispatch();
	const {
		posts: { posts },
		user: { userId },
	} = useSelector((state: RootState) => state);

	const [offset, setOffset] = useState(posts.length);

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(getPosts(NUM_POSTS_PER_REQUEST, offset, userId));
			setOffset(offset + NUM_POSTS_PER_REQUEST);
		}
	}, []);

	return (
		<div className="BrowsePage">
			<div className="Posts">
				{posts.map((post, i) => (
					<PostCard post={post} key={`browse-page-post-${i}`} />
				))}
			</div>
			{posts.length > 0 && posts.length === offset && (
				<Button
					onClick={() => {
						dispatch(
							getPosts(NUM_POSTS_PER_REQUEST, offset, userId)
						);
						setOffset(offset + NUM_POSTS_PER_REQUEST);
					}}
					variant="contained"
				>
					Load More
				</Button>
			)}
		</div>
	);
};

export default BrowsePage;
