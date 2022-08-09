import { Button } from "@mui/material";
import React, { useRef, useState, useSyncExternalStore } from "react";
import CanvasDraw from "react-canvas-draw";
import ClearIcon from "@mui/icons-material/Clear";
import "./Canvas.scss";
import { Save, Undo } from "@mui/icons-material";

const Canvas = () => {
  const [brushColor, setBrushColor] = useState("#000000");
  const [ref, setRef] = useState<CanvasDraw | null>();

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
    </div>
  );
};

export default Canvas;
