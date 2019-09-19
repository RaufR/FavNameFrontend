import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const labels = {
  1: "I hate this ",
  2: "Some how good",
  3: "Ok",
  4: "I love this",
  5: "Great"
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ""}>
      <div {...other} />
    </Tooltip>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

const useStyles = makeStyles({
  rating1: {
    width: 500,
    display: "flex",
    alignItems: "center"
  }
});

export default function RatingsComponent() {
  const value = 2;
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Side</Typography>
        <div className={classes.rating1}>
          <Rating
            name="hover-side"
            value={value}
            precision={1}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        </div>
      </Box>
    </div>
  );
}