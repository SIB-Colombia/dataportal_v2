import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer, StaticAbout} from 'components';

class StaticPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper="Static">
        <StaticAbout/>
      </PageTemplate>
    )
  }
}

export default StaticPage;
