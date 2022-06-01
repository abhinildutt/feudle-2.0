import './Box_player1.css' 
import React from 'react'

export default class Box_player1 extends React.Component {
    render_box(line, i) {
        return (
            <div className="box" id = {"line" + line.toString() + "box" + i.toString()}></div> 
        )
    }
    render_lines(num) {
        return (
            <div className="line">
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
            <div className="body-boxes">
                {this.render_lines(1)}
                {this.render_lines(2)}
                {this.render_lines(3)}
                {this.render_lines(4)}
                {this.render_lines(5)}
                {this.render_lines(6)}
            </div>
        )
    }
}