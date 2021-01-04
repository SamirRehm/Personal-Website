import { Button, SvgIcon } from "@material-ui/core";
import React, { Component } from "react";

import "./Button.css";

type ButtonProps = {
  value: {
    text: string;
    icon: typeof SvgIcon;
  };
};

class CustomButton extends Component<ButtonProps> {
  render() {
    const { value } = this.props;
    return (
      <a href="/resume.pdf" target="_blank">
        <Button
          className="custom_btn"
          endIcon={
            value.icon ? (
              <div className="btn_icon_container">
                <SvgIcon component={value.icon} />
              </div>
            ) : null
          }
        >
          <span className="btn_text">{value.text}</span>
        </Button>
      </a>
    );
  }
}

export default CustomButton;
