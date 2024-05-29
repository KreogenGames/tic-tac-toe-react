import React from "react";
import "./board.css";
import Square from "./square";

const Board = ({ squares, click }) => {
    return (
        <div className="board">
            {
				squares.map((square, i) => (
                	<Square key={i} value={square} onClick={() => click(i)} />
            	))
			}
        </div>
    );
};

export default Board;
