import { Component, createRef } from 'react';

class NotificationItem extends Component {
    constructor(props) {
        super(props);
        this.liRef = createRef();
    };


    componentDidMount() {
        const { type } = this.props;
        const color = type === "urgent" ? "red" : "blue";
        if (this.liRef.current) {
            this.liRef.current.style.color = color;
            this.liRef.current.style._values = { color };
        }
    }

    render() {
        const { type = "default", html, value } = this.props

        if (html) {
            return (
                <li
                    ref={this.liRef}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={this.handleClick}
                />
            );
        }

        return (
            <li
                ref={this.liRef}
                data-notification-type={type}
                onClick={this.handleClick}
            >
                {value}
            </li>
        );
    }
}

export default NotificationItem;