import React from 'react';
import styled from 'styled-components';
import {Link, TitleSection, FileStatus} from 'components';
import {size, palette, font} from 'styled-theme';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Comment from 'material-ui/svg-icons/communication/comment';
import Divider from 'material-ui/Divider';

const Wrapper = styled.div `

.card{

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 8px, rgba(0, 0, 0, 0.23) 0px 3px 8px !important;
  }
}

.card-title{
  padding: 0px 10px 10px 10px !important;
}

.card-title  > span:first-child{
  font-size: ${font('xxs')} !important;
  font-weight: lighter;
  font-style: italic;
	color: ${palette('basescale', 2)} !important;
}
.card-title  > span:last-child{
  font-size: 10px !important;
}


.card-actions{
  padding: 0px !important;

  button{
    font-size: 13px !important;
    background:  ${palette('basescale', 10)} !important;;
    padding: 0 12px !important;
    height: 30px !important;
    line-height: 30px !important;
    color:white !important;
    border-radius: 0px !important;
    div{
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
       max-width: 200px;
    }

  }
}
`

class FileCard extends React.Component {

  constructor(props) {
    super(props);
  }

  title(text){
    return text.split(' ').slice(0,2).join(' ');
  }
  subtitle(text){
    return text.split(' ').slice(2).join(' ');
  }

  render() {

    return (
      <Wrapper>
        <Link to={`/file/summary/${this.props.record._id}`}>
          <Card className="space-card card">
            <CardMedia>
              <img src="/default/file.png"/>
            </CardMedia>
            <FileStatus title="EN"/>
            <CardTitle title={this.title(this.props.record.scientificNameSimple)} className="card-title" subtitle={this.subtitle(this.props.record.scientificNameSimple)}/>
            <CardActions className="card-actions align-center">
              <FlatButton fullWidth={true} className="align-left padding">
                {this.props.record.creation_date}
              </FlatButton>
            </CardActions>
          </Card>
        </Link>
      </Wrapper>
    )
  }
}

export default FileCard;
