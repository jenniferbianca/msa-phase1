import * as React from 'react';

interface IState{
  city: any,
  country: any,
  description: any,
  error: any,
  humidity: any,
  temperature: any
}

class WeatherComponent extends React.Component<any, any, IState> {
    public render() {
      return (
        <div>
            {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
            {this.props.description && <p>Conditions: {this.props.description}</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
            {this.props.error && <p>{this.props.error}</p>}
        </div>
      );
    }
  }

export default WeatherComponent;