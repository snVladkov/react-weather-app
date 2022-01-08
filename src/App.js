//hooks and modules
import { useState, useRef, useEffect } from "react";
import axios from "axios";
//icons
import { MdMyLocation } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
//images
import clear from "./images/Clear.png";
import lightCloud from "./images/LightCloud.png";
import heavyCloud from "./images/HeavyCloud.png";
import shower from "./images/Shower.png";
import rain from "./images/HeavyRain.png";
import thunderStorm from "./images/Thunderstorm.png";
import snow from "./images/Snow.png";
import hail from "./images/Hail.png";
import sleet from "./images/Sleet.png";

const App = () => {
  //state
  const [openSearch, setOpenSearch] = useState(false);
  const [lat, setLat] = useState("43.221279");
  const [lon, setLon] = useState("27.920694");
  const [locationStatus, setLocationStatus] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentKey, setCurrentKey] = useState("51536");
  const [currentCityName, setCurrentCityName] = useState("Varna");
  const [currentCity, setCurrentCity] = useState([
    {
      LocalObservationDateTime: "2022-01-05T15:22:00+02:00",
      EpochTime: 1641388920,
      WeatherText: "Mostly sunny",
      WeatherIcon: 2,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 17.2,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 63,
          Unit: "F",
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Metric: {
          Value: 15.9,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Imperial: {
          Value: 61,
          Unit: "F",
          UnitType: 18,
          Phrase: "Cool",
        },
      },
      RealFeelTemperatureShade: {
        Metric: {
          Value: 15.1,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Imperial: {
          Value: 59,
          Unit: "F",
          UnitType: 18,
          Phrase: "Cool",
        },
      },
      RelativeHumidity: 48,
      IndoorRelativeHumidity: 40,
      DewPoint: {
        Metric: {
          Value: 6.1,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 43,
          Unit: "F",
          UnitType: 18,
        },
      },
      Wind: {
        Direction: {
          Degrees: 248,
          Localized: "WSW",
          English: "WSW",
        },
        Speed: {
          Metric: {
            Value: 18.5,
            Unit: "km/h",
            UnitType: 7,
          },
          Imperial: {
            Value: 11.5,
            Unit: "mi/h",
            UnitType: 9,
          },
        },
      },
      WindGust: {
        Speed: {
          Metric: {
            Value: 18.5,
            Unit: "km/h",
            UnitType: 7,
          },
          Imperial: {
            Value: 11.5,
            Unit: "mi/h",
            UnitType: 9,
          },
        },
      },
      UVIndex: 1,
      UVIndexText: "Low",
      Visibility: {
        Metric: {
          Value: 16.1,
          Unit: "km",
          UnitType: 6,
        },
        Imperial: {
          Value: 10,
          Unit: "mi",
          UnitType: 2,
        },
      },
      ObstructionsToVisibility: "",
      CloudCover: 11,
      Ceiling: {
        Metric: {
          Value: 12192,
          Unit: "m",
          UnitType: 5,
        },
        Imperial: {
          Value: 40000,
          Unit: "ft",
          UnitType: 0,
        },
      },
      Pressure: {
        Metric: {
          Value: 1007,
          Unit: "mb",
          UnitType: 14,
        },
        Imperial: {
          Value: 29.74,
          Unit: "inHg",
          UnitType: 12,
        },
      },
      PressureTendency: {
        LocalizedText: "Steady",
        Code: "S",
      },
      Past24HourTemperatureDeparture: {
        Metric: {
          Value: 2.2,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 4,
          Unit: "F",
          UnitType: 18,
        },
      },
      ApparentTemperature: {
        Metric: {
          Value: 17.8,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
      },
      WindChillTemperature: {
        Metric: {
          Value: 17.2,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 63,
          Unit: "F",
          UnitType: 18,
        },
      },
      WetBulbTemperature: {
        Metric: {
          Value: 11.2,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 52,
          Unit: "F",
          UnitType: 18,
        },
      },
      Precip1hr: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        PastHour: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past3Hours: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past6Hours: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past9Hours: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past12Hours: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past18Hours: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past24Hours: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {
              Value: 7.8,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 46,
              Unit: "F",
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 17.2,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 63,
              Unit: "F",
              UnitType: 18,
            },
          },
        },
        Past12HourRange: {
          Minimum: {
            Metric: {
              Value: 7.2,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 45,
              Unit: "F",
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 17.2,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 63,
              Unit: "F",
              UnitType: 18,
            },
          },
        },
        Past24HourRange: {
          Minimum: {
            Metric: {
              Value: 6.1,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 43,
              Unit: "F",
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 17.2,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 63,
              Unit: "F",
              UnitType: 18,
            },
          },
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/bg/varna/51536/current-weather/51536?lang=en-us",
      Link: "http://www.accuweather.com/en/bg/varna/51536/current-weather/51536?lang=en-us",
    },
  ]);
  const [currentWeek, setCurrentWeek] = useState({
    Headline: {
      EffectiveDate: "2022-01-07T19:00:00+02:00",
      EffectiveEpochDate: 1641574800,
      Severity: 5,
      Text: "Expect rainy weather Friday evening through Saturday afternoon",
      Category: "rain",
      EndDate: "2022-01-08T19:00:00+02:00",
      EndEpochDate: 1641661200,
      MobileLink:
        "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?unit=c&lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2022-01-03T07:00:00+02:00",
        EpochDate: 1641186000,
        Temperature: {
          Minimum: {
            Value: 5.8,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 13.9,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=1&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=1&unit=c&lang=en-us",
      },
      {
        Date: "2022-01-04T07:00:00+02:00",
        EpochDate: 1641272400,
        Temperature: {
          Minimum: {
            Value: 5.8,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 13.2,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=2&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=2&unit=c&lang=en-us",
      },
      {
        Date: "2022-01-05T07:00:00+02:00",
        EpochDate: 1641358800,
        Temperature: {
          Minimum: {
            Value: 8.7,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 14.5,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: "Mostly clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=3&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=3&unit=c&lang=en-us",
      },
      {
        Date: "2022-01-06T07:00:00+02:00",
        EpochDate: 1641445200,
        Temperature: {
          Minimum: {
            Value: 5,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 15.2,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 6,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 8,
          IconPhrase: "Dreary",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=4&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=4&unit=c&lang=en-us",
      },
      {
        Date: "2022-01-07T07:00:00+02:00",
        EpochDate: 1641531600,
        Temperature: {
          Minimum: {
            Value: 6,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 8.7,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 6,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 18,
          IconPhrase: "Rain",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=5&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/bg/varna/51536/daily-weather-forecast/51536?day=5&unit=c&lang=en-us",
      },
    ],
  });
  const [degreeScale, setDegreeScale] = useState("c");

  const searchInput = useRef(null);

  //get search results
  const getCityList = () => {
    let city = searchInput.current.value;
    axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=hMxeNsBRAECbRBY63IOQAw7daYHXj4J1&q=${city}`
      )
      .then((response) => {
        setSearchResults(response.data);
      });
  };
  //create list from search results
  const searchList = searchResults.map((item, index) => {
    return (
      <button
        className="search-menu__result"
        key={index}
        onClick={() => {
          setCurrentKey(item.Key);
          setCurrentCityName(item.EnglishName);
          setOpenSearch(false);
        }}
      >
        {item.EnglishName}, {item.Country.EnglishName}
        <MdArrowForwardIos className="search-menu__result-arrow" />
      </button>
    );
  });

  //get current location
  const getLocation = () => {
    setLocationStatus("Locating...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus("");
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => {
        setLocationStatus("Unable to locate");
      }
    );
  };
  //update current city key needed for API call
  const updateCityKey = () => {
    axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=hMxeNsBRAECbRBY63IOQAw7daYHXj4J1&q=${lat},${lon}`
      )
      .then((response) => {
        setCurrentKey(response.data.Key);
        setCurrentCityName(response.data.EnglishName);
      });
  };
  //get current and 5-day forcast data using city key
  useEffect(() => {
    axios
      .get(
        `https://dataservice.accuweather.com/currentconditions/v1/${currentKey}?apikey=hMxeNsBRAECbRBY63IOQAw7daYHXj4J1&details=true`
      )
      .then((response) => {
        setCurrentCity(response.data);
      });
    axios
      .get(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentKey}?apikey=hMxeNsBRAECbRBY63IOQAw7daYHXj4J1&metric=true`
      )
      .then((response) => {
        setCurrentWeek(response.data);
      });
  }, [currentKey]);

  return (
    <div className="app">
      <div
        className="search-menu"
        style={{ visibility: openSearch ? "visible" : "hidden" }}
      >
        <MdClose
          className="search-menu__close"
          onClick={() => setOpenSearch(false)}
        />
        <input
          className="search-menu__input"
          type="text"
          placeholder="search locations..."
          ref={searchInput}
        />
        <button className="search-menu__search" onClick={getCityList}>
          Search
        </button>
        <div className="search-menu__results">{searchList}</div>
      </div>
      <div className="main">
        <button
          className="main__button-search"
          onClick={() => setOpenSearch(true)}
        >
          Search for places
        </button>
        <span className="main__location-status">{locationStatus}</span>
        <button
          className="main__button-location"
          onClick={() => {
            getLocation();
            updateCityKey();
          }}
        >
          <MdMyLocation />
        </button>
        <img
          src={
            currentCity[0].WeatherIcon <= 3 ||
            (currentCity[0].WeatherIcon >= 32 &&
              currentCity[0].WeatherIcon <= 35)
              ? clear
              : (currentCity[0].WeatherIcon >= 4 &&
                  currentCity[0].WeatherIcon <= 5) ||
                (currentCity[0].WeatherIcon >= 36 &&
                  currentCity[0].WeatherIcon <= 37)
              ? lightCloud
              : (currentCity[0].WeatherIcon >= 6 &&
                  currentCity[0].WeatherIcon <= 11) ||
                currentCity[0].WeatherIcon === 38
              ? heavyCloud
              : currentCity[0].WeatherIcon >= 12 &&
                currentCity[0].WeatherIcon <= 14
              ? shower
              : (currentCity[0].WeatherIcon >= 15 &&
                  currentCity[0].WeatherIcon <= 17) ||
                (currentCity[0].WeatherIcon >= 41 &&
                  currentCity[0].WeatherIcon <= 42)
              ? thunderStorm
              : currentCity[0].WeatherIcon === 18 ||
                (currentCity[0].WeatherIcon >= 39 &&
                  currentCity[0].WeatherIcon <= 40)
              ? rain
              : (currentCity[0].WeatherIcon >= 19 &&
                  currentCity[0].WeatherIcon <= 21) ||
                (currentCity[0].WeatherIcon >= 43 &&
                  currentCity[0].WeatherIcon <= 44)
              ? hail
              : (currentCity[0].WeatherIcon >= 22 &&
                  currentCity[0].WeatherIcon <= 23) ||
                currentCity[0].WeatherIcon === 44
              ? snow
              : sleet
          }
          alt="weather icon"
          className="main__image"
        ></img>
        <h1 className="main__temp">
          <span className="main__temp-value">
            {Math.round(
              degreeScale === "c"
                ? currentCity[0].Temperature.Metric.Value
                : currentCity[0].Temperature.Imperial.Value
            )}
          </span>
          <span className="main__temp-unit">
            &deg;{degreeScale === "c" ? "C" : "F"}
          </span>
        </h1>
        <h2 className="main__heading">{currentCity[0].WeatherText}</h2>
        <span className="main__date">
          Today -
          {new Date(currentCity[0].EpochTime * 1000)
            .toString()
            .substring(0, 10)}
        </span>
        <span className="main__location">
          <MdLocationPin className="main__location-pin" />
          {currentCityName}
        </span>
      </div>
      <div className="info">
        <button
          className={
            degreeScale === "c"
              ? "info__button-cel info__button_active"
              : "info__button-cel info__button_inactive"
          }
          onClick={() => setDegreeScale("c")}
        >
          &deg;C
        </button>
        <button
          className={
            degreeScale === "f"
              ? "info__button-far info__button_active"
              : "info__button-far info__button_inactive"
          }
          onClick={() => setDegreeScale("f")}
        >
          &deg;F
        </button>
        <div className="info__days">
          <div className="info__days-card">
            <h5 className="info__days-heading">Today</h5>
            <img
              src={
                currentWeek.DailyForecasts[0].Day.Icon <= 3 ||
                (currentWeek.DailyForecasts[0].Day.Icon >= 32 &&
                  currentWeek.DailyForecasts[0].Day.Icon <= 35)
                  ? clear
                  : (currentWeek.DailyForecasts[0].Day.Icon >= 4 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 5) ||
                    (currentWeek.DailyForecasts[0].Day.Icon >= 36 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 37)
                  ? lightCloud
                  : (currentWeek.DailyForecasts[0].Day.Icon >= 6 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 11) ||
                    currentWeek.DailyForecasts[0].Day.Icon === 38
                  ? heavyCloud
                  : currentWeek.DailyForecasts[0].Day.Icon >= 12 &&
                    currentWeek.DailyForecasts[0].Day.Icon <= 14
                  ? shower
                  : (currentWeek.DailyForecasts[0].Day.Icon >= 15 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 17) ||
                    (currentWeek.DailyForecasts[0].Day.Icon >= 41 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 42)
                  ? thunderStorm
                  : currentWeek.DailyForecasts[0].Day.Icon === 18 ||
                    (currentWeek.DailyForecasts[0].Day.Icon >= 39 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 40)
                  ? rain
                  : (currentWeek.DailyForecasts[0].Day.Icon >= 19 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 21) ||
                    (currentWeek.DailyForecasts[0].Day.Icon >= 43 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 44)
                  ? hail
                  : (currentWeek.DailyForecasts[0].Day.Icon >= 22 &&
                      currentWeek.DailyForecasts[0].Day.Icon <= 23) ||
                    currentWeek.DailyForecasts[0].Day.Icon === 44
                  ? snow
                  : sleet
              }
              alt="weather-icon"
              className="info__days-image"
            ></img>
            <span className="info__days-max">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[0].Temperature.Maximum.Value
                  : currentWeek.DailyForecasts[0].Temperature.Maximum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
            <span className="info__days-min">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[0].Temperature.Minimum.Value
                  : currentWeek.DailyForecasts[0].Temperature.Minimum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
          </div>
          <div className="info__days-card">
            <h5 className="info__days-heading">Tomorrow</h5>
            <img
              src={
                currentWeek.DailyForecasts[1].Day.Icon <= 3 ||
                (currentWeek.DailyForecasts[1].Day.Icon >= 32 &&
                  currentWeek.DailyForecasts[1].Day.Icon <= 35)
                  ? clear
                  : (currentWeek.DailyForecasts[1].Day.Icon >= 4 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 5) ||
                    (currentWeek.DailyForecasts[1].Day.Icon >= 36 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 37)
                  ? lightCloud
                  : (currentWeek.DailyForecasts[1].Day.Icon >= 6 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 11) ||
                    currentWeek.DailyForecasts[1].Day.Icon === 38
                  ? heavyCloud
                  : currentWeek.DailyForecasts[1].Day.Icon >= 12 &&
                    currentWeek.DailyForecasts[1].Day.Icon <= 14
                  ? shower
                  : (currentWeek.DailyForecasts[1].Day.Icon >= 15 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 17) ||
                    (currentWeek.DailyForecasts[1].Day.Icon >= 41 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 42)
                  ? thunderStorm
                  : currentWeek.DailyForecasts[1].Day.Icon === 18 ||
                    (currentWeek.DailyForecasts[1].Day.Icon >= 39 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 40)
                  ? rain
                  : (currentWeek.DailyForecasts[1].Day.Icon >= 19 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 21) ||
                    (currentWeek.DailyForecasts[1].Day.Icon >= 43 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 44)
                  ? hail
                  : (currentWeek.DailyForecasts[1].Day.Icon >= 22 &&
                      currentWeek.DailyForecasts[1].Day.Icon <= 23) ||
                    currentWeek.DailyForecasts[1].Day.Icon === 44
                  ? snow
                  : sleet
              }
              alt="weather-icon"
              className="info__days-image"
            ></img>
            <span className="info__days-max">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[1].Temperature.Maximum.Value
                  : currentWeek.DailyForecasts[1].Temperature.Maximum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
            <span className="info__days-min">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[1].Temperature.Minimum.Value
                  : currentWeek.DailyForecasts[1].Temperature.Minimum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
          </div>
          <div className="info__days-card">
            <h5 className="info__days-heading">
              {new Date(currentWeek.DailyForecasts[2].EpochDate * 1000)
                .toString()
                .substring(0, 10)}
            </h5>
            <img
              src={
                currentWeek.DailyForecasts[2].Day.Icon <= 3 ||
                (currentWeek.DailyForecasts[2].Day.Icon >= 32 &&
                  currentWeek.DailyForecasts[2].Day.Icon <= 35)
                  ? clear
                  : (currentWeek.DailyForecasts[2].Day.Icon >= 4 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 5) ||
                    (currentWeek.DailyForecasts[2].Day.Icon >= 36 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 37)
                  ? lightCloud
                  : (currentWeek.DailyForecasts[2].Day.Icon >= 6 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 11) ||
                    currentWeek.DailyForecasts[2].Day.Icon === 38
                  ? heavyCloud
                  : currentWeek.DailyForecasts[2].Day.Icon >= 12 &&
                    currentWeek.DailyForecasts[2].Day.Icon <= 14
                  ? shower
                  : (currentWeek.DailyForecasts[2].Day.Icon >= 15 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 17) ||
                    (currentWeek.DailyForecasts[2].Day.Icon >= 41 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 42)
                  ? thunderStorm
                  : currentWeek.DailyForecasts[2].Day.Icon === 18 ||
                    (currentWeek.DailyForecasts[2].Day.Icon >= 39 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 40)
                  ? rain
                  : (currentWeek.DailyForecasts[2].Day.Icon >= 19 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 21) ||
                    (currentWeek.DailyForecasts[2].Day.Icon >= 43 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 44)
                  ? hail
                  : (currentWeek.DailyForecasts[2].Day.Icon >= 22 &&
                      currentWeek.DailyForecasts[2].Day.Icon <= 23) ||
                    currentWeek.DailyForecasts[2].Day.Icon === 44
                  ? snow
                  : sleet
              }
              alt="weather-icon"
              className="info__days-image"
            ></img>
            <span className="info__days-max">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[2].Temperature.Maximum.Value
                  : currentWeek.DailyForecasts[2].Temperature.Maximum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
            <span className="info__days-min">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[2].Temperature.Minimum.Value
                  : currentWeek.DailyForecasts[2].Temperature.Minimum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
          </div>
          <div className="info__days-card">
            <h5 className="info__days-heading">
              {new Date(currentWeek.DailyForecasts[3].EpochDate * 1000)
                .toString()
                .substring(0, 10)}
            </h5>
            <img
              src={
                currentWeek.DailyForecasts[3].Day.Icon <= 3 ||
                (currentWeek.DailyForecasts[3].Day.Icon >= 32 &&
                  currentWeek.DailyForecasts[3].Day.Icon <= 35)
                  ? clear
                  : (currentWeek.DailyForecasts[3].Day.Icon >= 4 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 5) ||
                    (currentWeek.DailyForecasts[3].Day.Icon >= 36 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 37)
                  ? lightCloud
                  : (currentWeek.DailyForecasts[3].Day.Icon >= 6 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 11) ||
                    currentWeek.DailyForecasts[3].Day.Icon === 38
                  ? heavyCloud
                  : currentWeek.DailyForecasts[3].Day.Icon >= 12 &&
                    currentWeek.DailyForecasts[3].Day.Icon <= 14
                  ? shower
                  : (currentWeek.DailyForecasts[3].Day.Icon >= 15 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 17) ||
                    (currentWeek.DailyForecasts[3].Day.Icon >= 41 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 42)
                  ? thunderStorm
                  : currentWeek.DailyForecasts[3].Day.Icon === 18 ||
                    (currentWeek.DailyForecasts[3].Day.Icon >= 39 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 40)
                  ? rain
                  : (currentWeek.DailyForecasts[3].Day.Icon >= 19 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 21) ||
                    (currentWeek.DailyForecasts[3].Day.Icon >= 43 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 44)
                  ? hail
                  : (currentWeek.DailyForecasts[3].Day.Icon >= 22 &&
                      currentWeek.DailyForecasts[3].Day.Icon <= 23) ||
                    currentWeek.DailyForecasts[3].Day.Icon === 44
                  ? snow
                  : sleet
              }
              alt="weather-icon"
              className="info__days-image"
            ></img>
            <span className="info__days-max">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[3].Temperature.Maximum.Value
                  : currentWeek.DailyForecasts[3].Temperature.Maximum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
            <span className="info__days-min">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[3].Temperature.Minimum.Value
                  : currentWeek.DailyForecasts[3].Temperature.Minimum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
          </div>
          <div className="info__days-card">
            <h5 className="info__days-heading">
              {new Date(currentWeek.DailyForecasts[4].EpochDate * 1000)
                .toString()
                .substring(0, 10)}
            </h5>
            <img
              src={
                currentWeek.DailyForecasts[4].Day.Icon <= 3 ||
                (currentWeek.DailyForecasts[4].Day.Icon >= 32 &&
                  currentWeek.DailyForecasts[4].Day.Icon <= 35)
                  ? clear
                  : (currentWeek.DailyForecasts[4].Day.Icon >= 4 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 5) ||
                    (currentWeek.DailyForecasts[4].Day.Icon >= 36 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 37)
                  ? lightCloud
                  : (currentWeek.DailyForecasts[4].Day.Icon >= 6 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 11) ||
                    currentWeek.DailyForecasts[4].Day.Icon === 38
                  ? heavyCloud
                  : currentWeek.DailyForecasts[4].Day.Icon >= 12 &&
                    currentWeek.DailyForecasts[4].Day.Icon <= 14
                  ? shower
                  : (currentWeek.DailyForecasts[4].Day.Icon >= 15 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 17) ||
                    (currentWeek.DailyForecasts[4].Day.Icon >= 41 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 42)
                  ? thunderStorm
                  : currentWeek.DailyForecasts[4].Day.Icon === 18 ||
                    (currentWeek.DailyForecasts[4].Day.Icon >= 39 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 40)
                  ? rain
                  : (currentWeek.DailyForecasts[4].Day.Icon >= 19 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 21) ||
                    (currentWeek.DailyForecasts[4].Day.Icon >= 43 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 44)
                  ? hail
                  : (currentWeek.DailyForecasts[4].Day.Icon >= 22 &&
                      currentWeek.DailyForecasts[4].Day.Icon <= 23) ||
                    currentWeek.DailyForecasts[4].Day.Icon === 44
                  ? snow
                  : sleet
              }
              alt="weather-icon"
              className="info__days-image"
            ></img>
            <span className="info__days-max">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[4].Temperature.Maximum.Value
                  : currentWeek.DailyForecasts[4].Temperature.Maximum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
            <span className="info__days-min">
              {Math.round(
                degreeScale === "c"
                  ? currentWeek.DailyForecasts[4].Temperature.Minimum.Value
                  : currentWeek.DailyForecasts[4].Temperature.Minimum.Value *
                      1.8 +
                      32
              )}
              &deg;{degreeScale === "c" ? "C" : "F"}
            </span>
          </div>
        </div>
        <div className="info__highlights">
          <h3 className="info__highlights-heading">Today's Highlights</h3>
          <div className="info__highlights-card">
            <h5 className="info__highlights-title">Wind stats</h5>
            <span className="info__highlights-value">
              <span className="info__highlights-value-number">
                {currentCity[0].Wind.Speed.Metric.Value}
              </span>
              {currentCity[0].Wind.Speed.Metric.Unit}
            </span>
            <div className="info__highlights-wsw">
              <FaLocationArrow
                className="info__highlights-arrow"
                style={{
                  transform: `rotate(${
                    currentCity[0].Wind.Direction.Degrees - 45
                  }deg)`,
                }}
              />
              {currentCity[0].Wind.Direction.English}
            </div>
          </div>
          <div className="info__highlights-card">
            <h5 className="info__highlights-title">Humidity</h5>
            <span className="info__highlights-value">
              <span className="info__highlights-value-number">
                {currentCity[0].RelativeHumidity}
              </span>
              %
            </span>
            <div className="info__highlights-bar">
              <div className="info__highlights-numbers">
                <span className="info__highlights-number">0</span>
                <span className="info__highlights-number">50</span>
                <span className="info__highlights-number">100</span>
              </div>
              <div className="info__highlights-bar-empty">
                <div
                  className="info__highlights-bar-full"
                  style={{ width: `${currentCity[0].RelativeHumidity}%` }}
                />
              </div>
            </div>
          </div>
          <div className="info__highlights-card">
            <h5 className="info__highlights-title">Visibility</h5>
            <span className="info__highlights-value">
              <span className="info__highlights-value-number">
                {currentCity[0].Visibility.Metric.Value}
              </span>
              {currentCity[0].Visibility.Metric.Unit}
            </span>
          </div>
          <div className="info__highlights-card">
            <h5 className="info__highlights-title">Air Pressure</h5>
            <span className="info__highlights-value">
              <span className="info__highlights-value-number">
                {currentCity[0].Pressure.Metric.Value}
              </span>
              {currentCity[0].Pressure.Metric.Unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
