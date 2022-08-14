import { Favorite } from "@mui/icons-material";
import { Card, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import "./Post.scss";

interface PostProps {
	post: string;
}

const Post: FC<PostProps> = ({ post, ...other }) => {
	const [ref, setRef] = useState<CanvasDraw | null>();

	useEffect(() => {
		if (ref) {
			ref.loadSaveData(post);
		}
	}, [ref, post]);
	return (
		<Card className="Post">
			<Container className="PostUsername">
				<p>username</p>
			</Container>
			<CanvasDraw
				canvasHeight={300}
				canvasWidth={300}
				disabled
				ref={(canvasDraw) => setRef(canvasDraw)}
				hideGrid
				hideInterface
			/>
			<Container className="PostIcons">
				<Favorite />
			</Container>
		</Card>
	);
};

export default Post;
