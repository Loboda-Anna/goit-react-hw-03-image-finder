import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalShown: false,
  };

  openModal = () => {
    this.setState({ isModalShown: true });
  };
  closeModal = () => {
    this.setState({ isModalShown: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { isModalShown } = this.state;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.openModal}>
          <img src={webformatURL} alt={tags} />
        </li>
        {isModalShown && (
          <Modal
            imageURL={largeImageURL}
            tags={tags}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
