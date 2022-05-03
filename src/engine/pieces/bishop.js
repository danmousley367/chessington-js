import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = []
        const currentSquare = board.findPiece(this)
        const [col, row] = [currentSquare.col, currentSquare.row]
        let i = 1
        let j = 1
        let k = 1
        let l = 1

        const checkHasPieceForwardRight = (a) => {
            for (let x = 1; x <= a; x++) {
                if (board.getPiece(Square.at(row + x, col + x)) !== undefined) {
                    return board.getPiece(Square.at(row + x, col + x))
                }
            }
            return false
        }

        const checkHasPieceForwardLeft = (a) => {
            for (let x = 1; x <= a; x++) {
                if (board.getPiece(Square.at(row+x, col-x)) !== undefined) {
                    return board.getPiece(Square.at(row+x, col-x))
                }
            }
            return false
        }

        const checkHasPieceBackLeft = (a) => {
            for (let x = 1; x <= a; x++) {
                if (board.getPiece(Square.at(row-x, col-x)) !== undefined) {
                    return board.getPiece(Square.at(row-x, col-x))
                }
            }
            return false
        }

        const checkHasPieceBackRight = (a) => {
            for (let x = 1; x <= a; x++) {
                if (board.getPiece(Square.at(row-x, col+x)) !== undefined) {
                    return board.getPiece(Square.at(row-x, col+x))
                }
            }
            return false
        }

        while (col+i < 8 && row+i < 8) {
            if (!checkHasPieceForwardRight(i)) {
                availableMoves.push(Square.at(row+i, col+i))
            }
            else if (checkHasPieceForwardRight(i).player !== this.player) {
                availableMoves.push(board.findPiece(checkHasPieceForwardRight(i)))
            }
            i++
        }
        while (col-k >= 0 && row+k < 8) {
            if (!checkHasPieceForwardLeft(k)) {
                availableMoves.push(Square.at(row + k, col - k))
            }
            else if (checkHasPieceForwardLeft(i).player !== this.player) {
                availableMoves.push(board.findPiece(checkHasPieceForwardLeft(i)))
            }
            k++
        }
        while (col-j >= 0 && row-j >= 0) {
            if (!checkHasPieceBackLeft(j)) {
                availableMoves.push(Square.at(row - j, col - j))
            }
            else if (checkHasPieceBackLeft(i).player !== this.player) {
                availableMoves.push(board.findPiece(checkHasPieceBackLeft(i)))
            }
            j++
        }
        while (col+l < 8 && row-l >= 0) {
            if (!checkHasPieceBackRight(l)) {
                availableMoves.push(Square.at(row - l, col + l))
            }
            else if (checkHasPieceBackRight(i).player !== this.player) {
                availableMoves.push(board.findPiece(checkHasPieceBackRight(i)))
            }
            l++
        }

        return availableMoves;
    }
}
