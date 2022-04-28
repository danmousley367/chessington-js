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
        let i = 1
        let j = 1
        let k = 1
        let l = 1

        while (col+i < 8 && row+i < 8) {
            availableMoves.push(Square.at(row+i, col+i))
            i++
        }
        while (col-k >= 0 && row+k < 8) {
            availableMoves.push(Square.at(row+k, col-k))
            k++
        }
        while (col-j >= 0 && row-j >= 0) {
            availableMoves.push(Square.at(row-j, col-j))
            j++
        }
        while (col+l < 8 && row-l >= 0) {
            availableMoves.push(Square.at(row-l, col+l))
            l++
        }

        for (let m = 0; m < 8; m++) {
            if (m !== col) {
                availableMoves.push(Square.at(row, m))
            }
            if (m !== row) {
                availableMoves.push(Square.at(m, col))
            }
        }

        return availableMoves
    }
}
