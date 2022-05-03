import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = []
        const currentSquare = board.findPiece(this)
        const [col, row] = [currentSquare.col, currentSquare.row]

        const getMove = (changeRow, changeCol) => {
            const rowCondition = changeRow > 0 ? (row + changeRow) < 8 : (row + changeRow) >= 0
            const colCondition = changeCol > 0 ? (row + changeCol) < 8 : (row + changeCol) >= 0
            const isFree = () => {
                if (board.getPiece(Square.at(row+changeRow, col+changeCol)) === undefined) {
                    return true
                } else {
                    return board.getPiece(Square.at(row + changeRow, col+changeCol))
                }
            }
            if (rowCondition && colCondition && (isFree() == true || isFree().player !== this.player)) {
                availableMoves.push(Square.at(row+changeRow, col+changeCol))
            }
        }

        getMove(1, 0)
        getMove(1, 1)
        getMove(0, 1)
        getMove(-1, 1)
        getMove(-1, -1)
        getMove(-1, 0)
        getMove(0, -1)
        getMove(1, -1)

        return availableMoves
    }
}
