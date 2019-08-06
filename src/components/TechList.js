import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  // conceito de Default Props em componente (apenas exemplo)
  static defaultProps = {
    item: 'Não informado',
  };

  // proptypes também poderá ser definida aqui
  static propTypes = {};

  state = {
    newTech: '',
    techs: [],
  };

  componentDidMount() {
    // executa assim que o componente aparece em tela
    const techs = localStorage.getItem('techs');
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    // executa sempre que houver alteração de props ou state
    // ele recebe dois parametros (prevProps, prevState)
    // para saber as props e o state anteriores
    // se não for utilizar alguns desses parâmetro, use "_"
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount() {
    // executa no destroy do componente
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTech) {
      this.setState({
        techs: [...this.state.techs, this.state.newTech],
        newTech: '',
      });
    }
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(item => item !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              item={tech}
              fnDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
