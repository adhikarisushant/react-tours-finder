import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container">
                <img src="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <span className="close-btn"><i className="fas fa-window-close" /></span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>info <span><i className="fas fa-caret-square-down" /></span></h5>
                    <p>lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>
            </article>
        );
    }
} 