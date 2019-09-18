import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  formControl: {
    width: 200
  },
  selectEmpty: {}
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      names: [],
      clickedName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      clickedName: event.target.value
    });

    console.log("clicked", this.state.clickedName);
  }

  componentDidMount = () => {
    this.setState({
      names: [
        {
          id: 1,
          name: "Afghanistan"
        },
        {
          id: 2,
          name: "Åland Islands"
        },
        {
          id: 3,
          name: "Albania"
        }
      ]
    });
  };

  render = () => {
    const { classes } = this.props;
    const { names } = this.state;

    const { clickedName } = this.state.clickedName;
    let nameList =
      names.length > 0 &&
      names.map((item, i) => {
        return (
          <MenuItem key={i} value={item.name}>
            {item.name}
          </MenuItem>
        );
      });

    return (
      <div>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor={clickedName}>Select Country</InputLabel>
            <Select value={this.state.name} onChange={this.handleChange}>
              {nameList}
            </Select>
          </FormControl>
        </form>
      </div>
    );
  };
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);

// todo:
// keep state update clickeName
// pass clickedName data to placeholder
// use this as an single dropdown component
