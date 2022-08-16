import { Publish, Save, Undo } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useDispatch, useSelector } from "react-redux";
import { postDrawing, saveDrawingAsDraft } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./Canvas.scss";

const Canvas = () => {
	const [brushColor, setBrushColor] = useState("#000000");
	const [ref, setRef] = useState<CanvasDraw | null>();

	const dispatch = useDispatch();
	const {
		canvas: { savedDraft },
		words,
		user: { userId, token },
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		if (ref) {
			ref.loadSaveData(savedDraft);
		}
	}, [ref, savedDraft]);

	const saveDrawing = () => {
		dispatch(saveDrawingAsDraft(ref?.getSaveData(), new Date()));
	};

	const handlePublish = () => {
		if (ref) {
			saveDrawing();
			dispatch(
				postDrawing(
					ref?.getSaveData(),
					new Date(),
					userId,
					words.id,
					token
				)
			);
		} else {
			console.error("Could not obtain ref to canvas.");
		}
	};
	return (
		<div className="Canvas">
			<div className="CanvasButtons">
				<Button
					disabled={words.postedToday}
					className="CanvasButton Red"
					variant="contained"
					endIcon={<ClearIcon />}
					onClick={() => ref?.clear()}
				>
					Clear
				</Button>
				<Button
					disabled={words.postedToday}
					className="CanvasButton"
					variant="contained"
					endIcon={<Undo />}
					onClick={() => ref?.undo()}
				>
					Undo
				</Button>
				<input
					disabled={words.postedToday}
					type="color"
					value={brushColor}
					onChange={(e) => setBrushColor(e.target.value)}
				/>
			</div>
			<CanvasDraw
				canvasWidth={window.innerWidth < 400 ? 300 : 400}
				canvasHeight={window.innerWidth < 400 ? 300 : 400}
				hideGrid
				hideInterface
				disabled={words.postedToday}
				ref={(canvasDraw) => setRef(canvasDraw)}
				brushColor={brushColor}
			/>
			<div className="CanvasButtons">
				<Button
					disabled={words.postedToday}
					className="CanvasButton"
					variant="contained"
					endIcon={<Save />}
					onClick={saveDrawing}
				>
					Save
				</Button>
				<Button
					className="CanvasButton"
					variant="contained"
					endIcon={<Publish />}
					disabled={words.postedToday}
					onClick={handlePublish}
				>
					Post!
				</Button>
			</div>
		</div>
	);
};

export default Canvas;
