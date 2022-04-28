import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        const newCol = currentSquare.col
        const newRow = (this.player === Player.WHITE) ? currentSquare.row + 1 : currentSquare.row -1

        return [Square.at(newRow, newCol)];
    }
}
