import React, { Component } from 'react';
import left_arrow from './images/left_arrow.svg';


class DirectionControls extends Component{

    forwardClick(e){
      //instance of Character.js injected as property during instantiation
      var character = this.props.characterRef.current;
      character.moveForward();
      debugger;
    }

    backwardClick(e){
      //instance of Character.js injected as property during instantiation
      var character = this.props.characterRef.current;
      character.moveBackward();
      debugger;
    }

    leftClick(e){
      //instance of Character.js injected as property during instantiation
      var character = this.props.characterRef.current;
      character.moveLeft();
      debugger;
    }

    rightClick(e){
      //instance of Character.js injected as property during instantiation
      var character = this.props.characterRef.current;
      character.moveRight();
      debugger;
    }

    render(){
        return(
            <div id="directionControls" class="columnLayout">
              <div class="rowLayout">
                <img src={left_arrow} class="arrow backArrow" onClick={(e) => this.backwardClick(e)}/>
                <div class="columnLayout">
                  <img src={left_arrow} class="arrow leftArrow" onClick={(e) => this.leftClick(e)}/>
                  <img src={left_arrow} class="arrow forwardArrow" onClick={(e) => this.forwardClick(e)} />
                  <img src={left_arrow} class="arrow rightArrow" onClick={(e) => this.rightClick(e)}/>
                </div>
              </div>
            </div>
        )
    }
    

}

export default DirectionControls;