import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = []
        const currentSquare = board.findPiece(this)
        const [col, row] = [currentSquare.col, currentSquare.row]

        const checkHasPieceY = (i, col) => {
            if (col > i) {
                for (let j = i+1; j < col; j++) {
                    if (board.getPiece(Square.at(row, j)) !== undefined) {
                        return true
                    }
                }
                return false
            }
            if (col < i) {
                for (let j = col+1; j < i; j++) {
                    if (board.getPiece(Square.at(row, j)) !== undefined) {
                        return true
                    }
                }
                return false
            }

        }
        const checkHasPieceX = (i, row) => {
            if (row > i) {
                for (let j = i+1; j < row; j++) {
                    if (board.getPiece(Square.at(j, col)) !== undefined) {
                        return true
                    }
                }
                return false
            }
            if (row < i) {
                for (let j = row+1; j < i; j++) {
                    if (board.getPiece(Square.at(j, col)) !== undefined) {
                        return true
                    }
                }
                return false
            }

        }
        for (let i = 0; i < 8; i++) {
            if (i !== col ) {
                if (!checkHasPieceY(i, col)) {availableMoves.push(Square.at(row, i))}
            }
            if (i !== row) {
                if (!checkHasPieceX(i, row)) {availableMoves.push(Square.at(i, col))}
            }
        }
        return availableMoves;
    }
}
