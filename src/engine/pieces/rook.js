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

        const checkHasPieceY = (i) => {
            if (col >= i) {
                for (let j = i+1; j < col; j++) {
                    if (board.getPiece(Square.at(row, j)) !== undefined) {
                        return board.getPiece(Square.at(row, j))
                    }
                }
                return false
            }
            if (col <= i) {
                for (let j = col+1; j < i; j++) {
                    if (board.getPiece(Square.at(row, j)) !== undefined) {
                        return board.getPiece(Square.at(row, j))
                    }
                }
                return false
            }

        }
        const checkHasPieceX = (i) => {
            if (row >= i) {
                for (let j = i+1; j < row; j++) {
                    if (board.getPiece(Square.at(j, col)) !== undefined) {
                        return board.getPiece(Square.at(j, col))
                    }
                }
                return false
            }
            if (row <= i) {
                for (let j = row+1; j < i; j++) {
                    if (board.getPiece(Square.at(j, col)) !== undefined) {
                        return board.getPiece(Square.at(j, col))
                    }
                }
                return false
            }

        }

        for (let i = 0; i < 8; i++) {
            if (i !== col ) {
                if (!checkHasPieceY(i)) {availableMoves.push(Square.at(row, i))}
                else if (checkHasPieceY(i).player !== this.player) {
                    availableMoves.push(board.findPiece(checkHasPieceY(i)))
                }
            }
            if (i !== row) {
                if (!checkHasPieceX(i)) {availableMoves.push(Square.at(i, col))}
                else if (checkHasPieceX(i).player !== this.player) {
                    availableMoves.push(board.findPiece(checkHasPieceX(i)))
                }
            }
        }
        return availableMoves;
    }
}
