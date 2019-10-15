import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ChartComponent from "./ChartComponent";
import RatingsComponent from "./RatingsComponent";
import TableComponent from "./Table";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: 100,
    margin: theme.spacing(1),
    width: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function HomePage() {
  const classes = useStyles();
  var [values, setValues] = React.useState({
    years: "",
    clickedYear: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
      clickedYear: [event.target.name]
    })),
      function() {
        console.log("clecked", this.state.clickedYear);
      };
  }

  return (
    <div>
      <h2>select component</h2>
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-years-simple">
            Select Year
          </InputLabel>
          <Select
            value={values.years}
            onChange={handleChange}
            labelWidth={labelWidth}
            inputProps={{
              name: "years",
              id: "outlined-years-simple"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2014}>2014</MenuItem>
            <MenuItem value={2013}>2013</MenuItem>
            <MenuItem value={2012}>2012</MenuItem>
            <MenuItem value={2011}>2011</MenuItem>
          </Select>
        </FormControl>
      </form>

      {/* table */}
      <h2>Table component</h2>
      <TableComponent></TableComponent>

      {/* chart */}
      <h2>Chart component</h2>
      <ChartComponent></ChartComponent>

      {/* Ratings */}
      <h2>Ratings</h2>
      <RatingsComponent></RatingsComponent>
    </div>
  );
}
