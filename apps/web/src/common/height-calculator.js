const SINGLE_LINE_HEIGHT = 1.4;
const DEFAULT_FONT_SIZE = document.getElementById("p").clientHeight - 1;
console.log("HEIGHT", DEFAULT_FONT_SIZE);
const MAX_HEIGHTS = {
  note: SINGLE_LINE_HEIGHT * 7 * DEFAULT_FONT_SIZE,
  notebook: SINGLE_LINE_HEIGHT * 7 * DEFAULT_FONT_SIZE,
  generic: SINGLE_LINE_HEIGHT * 4 * DEFAULT_FONT_SIZE,
};

function getNoteHeight(item) {
  const { notebooks, headline } = item;
  let height = SINGLE_LINE_HEIGHT * 3;
  //if (title.length > 35) height += SINGLE_LINE_HEIGHT;
  if (headline?.length > 0) height += SINGLE_LINE_HEIGHT * 2;
  else height += SINGLE_LINE_HEIGHT;
  if (notebooks?.length) height += SINGLE_LINE_HEIGHT;

  return height * DEFAULT_FONT_SIZE;
}

function getNotebookHeight(item) {
  const { topics, description, title } = item;
  // at the minimum we will have a title and the info text
  let height = SINGLE_LINE_HEIGHT * 3; // 2.8 = 2 lines

  if (title.length > 35) {
    height += SINGLE_LINE_HEIGHT; // title has become multiline
  }

  if (topics.length > 0) {
    height += SINGLE_LINE_HEIGHT;
  }

  if (description?.length > 0) {
    height += SINGLE_LINE_HEIGHT * 2;
  }

  return height * DEFAULT_FONT_SIZE;
}

function getItemHeight(item) {
  const { title } = item;
  // at the minimum we will have a title and the info text
  let height = SINGLE_LINE_HEIGHT * 3; // 2.8 = 2 lines

  if (title.length > 30) {
    height += SINGLE_LINE_HEIGHT; // title has become multiline
  }

  return height * DEFAULT_FONT_SIZE;
}

export { getNoteHeight, getNotebookHeight, getItemHeight, MAX_HEIGHTS };
