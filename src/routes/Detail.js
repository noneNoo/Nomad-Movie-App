import React from 'react';

// function Detail({ location }) {
//   console.log(location);
//   return <span>Hello</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // 영화 클릭 없이 movie-detail페이지로 바로 들어왔을 시
    if (location.state === undefined) {
      // 메인 페이지로 리다이렉트 해주기
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
