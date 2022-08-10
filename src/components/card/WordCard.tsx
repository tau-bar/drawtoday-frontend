import { Card } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import "./WordCard.scss";

interface CardProps {
	children: string;
}

const WordCard: FC<CardProps> = ({ children, ...other }) => {
	return (
		<Box className="WordCardBox">
			<Card variant="outlined">{children}</Card>
		</Box>
	);
};

export default WordCard;
