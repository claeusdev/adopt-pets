import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };

  render() {
    const { active, photos } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              data-index={index}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
