import React from "react";
import { Component } from "react";

const WithLogging = (WrappedComponent) => {
	const name =
		WrappedComponent.displayName || WrappedComponent.name || "Component";
	class HOC extends Component {
		componentDidMount() {
			console.log(`Component ${name} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${this.name} is going to unmount`);
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}

	HOC.displayName = `WithLogging(${name})`;
	return HOC;
};

export default WithLogging;
