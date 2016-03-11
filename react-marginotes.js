import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class Notes extends Component {
    render() {
        let { top, left, width, minHeight, desc, active } = this.props;
        const style = {
            position: "absolute",
            borderRight: "solid 2px #337ab7",
            fontSize: "13px",
            textAlign: "right",
            paddingRight: "7px",
            top,
            right: `calc(100% - ${left - 5}px)`,
            minHeight,
            width: width,
            display: "block"
        }

        if (!active) {
            return <span></span>;
        }
        return (<span style={style}>{desc}</span>);
    }
}

const Marginotes = (ComposedComponent) => class extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            style: {}
        };
    }
    componentDidMount() {
        const dom = findDOMNode(this);
        const parent = dom.parentNode;
        let top = parent.offsetTop;
        let left = parent.offsetLeft;
        let minHeight = parent.clientHeight;

        this.setState({
            style: {top, left, minHeight}
        });
    }

    handleMouseEnter() {
        this.setState({ active: true });
    }
    handleMouseLeave() {
        this.setState({ active: false });
    }

    render() {
        let { top, left, minHeight } = this.state.style;
        let { desc, width=100, children } = this.props;

        width = Math.min(width, left);

        return (
            <span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                <ComposedComponent {...this.props}>{children}</ComposedComponent>
                <Notes top={top} left={left} width={width} minHeight={minHeight} desc={desc} active={this.state.active} />
            </span>
        );
    }
};

export default Marginotes;
