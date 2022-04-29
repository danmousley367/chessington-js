import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = []
        const currentSquare = board.findPiece(this)
        const [col, row] = [currentSquare.col, currentSquare.row]

        const hasPiece = (square) => {
            return board.getPiece(square) === undefined ? false : true
        }

        if (this.player === Player.WHITE && (row+1 < 8) && !hasPiece(Square.at(row + 1, col)) ) {
            availableMoves.push(Square.at(row + 1, col))

            if (row === 1 && !hasPiece(Square.at(row + 2, col))) {
                availableMoves.push(Square.at(row + 2, col))
            }
        }

        if (this.player === Player.BLACK && (row -1 >= 0) && !hasPiece(Square.at(row - 1, col)) ) {
            availableMoves.push(Square.at(row - 1, col))

            if (row === 6 && !hasPiece(Square.at(row - 2, col))) {
                availableMoves.push(Square.at(row - 2, col))
            }
        }

        return availableMoves
    }
}
