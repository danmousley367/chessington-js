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
        for (let i = 0; i < 8; i++) {
            if (i !== col) {
                availableMoves.push(Square.at(row, i))
            }
            if (i !== row) {
                availableMoves.push(Square.at(i, col))
            }
        }
        return availableMoves;
    }
}
