import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
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
            if (rowCondition && colCondition) {
                availableMoves.push(Square.at(row+changeRow, col+changeCol))
            }
        }

        getMove(2, 1)
        getMove(2, -1)
        getMove(-2, 1)
        getMove(-2, -1)
        getMove(1, 2)
        getMove(-1, 2)
        getMove(1, -2)
        getMove(-1, -2)

        return availableMoves
    }
}
