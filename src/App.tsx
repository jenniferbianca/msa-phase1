import * as React from 'react';
import './App.css';
import FormComponent from "./components/FormComponent";
import TitleComponent from "./components/TitleComponent";
import WeatherComponent from "./components/WeatherComponent";

const API_KEY = "525d59af586d0bb243213ba80429de14";

interface IState{
  city: any,
  country: any,
  description: any,
  error: any,
  humidity: any,
  temperature: any
}

export default class App extends React.Component<any, any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined,
      humidity: undefined,
      temperature: undefined
    }
  }
  public getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const callAPI = await fetch(`http://api.openweathermap.org.data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await callAPI.json();
    if (city && country) {
      // tslint:disable-next-line:no-console
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: "",
        humidity: data.main.humidity,
        temperature: data.main.temp
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        error: "No values inputted. Please try again.",
        humidity: undefined,
        temperature: undefined
    });
  }
  public render() {
    return (
      <div>
        <TitleComponent />
        <FormComponent getWeather={this.getWeather}/>
        <WeatherComponent 
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
          humidity={this.state.humidity}
          temperature={this.state.temperature}/>
      </div>
    );
  }
}
