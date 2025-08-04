import React from "react";
import { Component } from "react";

const WithLogging = (WrappedComponent) => {
	class HOC extends Component {
		constructor() {
			super();
			this.name =
				WrappedComponent.displayName || WrappedComponent.name || "Component";
		}
		componentDidMount() {
			console.log(`Component ${this.name} is mounted`);
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
