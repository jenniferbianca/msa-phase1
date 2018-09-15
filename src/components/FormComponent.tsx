import * as React from 'react';

interface IState{
  city: any,
  country: any,
  description: any,
  error: any,
  humidity: any,
  temperature: any
}

class FormComponent extends React.Component<any, any, IState> {
    public render() {
      return (
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
      );
    }
  }

export default FormComponent;