import React from 'react'
import styled from 'styled-components'
import Checkbox from 'material-ui/Checkbox'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import _ from 'lodash'
import { size } from 'styled-theme'


const Wrapper = styled.div`
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3;
  @media ${size('xs')}{
    column-count: 2;
  }
  @media ${size('sm')}{
    column-count: 2;
  }
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);

  .box {
    padding: 2px;
  }
`

class HeaderSearchAdvance extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: 1,
      search: 1,
      biologicalGroup: 1,
      departments: 1,
      ecosystem: 1,
      stateThreat: 1,
      range: 1,
      orderBy: 1,
      license: 1,
    }

    this.filters = {
      grupos_biologicos: [
        {
          name: 'Reino',
          groups: [
            { name: 'Animales', q: 'kingdomName=Animalia' },
            { name: 'Plantas', q: 'kingdomName=Plantae' },
            { name: 'Hongos', q: 'kingdomName=Fungi' },
            { name: 'Bacterias', q: 'kingdomName=Bacteria' },
            { name: 'Protozoos', q: 'kingdomName=Protozoa' },
            { name: 'Arquea', q: 'kingdomName=Archaea' },
            { name: 'Virus', q: 'kingdomName=Viruses' },
          ],
        },
        {
          name: 'Grupos de Animales',
          groups: [
            { name: 'Mamíferos', q: 'className=Mammalia' },
            { name: 'Aves', q: 'className=Aves' },
            { name: 'Reptiles', q: 'className=Reptilia' },
            { name: 'Anfibios', q: 'className=Amphibia' },
            { name: 'Peces', q: 'className=Actinopterygii&className=Sarcopterygii&className=Elasmobranchii&className=Chondrichthyes' },
            { name: 'Insectos', q: 'className=Insecta' },
            { name: 'Escarabajos', q: 'orderName=Coleoptera' },
            { name: 'Mariposas', q: 'orderName=Lepidoptera' },
            { name: 'Hormigas', q: 'familyName=Formicidae' },
            { name: 'Abejas', q: 'familyName=Apidae&familyName=Colletidae&familyName=Halictidae' },
            { name: 'Moscas y zancudos', q: 'orderName=?Diptera' },
            { name: 'Arácnidos', q: 'className=Arachnida' },
            { name: 'Moluscos', q: 'phylumName=Mollusca' },
            { name: 'Decápodos', q: 'orderName=Decapoda' },
            { name: 'Equinodermos', q: 'phylumName=Echinodermata' },
            { name: 'Esponjas', q: 'phylumName=Porifera' },
            { name: 'Corales y afines', q: 'className=Anthozoa&className=Hydrozoa' },
          ],
        },
        {
          name: 'Grupos de Plantas',
          groups: [
            { name: 'Orquídeas', q: 'familyName=Orchidaceae' },
            { name: 'Magnolias y afines', q: 'familyName=Magnoliaceae&familyName=Podocarpaceae&familyName=Myristicaceae' },
            { name: 'Palmas', q: 'familyName=Arecaceae' },
            { name: 'Frailejones', q: 'genusName=Carramboa&genusName=Coespeletia&genusName=Espeletia,Espeletiopsis&genusName=Libanothamnus&genusName=Paramiflos&genusName=Ruilopezia,Tamania' },
            { name: 'Cactus', q: 'familyName=Cactaceae' },
            { name: 'Bromelias, labiadas y pasifloras', q: 'familyName=Bromeliaceae&familyName=Labiatae&familyName=Passifloraceae' },
            { name: 'Fanerógamas', q: 'familyName=Chrysobalanaceae&familyName=Dichapetalaceae&familyName=Lecythidaceae' },
            { name: 'Helechos y afines', q: 'className=Polypodiopsida&className=Lycopodiopsida&className=Equisetopsida&className=Psilotopsida&className=Marattiopsida' },
            { name: 'Zamias', q: 'familyName=Zamiaceae' },
            { name: 'Musgos y afines', q: 'phylumName=Bryophyta&phylumName=Hepaticophyta&phylumName=Anthocerophyta&phylumName=Marchantiophyta' },
          ],
        },
      ],
      explorador_geografico: [
        {
          name: 'País',
          groups: [
            { name: 'Colombia', q: 'Colombia=true' },
            { name: 'Otros países', q: 'Colombia=false' },
          ],
        },
        {
          name: 'Departamento',
          groups: [
            { name: 'Amazonas', q: 'CO-AMA=true' },
            { name: 'Antioquia', q: 'CO-ANT=true' },
            { name: 'Arauca', q: 'CO-ARA=true' },
            { name: 'Archipiélago de San Andrés, Providencia y Santa Catalina', q: 'CO-SAP=true' },
            { name: 'Atlántico', q: 'CO-ATL=true' },
            { name: 'Bogotá, D.C.', q: 'CO-DC=true' },
            { name: 'Bolívar', q: 'CO-BOL=true' },
            { name: 'Boyacá', q: 'CO-BOY=true' },
            { name: 'Caldas', q: 'CO-CAL=true' },
            { name: 'Caquetá', q: 'CO-CAQ=true' },
            { name: 'Casanare', q: 'CO-CAS=true' },
            { name: 'Cauca', q: 'CO-CAU=true' },
            { name: 'Cesar', q: 'CO-CES=true' },
            { name: 'Chocó', q: 'CO-CHO=true' },
            { name: 'Córdoba', q: 'CO-COR=true' },
            { name: 'Cundinamarca', q: 'CO-CUN=true' },
            { name: 'Guainía', q: 'CO-GUA=true' },
            { name: 'Guaviare', q: 'CO-GUV=true' },
            { name: 'Huila', q: 'CO-HUI=true' },
            { name: 'La Guajira', q: 'CO-LAG=true' },
            { name: 'Magdalena', q: 'CO-MAG=true' },
            { name: 'Meta', q: 'CO-MET=true' },
            { name: 'Nariño', q: 'CO-NAR=true' },
            { name: 'Norte de Santander', q: 'CO-NSA=true' },
            { name: 'Putumayo', q: 'CO-PUT=true' },
            { name: 'Quindío', q: 'CO-QUI=true' },
            { name: 'Risaralda', q: 'CO-RIS=true' },
            { name: 'Santander', q: 'CO-SAN=true' },
            { name: 'Sucre', q: 'CO-SUC=true' },
            { name: 'Tolima', q: 'CO-TOL=true' },
            { name: 'Valle del Cauca', q: 'CO-VAC=true' },
            { name: 'Vaupés', q: 'CO-VAU=true' },
            { name: 'Vichada', q: 'CO-VID=true' },
          ],
        },
      ],
      tipos_registro: [
        {
          name: 'Base del registro',
          groups: [
            { name: 'Observaciones humanas', q: 'basisOfRecord=HumanObservation' },
            { name: 'Observaciones con máquina', q: 'basisOfRecord=MachineObservation' },
            { name: 'Especímenes en colecciones', q: 'basisOfRecord=PreservedSpecimen' },
          ],
        },
      ],
    }

    this.search = []
  }

  handleCheck(d) {
    const item = _.findIndex(this.search, (o) => { return o.name === d.name })
    if (item >= 0) {
      this.search.splice(item, 1)
    } else {
      this.search.unshift(d)
    }
    let query = ''
    _.forEachRight(this.search, (value, key) => {
      if (key === this.search.length - 1) {
        query += value.q
      } else {
        query += `&${value.q}`
      }
    })
    window.history.pushState('data to be passed', 'Title of the page', `/search/table?${query}`)
    this.props.url(query)
  }

  render() {
    return (
      <Wrapper>
        {
          _.map(this.filters, (value) => (
            _.map(value, (row, key) => (
              <div key={key}>
                <Subheader>{row.name}</Subheader>
                <div className="box">
                  <Divider inset />
                  {
                    _.map(row.groups, (column, key) => (
                      <Checkbox key={key} label={column.name} name={column.name} value={column.q} onCheck={() => this.handleCheck(column)} />
                    ))
                  }
                </div>
              </div>
            ))
          ))
        }
      </Wrapper>
    )
  }
}

export default HeaderSearchAdvance
