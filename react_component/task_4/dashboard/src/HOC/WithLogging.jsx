import React from 'react';

const WithLogging = (WrappedComponent) => {
	class HOC extends React.Component {
		constructor(props) {
			super(props);
			this.componentName =
				WrappedComponent.displayName || WrappedComponent.name || 'Component';
		}

		componentDidMount() {
			console.log(`Component ${this.componentName} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${this.componentName} is going to unmount`);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	HOC.displayName = `WithLogging(${name})`;

	return HOC;
};

export default WithLogging;
