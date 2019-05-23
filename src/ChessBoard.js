import React, { Component } from 'react';
import AlphabeticIndex from './AlphabeticIndex'
import TableComponent from './TableComponent';
import Character from './Character';

class ChessBoard extends Component {

    constructor(props) {
        super(props);
        this.width = 8;
        this.height = 8;
    }
    
    render() {
        return (
          <div>
            <TableComponent data = {this.generateTable()} id={this.props.id} ref={this.tableRef} />
            <Character ref={this.props.characterRef} />
          </div>
        );
    }

    directionClick(e){
        this.characterRef.current.moveForward();
        this.characterRef.current.moveBackward();
        this.characterRef.current.moveLeft();
        this.characterRef.current.moveRight(); 
    }

  
    generateTable() {
      var tableData = {
        columns: this.generateHeaders(),
        rows: [
          [ "1", "" , "", "", "", "", "", "", "" ],
          [ "2", "" , "", "", "", "", "", "", "" ],
          [ "3", "" , "", "", "", "", "", "", "" ],
          [ "4", "" , "", "", "", "", "", "", "" ],
          [ "5", "" , "", "", "", "", "", "", "" ],
          [ "6", "" , "", "", "", "", "", "", "" ],
          [ "7", "" , "", "", "", "", "", "", "" ],
          [ "8", "" , "", "", "", "", "", "", "" ]

        ]
      };

      let alphabeticIndex = new AlphabeticIndex();
      Object.keys(this.props.config.setup).forEach(coord => {          
        var col = alphabeticIndex.getCharIndex(coord[0]);
        var row = +coord[1];
        tableData.rows[row - 1][col + 1] = <span style={{color: this.props.config.setup[coord]}}>&#9679;</span>;

        //store the setup locally
        //when the character moves call a function on here passing it in
        //if the colour matches then count it as stored 
      });
  
      return tableData;
    }
   
    updateTable(){
      
    }

    generateHeaders() {
        let alphabeticIndex = new AlphabeticIndex();
        return [" "].concat(alphabeticIndex.getIndexArray(this.width));
    }
}

export default ChessBoard;
