import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import classNames from 'classnames';
import styles from './Instagram.module.css'

class InstagramItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };
  }

  render () {
    const instagram = this.props.instagram;

    return (
      <div className={classNames(styles.instagram_list_item, { 'active': this.state.visibility })}>
        <a href={instagram.permalink} target="_blank" className="url">
          <img src={instagram.media_url} />
        </a>
      </div>
    );
  }
}

InstagramItem.propTypes = {
  instagram: PropTypes.object
};

class Instagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      instagram: [],
    }
  }

  fetchData() {
    axios.get(this.props.instagram_path)
      .then(res => {
        this.setState({
          instagram: res.data.instagram
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render () {
    const instagram = this.state.instagram;

    if(instagram.length == 0) {
      return null;
    }

    return (
      <div className={styles.instagram_list}>
        {instagram.map((insta, i) =>
          <InstagramItem key={i} instagram={insta} />
        )}
      </div>
    )
  }
}

Instagram.propTypes = {
  instagram_path: PropTypes.string
};

class Insta extends React.Component {
  render () {
    return (
      <Instagram {...this.props} />
    );
  }
}

Insta.propTypes = {
  instagram_path: PropTypes.string
};

export default Insta;
