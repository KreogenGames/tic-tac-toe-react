import React, { useState } from "react";
import "./game.css";
import Board from "./board";
import { calculateWinner } from "../judger";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return;

        boardCopy[index] = xIsNext ? "X" : "O";

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const startNewGame = () => {
        return (
            <button
                className="start__btn"
                onClick={() => setBoard(Array(9).fill(null))}
            >
                Новая игра
            </button>
        );
    };

    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className="game__stat">
                {winner === "Ничья"
                    ? "Ничья"
                    : winner
                    ? "Победил " + winner
                    : "Сейчас ходит " + (xIsNext ? "X" : "0")}
            </p>
        </div>
    );
};

export default Game;
