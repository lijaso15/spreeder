//toggle
export const setToggle = label => {
  return {
    type: "TOGGLE_" + label
  };
};

//text
export const setText = text => {
  return {
    type: "TEXT",
    text
  };
};

//position
export const setPosition = label => {
  return {
    type: label
  };
};

//WPM
export const setWPM = value => {
  return {
    type: "WPM",
    wpm: value
  };
};

//spreed
export const setSpreeding = swap => {
  return {
    type: "SPREEDING_" + swap
  };
};

//lines
export const setLines = lines => {
  return {
    type: "LINES",
    lines
  };
};

//words
export const setWords = words => {
  return {
    type: "WORDS",
    words
  };
};

//size
export const setSize = size => {
  return {
    type: "FONT",
    size
  };
};
