import React from 'react'
import styled from 'styled-components'
import CircularProgress from 'material-ui/CircularProgress'


const Wrapper = styled.div`
text-align: center;
padding: 40px 20px;
.text{
  color:#555;
  font-size: 12px;
  padding-top: 10px;
  font-weight: lighter;

}
`
export default class Loading extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper className="animated fadeInUp">
        <CircularProgress size={30} thickness={3} color={'#EF7748'} />
        {this.props.text && <div className="text">{this.props.text}</div>}
      </Wrapper>
    )
  }
}
