import React, { useState } from 'react';
import './App.css';

const KeyboardEventListenerComponent = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (event) => {
    setKeyPressed(event.key);
    const buttonElement = document.getElementById(event.key);
    if (buttonElement) {
      buttonElement.style.transition = 'box-shadow 150ms ease';
      buttonElement.style.boxShadow = 'rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 400px, rgb(255, 255, 255) 0px 0px 80px';
      setTimeout(() => {
        buttonElement.style.transition = 'box-shadow 250ms ease';
        buttonElement.style.boxShadow = '0 0 10px #9521f300, 0 0 40px #9521f300, 0 0 80px #9521f300';

      }, 300);
    }
  };
  const btn = {
    color: 'white',
    backgroundColor: 'gray'
  };
  return (
    <div>
      <p id='app-title'>TypingMaster</p>
      <input
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div class="container">

        <div className="row zero">
          <button data-key="esc" style={btn}>Esc</button>
          <button data-key="112" style={btn}>F1</button>
          <button id="f2" style={btn}>F2</button>
          <button id="f3" style={btn}>F3</button>
          <button id="f4" style={btn}>F4</button>
          <button id="f5" style={btn}>F5</button>
          <button id="f6" style={btn}>F6</button>
          <button id="f7" style={btn}>F7</button>
          <button id="f8" style={btn}>F8</button>
          <button id="f9" style={btn}>F9</button>
          <button id="f10" style={btn}>F10</button>
          <button id="f11" style={btn}>F11</button>
          <button id="f12" style={btn}>F12</button>
          <button id="insect" style={btn}>Insect</button>
          <button className="print" id="printScr" style={btn}>printScr</button>
          <button id="delete" style={btn}>Delete</button>
        </div>

        <div className="row one">
          <button id="`">~</button>
          <button id="1">1</button>
          <button id="2">2</button>
          <button id="3">3</button>
          <button id="4">4</button>
          <button id="5">5</button>
          <button id="6">6</button>
          <button id="7">7</button>
          <button id="8">8</button>
          <button id="9">9</button>
          <button id="0">10</button>
          <button id="-">-</button>
          <button id="=">=</button>
          <button className="back" id="backspace" style={btn}>Backspace</button>
          <button id="home" style={btn}>Home</button>
        </div>


        <div class="row two">
          <button class=" " style={btn}>Tab</button>
          <button id="q">Q</button>
          <button id="w">W</button>
          <button id="e">E</button>
          <button id="r">R</button>
          <button id="t">T</button>
          <button id="y">Y</button>
          <button id="u">U</button>
          <button id="i">I</button>
          <button id="o">O</button>
          <button id="p">P</button>
          <button id='['>[</button>
          <button id=']'>]</button>
          <button id='\' class="slace">\\</button>
          <button style={btn}>Pg Up</button>
        </div>

        <div class="row three">
          <button class="cap" style={btn}>Caps Lock</button>
          <button id="a" >A</button>
          <button id="s">S</button>
          <button id="d">D</button>
          <button id="f">F</button>
          <button id="g">G</button>
          <button id="h">H</button>
          <button id="j">J</button>
          <button id="k">K</button>
          <button id="l">L</button>
          <button id=';'>;</button>
          <button id="'">'</button>
          <button class="enter-btn" style={btn}>Enter</button>
          <button style={btn}>Pg Dn</button>
        </div>

        <div class="row four">
          <button class="shift" style={btn}>Shift</button>
          <button id="z">Z</button>
          <button id="x">X</button>
          <button id="c">C</button>
          <button id="v">V</button>
          <button id="b">B</button>
          <button id="n">N</button>
          <button id="m">M</button>
          <button id=','>,</button>
          <button id='.'>.</button>
          <button id='?' style={btn}>?</button>
          <button style={btn} class="shift">Shift</button>
          <button id='↑' style={btn}>↑</button>
          <button style={btn}>End</button>
        </div>

        <div class="row five">
          <button class="last" style={btn}>Ctrl</button>
          <button class="last" style={btn}>Fn</button>
          <button class="last" style={btn}>Win</button>
          <button class="last" style={btn}>Alt</button>
          <button id=' ' class="space">space</button>
          <button class="last" style={btn}>Alt</button>
          <button class="last" style={btn}>Fn</button>
          <button class="last" style={btn}>Ctrl</button>
          <button class="last" style={btn}>←</button>
          <button class="last" style={btn}>↓</button>
          <button class="last" style={btn}>→</button>
        </div>

      </div>
    </div>
  );
};

export default KeyboardEventListenerComponent;
