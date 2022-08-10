import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import ClearIcon from "@mui/icons-material/Clear";
import "./Canvas.scss";
import { Publish, Save, SaveAs, Undo } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import { postDrawing, saveDrawingAsDraft } from "../../redux-saga/actions";

const Canvas = () => {
  const [brushColor, setBrushColor] = useState("#000000");
  const [ref, setRef] = useState<CanvasDraw | null>();

  const dispatch = useDispatch();
  const {
    canvas: { savedDraft, dateSaved },
    words,
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (ref) {
      ref.loadSaveData(savedDraft);
    }
  }, [ref]);

  return (
    <div className="Canvas">
      <div className="CanvasButtons">
        <Button
          className="CanvasButton Red"
          variant="contained"
          endIcon={<ClearIcon />}
          onClick={() => ref?.clear()}
        >
          Clear
        </Button>
        <Button
          className="CanvasButton"
          variant="contained"
          endIcon={<Undo />}
          onClick={() => ref?.undo()}
        >
          Undo
        </Button>
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
      </div>
      <CanvasDraw
        ref={(canvasDraw) => setRef(canvasDraw)}
        brushColor={brushColor}
      />
      <div className="CanvasButtons">
        <Button
          className="CanvasButton"
          variant="contained"
          endIcon={<Save />}
          onClick={() =>
            dispatch(saveDrawingAsDraft(ref?.getSaveData(), new Date()))
          }
        >
          Save
        </Button>
        <Button
          className="CanvasButton"
          variant="contained"
          endIcon={<Publish />}
          onClick={() =>
            ref
              ? dispatch(
                  postDrawing(ref?.getSaveData(), new Date(), 1, words.id)
                )
              : console.error("Could not obtain ref to canvas.")
          }
        >
          Post!
        </Button>
      </div>
    </div>
  );
};

export default Canvas;
