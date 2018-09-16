import * as React from 'react';

class FormComponent extends React.Component<any, any> {
    public render() {
      return (
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="Name of city"/>
            <input type="text" name="country" placeholder="Name of country"/>
            <button>What's the weather?</button>
        </form>
      );
    }
  }

export default FormComponent;