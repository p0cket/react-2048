import React from 'react';
import Square from './Square';
import './Board.css';


class Board extends React.Component {
    state = {}

    render(){
        return(
            <>

                <p>Hey Guys! This is your 2048 board</p>
                <div className="container">
                    <div className="grid-container">
                        <Square num={2}/><Square num={1}/><Square num={1}/><Square num={1}/>
                        <Square num={1}/><Square num={1}/><Square num={4}/><Square num={1}/>
                        <Square num={1}/><Square num={0}/><Square num={1}/><Square num={1}/>
                        <Square num={16}/><Square num={1}/><Square num={8}/><Square num={1}/>
                    </div>
                </div>

            </>

        )
    }
}

export default Board;