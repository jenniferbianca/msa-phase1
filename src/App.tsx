import * as React from 'react';
// import { render } from 'react-dom'; // new
import './App.css';
import AvatarComponent from './components/AvatarComponent'; // and new
import FormComponent from "./components/FormComponent";
import TitleComponent from "./components/TitleComponent";
import WeatherComponent from "./components/WeatherComponent";

const API_KEY = "525d59af586d0bb243213ba80429de14";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined,
      max_temperature: undefined,
      min_temperature: undefined,
      temperature: undefined
    }
  }
  public getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const callAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await callAPI.json();
    if (city && country) {
      // tslint:disable-next-line:no-console
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: "",
        max_temperature: data.main.temp_max,
        min_temperature: data.main.temp_min,
        temperature: data.main.temp
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        error: "All values must be inputted. Please try again.",
        max_temperature: undefined,
        min_temperature: undefined,
        temperature: undefined
    });
  }
}
  public render() {
    return (
      <div>
        <div className="title-container">
          <TitleComponent />
          for <AvatarComponent/>
        </div>
        <div className="form-container">
          <FormComponent getWeather={this.getWeather}/>
          <WeatherComponent 
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
            max_temperature={this.state.max_temperature}
            min_temperature={this.state.min_temperature}
            temperature={this.state.temperature}/>
        </div>
      </div>
    );
  }
}
