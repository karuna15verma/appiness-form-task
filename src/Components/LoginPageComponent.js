import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

class LoginPageComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: "",
      userNameValue: "hruday@gmail.com",
      passwordValue: "hruday123",
      password: "",
    };
  }

  handleChange = (name) => (event) => {
    console.log(name);
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  loginAction = () => {
    if (this.state.userName === this.state.userNameValue && this.state.password === this.state.passwordValue) {
      this.props.history.push("/dashboard");
    } else {
      alert("user name and password is incorrect");
    }
  };

  render() {
    console.log(this.state.userName);
    return (
      <div
        style={{
          marginTop: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          type="text"
          id="outlined-helperText"
          value={this.state.userName}
          onChange={this.handleChange("userName")}
          variant="outlined"
        />
        <TextField
          style={{ marginTop: "3%" }}
          type="text"
          variant="outlined"
          id="outlined-helperText"
          value={this.state.password}
          onChange={this.handleChange("password")}
        />
        <Button style={{ marginTop: "3%" }} onClick={() => this.loginAction()} variant="contained" color="primary">
          Login
        </Button>
      </div>
    );
  }
}

export default withRouter(LoginPageComponent);
