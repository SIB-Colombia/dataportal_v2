import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import { SpeciesRow, Loading } from 'components'

const Wrapper = styled.div`
  margin: 20px 0px;
  text-align: center;

  .font {
    color: #4B5353 !important;
    font-size: 15px !important;
  }

  .pagination {
    margin-top: 20px;
  }
`

export default class SpeciesTable extends Component {

  static propTypes = {
    species: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      total: 20,
      display: 7,
      number: 1,
    }
  }

  render() {
    return (
      <Wrapper>
        {this.props.species && <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="font"># de Registros</TableHeaderColumn>
              <TableHeaderColumn className="font">Nombre Cientifico</TableHeaderColumn>
              <TableHeaderColumn className="font">Reino</TableHeaderColumn>
              <TableHeaderColumn className="font">Filo</TableHeaderColumn>
              <TableHeaderColumn className="font">Clase</TableHeaderColumn>
              <TableHeaderColumn className="font">Orden</TableHeaderColumn>
              <TableHeaderColumn className="font">Familia</TableHeaderColumn>
              <TableHeaderColumn className="font">Generó</TableHeaderColumn>
              <TableHeaderColumn className="font">Epíteto Específico</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.species.map((species, i) => (
              <SpeciesRow key={i} species={species} />
            ))}
          </TableBody>
        </Table> || <Loading />}
        <div className="pagination">
          <Pagination total={this.state.total} current={this.state.number} display={this.state.display} onChange={number => this.setState({ number })} />
        </div>
      </Wrapper>
    )
  }
}
