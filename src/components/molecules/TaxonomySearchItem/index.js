import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AutoComplete from 'material-ui/AutoComplete'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Checkbox from 'material-ui/Checkbox'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .active-filter{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #F3F8F8;
  }
`

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
]

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
}

export default class TaxonomySearchItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      open: true,
    }

    this.activeFilter = this.activeFilter.bind(this)
  }

  handleChange = (event, index, value) => this.setState({ value })
  activeFilter() { this.setState({ open: !this.state.open }) }

  render() {
    return (
      <Wrapper onClick={this.activeFilter}>
        <FileSearchItem title="Taxonomía">
          <Grid fluid className="without-padding divider">
            <Row middle="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Checkbox checked label="Tyrannus melacholicus" iconStyle={{ fill: theme.palette.basescale[6] }} />
              </Col>
            </Row>
          </Grid>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            labelStyle={{ color: '#838787' }}
            underlineStyle={{ borderColor: '#FF7847' }}
            iconStyle={{ fill: '#838787' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
          >
            <MenuItem value={1} primaryText="Nombre científico" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <AutoComplete
            hintText="Escriba el nombre científico"
            dataSource={colors}
            menuProps={menuProps}
            underlineStyle={{ borderColor: '#FF7847' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
            hintStyle={{ color: '#838787' }}
          />
          <Grid fluid className="without-padding">
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="..." />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="..." />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="..." />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
          </Grid>
        </FileSearchItem>
        {this.state.open && <Grid fluid className="without-padding" style={{ paddingTop: 10, paddingBottom: 10, background: '#F3F8F8' }}>
          <Row middle="xs" center="xs">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Checkbox checked label="Tyrannus melacholicus" iconStyle={{ fill: theme.palette.basescale[6] }} />
            </Col>
          </Row>
        </Grid>}
      </Wrapper>
    )
  }
}
