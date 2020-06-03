import React from 'react';
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Chart from '../Chart';


export default class InputFilter extends React.Component {
  state = {
    categorias: this.props.categorias,
    produtos: this.props.categorias[0].produtos,
    marcas: this.props.categorias[0].produtos[0].marcas,
    values: this.props.categorias[0].produtos[0].marcas[0].vendas,
    dataBar: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "% of Votes",
          data: this.props.categorias[0].produtos[0].marcas[0].vendas,
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }
  




  handleChange = (e) => {
    e.preventDefault();
    const categoriaEscolhida = e.target.value;
    const IndexDaEscolha = this.props.categorias.findIndex( (categoria) =>  categoria.nome === categoriaEscolhida )
    
    const produtosNovos = this.state.categorias[IndexDaEscolha].produtos;
    const marcasNovas = this.props.categorias[IndexDaEscolha].produtos[0].marcas;
    const values = this.state.marcas[0].vendas;

    let novoEstado = {
      ...this.state
    };
    novoEstado['produtos'] = produtosNovos;
    novoEstado['marcas'] = marcasNovas;
    novoEstado['dataBar'].datasets[0].data = values;
    this.setState(novoEstado);
  }
  
  handleChangeProdutos = (e) => {
    e.preventDefault();
    const ProdutoEscolhido = e.target.value;
    const IndexDaEscolha = this.state.produtos.findIndex( (produto) =>  produto.nome === ProdutoEscolhido )
    
    const marcasNovas = this.state.produtos[IndexDaEscolha].marcas;
    const values = this.state.marcas[0].vendas;
    let novoEstado = {
      ...this.state
    };
    novoEstado['marcas'] = marcasNovas;
    novoEstado['dataBar'].datasets[0].data = values;
    this.setState(novoEstado);
  }
  handleChangeMarca = (e) => {
    const idVendas = e.target.value;
    const indexVendas = this.state.marcas.findIndex( (marca) => marca.id === idVendas );
    const values = this.state.marcas[indexVendas].vendas;
    console.log(values);
    let novoEstado = {
      ...this.state
    };
    novoEstado['dataBar'].datasets[0].data = values;
    this.setState(novoEstado);
  }

  render(){

    return (

      <>
      <label for="categorias">Categoria:</label>
      <select name="categorias" onChange={this.handleChange} >
      {
        this.state.categorias.map(categoria => <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option> )
      }
      </select >
  
      <label for="produtos">Produtos:</label>
      
      <select name="produtos" onChange={this.handleChangeProdutos} >
      {
       this.state.produtos.map(produto => <option key={produto.id} value={produto.nome}>{produto.nome}</option> )
      }
      </select >
  
      <label for="marcas">Marcas:</label>
      <select name="marcas" onChange={this.handleChangeMarca} >
      {
       this.state.marcas.map(marca => <option key={marca.id} value={marca.id}>{marca.nome}</option> )
      }
      </select >

      <MDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
  
      </>
  
      );
  }

  
}

