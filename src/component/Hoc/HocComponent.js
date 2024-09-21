import React from 'react';

const HocComponent = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState({count:this.state.count + 1 });
    };

    render() {
        console.log("hoc")
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props} 
        />
      );
    }
  };
};

export default HocComponent;
