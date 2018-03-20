import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import classNames from 'classnames';

class WorksListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };
  }

  componentDidMount() {
    // setTimeout(function() { this.setState( {visibility: true} ); }.bind(this), 400 * (this.props.i + 1));
  }

  render () {
    const work = this.props.work;

    return (
      <div className={classNames('works_list_item', { 'active': this.state.visibility })}>
        <a href={work.url} target="_blank" className="url">
          <img src={work.image} />
        </a>
      </div>
    );
  }
}

WorksListItem.propTypes = {
  work: PropTypes.object
};

class WorksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: [],
    }
  }

  fetchData() {
    axios.get(this.props.works_path)
      .then(res => {
        this.setState({
          works: res.data.works
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render () {
    const works = this.state.works;

    if(works.length == 0) {
      return null;
    }

    return (
      <div className="works_list">
        {works.map((work, i) =>
          <WorksListItem key={i} work={work} />
        )}
      </div>
    )
  }
}

WorksList.propTypes = {
  works_path: PropTypes.string
};

class Works extends React.Component {
  render () {
    return (
      <WorksList {...this.props} />
    );
  }
}

Works.propTypes = {
  works_path: PropTypes.string
};

export default Works;
