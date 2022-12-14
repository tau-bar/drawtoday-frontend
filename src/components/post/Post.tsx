import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Card, Fade, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useDispatch, useSelector } from "react-redux";
import { changePostLike } from "../../redux-saga/actions";
import { Post } from "../../redux-saga/interfaces/data.interfaces";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./Post.scss";

interface PostProps {
	post: Post;
}

const PostCard: FC<PostProps> = ({ post, ...other }) => {
	const [ref, setRef] = useState<CanvasDraw | null>();
	const [liked, setLiked] = useState<boolean>(false);
	const [numLikes, setNumLikes] = useState<number>(-1);
	const [loading, setLoading] = useState<boolean>(true);

	const dispatch = useDispatch();
	const {
		theme: { mode },
		user: { token, userId },
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		setTimeout(() => setLoading(false), 200);
	});

	useEffect(() => {
		if (ref) {
			ref.loadSaveData(post.drawing);
		}

		if (post) {
			setLiked(post.liked === 1);
			setNumLikes(post.likes);
		}
	}, [ref, post, userId]);

	if (loading || post === undefined || post.likes === -1) {
		return (
			<Skeleton
				className="Post"
				variant="rectangular"
				width={300}
				height={400}
				animation="wave"
			></Skeleton>
		);
	}
	return (
		<Fade in={!loading}>
			<Card className="Post">
				<Container className="PostWord">
					<p>{post.word}</p>
				</Container>
				<CanvasDraw
					style={{ touchAction: "auto" }}
					canvasHeight={300}
					canvasWidth={300}
					disabled
					ref={(canvasDraw) => setRef(canvasDraw)}
					hideGrid
					hideInterface
				/>
				<Container className="PostIcons">
					by: {post.username}
					<div className="FavouriteDiv">
						{numLikes}
						{liked ? (
							<Favorite
								onClick={() => {
									setLiked(false);
									setNumLikes(numLikes - 1);
									dispatch(
										changePostLike(
											false,
											post.drawingId,
											userId,
											token
										)
									);
								}}
								className={`FavouriteIcon ${mode}`}
							/>
						) : (
							<FavoriteBorderOutlined
								onClick={() => {
									setLiked(true);
									setNumLikes(numLikes + 1);
									dispatch(
										changePostLike(
											true,
											post.drawingId,
											userId,
											token
										)
									);
								}}
								className={`FavouriteIcon ${mode}`}
							/>
						)}
					</div>
				</Container>
			</Card>
		</Fade>
	);
};

export default PostCard;
