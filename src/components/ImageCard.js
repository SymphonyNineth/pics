import React, { Component, createRef } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const image = this.props.image;
    console.log(this.state.spans);
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={image.description}
          src={image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
