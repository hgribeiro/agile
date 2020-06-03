import React from 'react';

import Header from './components/Header';
import InputFilter from './components/InputFilter';

const data = {
'categorias': [
  {
  "nome": 'celulares',
  "id": '32123123',
  "produtos": [
    { 
      "nome": 'fone',
      "id": 'qwe12312',
      "marcas": [ 
      {
        "nome": 'marca1',
        "id": 'sada332',
        "vendas": [ 1, 12, 22 ],
      },
      {
        "nome": 'marca2',
        "id": 'sd32daso',
        "vendas": [ 15, 16, 22 ],
      }
          
    ]
    },
    {
    "nome": 'celular',
    "id": 'das57ghf',  
    "marcas": [ 
      {
        "nome": 'marca3',
        "id": 'dfsf5555',
        "vendas": [ 13, 17, 2 ],
      },
      {
        "nome": 'marca4',
        "id": 'addnnb',
        "vendas": [ 18, 20, 7 ],
      } 
    ],
  }
  ]
  },
  {
    "nome": 'moto',
    "id": '77f98df',
    "produtos": [
      { 
        "nome": 'capacete',
        "id": 'dfsd55',
        "marcas": [ 
        {
          "nome": 'marca5',
          "id": 'dfds5530',
          "vendas": [ 1, 2, 7 ],
        },
        {
          "nome": 'marca6',
          "id": 'asda333117',
          "vendas": [ 13, 12, 12 ],
        }
            
      ]
      },
      {
      "nome": 'casaco',
      "id": '112211',  
      "marcas": [ 
        {
          "nome": 'marca7',
          "id":'dfsdfsdkk',
          "vendas": [ 11, 11, 2 ]
        },
        {
          "nome": 'marca8',
          "id": '33436234',
          'vendas': [ 11, 12, 12, 12 ]
        },
      ]
     }
    ]
    },
]
  
}



class App extends React.Component {



  render() {
    return (
    <div className="App">
      <Header/>
      <InputFilter
      categorias = {data.categorias}
      />
      
    </div>
  );
}
}

export default App;
