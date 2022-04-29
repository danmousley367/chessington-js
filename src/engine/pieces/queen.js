import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = []
        const currentSquare = board.findPiece(this)
        const [col, row] = [currentSquare.col, currentSquare.row]

        const checkHasPieceForwardRight = (a) => {
            for (let x = 1; x < a; x++) {
                if (board.getPiece(Square.at(row + x, col + x)) !== undefined) {
                    return true
                }
            }
            return false
        }

        const checkHasPieceForwardLeft = (a) => {
            for (let x = 1; x < a; x++) {
                if (board.getPiece(Square.at(row+x, col-x)) !== undefined) {
                    return true
                }
            }
            return false
        }

        const checkHasPieceBackLeft = (a) => {
            for (let x = 1; x < a; x++) {
                if (board.getPiece(Square.at(row-x, col-x)) !== undefined) {
                    return true
                }
            }
            return false
        }

        const checkHasPieceBackRight = (a) => {
            for (let x = 1; x < a; x++) {
                if (board.getPiece(Square.at(row-x, col+x)) !== undefined) {
                    return true
                }
            }
            return false
        }

        const checkHasPieceY = (i) => {
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
        const checkHasPieceX = (i) => {
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

        let i = 1
        let j = 1
        let k = 1
        let l = 1

        while (col+i < 8 && row+i < 8) {
            if (!checkHasPieceForwardRight(i)) {
                availableMoves.push(Square.at(row + i, col + i))
            }
            i++
        }
        while (col-k >= 0 && row+k < 8) {
            if (!checkHasPieceForwardLeft(k)) {
                availableMoves.push(Square.at(row + k, col - k))
            }
            k++
        }
        while (col-j >= 0 && row-j >= 0) {
            if (!checkHasPieceBackLeft(j)) {
                availableMoves.push(Square.at(row - j, col - j))
            }
            j++
        }
        while (col+l < 8 && row-l >= 0) {
            if (!checkHasPieceBackRight(l)) {
                availableMoves.push(Square.at(row - l, col + l))
            }
            l++
        }

        for (let m = 0; m < 8; m++) {
            if (m !== col) {
                if (!checkHasPieceY(m)) {availableMoves.push(Square.at(row, m))}
            }
            if (m !== row) {
                if (!checkHasPieceX(m)) {availableMoves.push(Square.at(m, col))}
            }
        }

        return availableMoves
    }
}
