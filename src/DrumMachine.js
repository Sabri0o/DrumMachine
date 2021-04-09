import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Form } from "react-bootstrap";

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      soundOrVolulme: "",
      enabled: true,
      volumeInput: 50,
      clicked: ""
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.power = this.power.bind(this);
    this.volumeOnChange = this.volumeOnChange.bind(this);
    this.timer = undefined;
  }
  power() {
    this.setState((state) => ({
      enabled: !state.enabled,
      soundOrVolulme: ""
    }));
  }

  volumeOnChange(e) {
    this.setState({
      volumeInput: e.target.value,
      soundOrVolulme: `Volume: ${e.target.value}`
    });
  }

  handleKeyPress(event) {
    // clearTimeout(this.timer);

    var keyClicked = event.key.toUpperCase();
    if (document.getElementById(keyClicked)) {
      if (this.state.clicked !== "") {
        document
          .getElementById(this.state.clicked)
          .parentElement.classList.replace("drum_pad_active", "drum-pad");
      }

      var buttonClicked = document.getElementById(keyClicked).parentElement;
      buttonClicked.click();
      document
        .getElementById(this.state.clicked)
        .parentElement.classList.replace("drum-pad", "drum_pad_active");
      this.timer = setTimeout(
        function () {
          document
            .getElementById(this.state.clicked)
            .parentElement.classList.replace("drum_pad_active", "drum-pad");
        }.bind(this),
        100
      );
    }
  }

  handleOnClick(event) {
    console.log(this.timer);
    clearTimeout(this.timer);
    var clicked = event.target.innerText;
    var audio = document.getElementById(clicked);
    if (audio) {
      audio.play();
      audio.currentTime = 0; // it seems useless but believe you need it :)
      this.setState({
        soundOrVolulme: audio.className.split(" ")[0],
        clicked: event.target.innerText
      });
    }
  }

  render() {
    var audios = [...document.getElementsByClassName("clip")];
    audios.forEach((e) => {
      e.volume = this.state.volumeInput / 100;
    });
    if (this.state.enabled) {
      document.removeEventListener("keydown", this.handleKeyPress);
    } else {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    return (
      <div id="wrapper">
        <Container id="drum-machine">
          <Row className="justify-content-md-center">
            <Form style={{ color: "rgba(255, 255, 255)", fontSize: "20px" }}>
              <Form.Check
                onChange={this.power}
                type="switch"
                id="custom-switch"
                label="OFF/ON"
              />
            </Form>
          </Row>
          <Row className="justify-content-md-center">
            <div
              id="display"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "5px",
                width: "150px",
                height: "50px",
                backgroundColor: "rgba(136, 136, 206, 0.7)",
                borderRadius: "6px"
              }}
            >
              {this.state.soundOrVolulme}
            </div>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{
              margin: "5px",
              color: "rgba(255, 255, 255)",
              fontSize: "20px"
            }}
          >
            <Form>
              <Form.Group controlId="formBasicRange">
                <Form.Label>Volume</Form.Label>
                <Form.Control
                  defaultValue={50}
                  onChange={this.volumeOnChange}
                  volume={this.state.volumeInput}
                  disabled={this.state.enabled}
                  type="range"
                  min="0"
                  max="100"
                />
              </Form.Group>
            </Form>
          </Row>
          <Row className="justify-content-md-center">
            <button
              disabled={this.state.enabled}
              id="1"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Heater-1 clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
              Q
            </button>
            <button
              disabled={this.state.enabled}
              id="2"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Heater-2 clip"
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
              W
            </button>
            <button
              disabled={this.state.enabled}
              id="3"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Heater-3 clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
              E
            </button>
          </Row>
          <Row className="justify-content-md-center">
            <button
              disabled={this.state.enabled}
              id="4"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Give_us_a_light clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              ></audio>
              A
            </button>
            <button
              disabled={this.state.enabled}
              id="5"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Dry_Ohh clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
              ></audio>
              S
            </button>
            <button
              disabled={this.state.enabled}
              id="6"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Bld_H1 clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
              ></audio>
              D
            </button>
          </Row>
          <Row className="justify-content-md-center">
            <button
              disabled={this.state.enabled}
              id="7"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="punchy_kick_1 clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
              ></audio>
              Z
            </button>
            <button
              disabled={this.state.enabled}
              id="8"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="RP4_KICK_1 clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
              X
            </button>
            <button
              disabled={this.state.enabled}
              id="9"
              className="drum-pad"
              onClick={this.handleOnClick}
              ref={this.myRef}
            >
              <audio
                className="Brk_Snr clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
              ></audio>
              C
            </button>
          </Row>
        </Container>
      </div>
    );
  }
}
