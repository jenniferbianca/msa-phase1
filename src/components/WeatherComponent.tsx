import * as React from 'react';

class WeatherComponent extends React.Component<any, any> {
    public render() {
      return (
        <div className="display_info">
            {
              this.props.city && this.props.country && <p className="display_category">Location: 
              <span className="display_result"> {this.props.city}, {this.props.country}</span>
              </p>
            }
            {
              this.props.description && <p className="display_category">Conditions: 
              <span className="display_result"> {this.props.description}</span>
              </p>
            }
            {
              this.props.temperature && <p className="display_category">Temperature: 
              <span className="display_result"> {this.props.temperature} Celcius</span>
              </p>
            }
            {
              this.props.max_temperature && <p className="display_category">High: 
              <span className="display_result"> {this.props.max_temperature} Celcius</span>
              </p>
            }
            {
              this.props.min_temperature && <p className="display_category">Low:
              <span className="display_result"> {this.props.min_temperature} Celcius</span>
              </p>
            }
            {
              this.props.error && <p className="display_error">{this.props.error}
              </p>
            }
        </div>
      );
    }
  }

export default WeatherComponent;