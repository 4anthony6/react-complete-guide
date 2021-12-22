// CARD is a component that act as a "shell" for other ones.
// in that case, it allows to centralize border radius and grey shadow CSS properties.

//the "children" tags indicates that it's a "shell and what matters is what is inside the tags"
import "./Card.css";

const Card = (props) => {
  //in CSS, to add 2 classes to a tag, we use whitespace
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
 