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
        // const newCol = currentSquare.col
        // const newRow = (this.player === Player.WHITE) ? row + 1 : currentSquare.row -1
        //
        // availableMoves.push(Square.at(newRow, newCol))

        if (this.player === Player.WHITE) {
            availableMoves.push(Square.at(row + 1, col))

            if (row === 1) {
                availableMoves.push(Square.at(row + 2, col))
            }
        }

        if (this.player === Player.BLACK) {
            availableMoves.push(Square.at(row - 1, col))

            if (row === 6) {
                availableMoves.push(Square.at(row - 2, col))
            }
        }

        // if (this.player === Player.WHITE && row === 1) {
        //     availableMoves.push(Square.at(row + 2, col))
        // }
        // if (this.player === Player.BLACK && row === 6) {
        //     availableMoves.push(Square.at(row - 2, col))
        // }
        return availableMoves
    }
}
