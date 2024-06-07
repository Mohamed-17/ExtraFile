import React from 'react'
import { Link } from 'react-router-dom';

export const LastPieceDeal = () => {
  return (
    <div className="lastpiece">
    <div className="piece">
    <div className="imgPieceHolder">
    <Link to={"/outlet/c/8019"}>
    <img src="https://media.extra.com/i/aurora/MS24_LastPiece_Strip_E" alt="" />
    </Link>
    </div>
    </div>
    </div>
  )
}
