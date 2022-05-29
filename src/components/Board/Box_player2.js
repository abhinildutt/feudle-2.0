import './Box_player2.css' 
import React from 'react'

export default class Box_player2 extends React.Component {
    render_box(line, i) {
        return (
            <div class="box2" id = {"2line" + line.toString() + "box" + i.toString()}></div> 
        )
    }
    render_lines(num) {
        return (
            <div class="line2">
                {this.render_box(num, 1)}
                {this.render_box(num, 2)}
                {this.render_box(num, 3)}
                {this.render_box(num, 4)}
                {this.render_box(num, 5)}
            </div>
        )
    }
    render() {
        return (
            <div class = "body-boxes2">
                {this.render_lines(1)}
                {this.render_lines(2)}
                {this.render_lines(3)}
                {this.render_lines(4)}
                {this.render_lines(5)}
                {this.render_lines(6)}
                PLAYER 2
            </div>
        )
    }
}