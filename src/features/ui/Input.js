import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";

const isBlockHash = text =>
  Boolean((text.match(/^[a-fA-F0-9]{64}$/g) || []).length);

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 600
    }
  }
}));

const Input = ({history}) => {
  const classes = useStyles();

  const [text, setText] = useState("");

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handleOnKeyPress = e => {
    if (e.keyCode === 13) {
      if (isBlockHash(text)) {
        history.push(`block/${text}`);
      }
    }
  };

  return (
    <InputBase
      placeholder="Enter block hash..."
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
      inputProps={{"aria-label": "search"}}
      value={text}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyPress}
    />
  );
};

export default withRouter(Input);
