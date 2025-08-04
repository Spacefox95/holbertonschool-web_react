import React from "react";
import { Component } from "react";

const WithLogging = ({ WrappedComponent }) => {
	const getName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

	WithLogging.displayName = `WithLogging(${getName(WrappedComponent)})`;

	class HOC extends Component {
		componentDidMount() {
			console.log(`Component ${getName(WrappedComponent)} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${getName(WrappedComponent)} is going to unmount`);
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}
	return HOC;
};

export default WithLogging;
