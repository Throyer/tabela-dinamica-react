import React from "react";
import "./App.css";
import Table from "./components/Table";
import ColumnOptions from "./components/ColumnOptions";

interface Pessoa {
  id: number;
  nome: string;
  permissoes?: { id: number; nome: string }[];
  endereco?: {
    id?: number;
    cidade: string;
    estado: string;
  };
  active?: boolean;
}

const click = (pessoa: Pessoa) => console.log(pessoa);

const actions: ColumnOptions<Pessoa> = {
  title: "Ações",
  render: (pessoa) => (
    <>
      <button style={{ marginRight: 3 }} onClick={() => click(pessoa)}>
        Show
      </button>
      <button style={{ marginLeft: 3 }} onClick={() => click(pessoa)}>
        Remove
      </button>
    </>
  ),
};

const pessoas: Pessoa[] = [
  { id: 1, nome: "Cabelinho", endereco: { cidade: "Londrina", estado: "PR" } },
  { id: 2, nome: "Renatinho", permissoes: [{ id: 1, nome: "ADM" }] },
  {
    id: 3,
    nome: "José Ricardo",
    permissoes: [
      { id: 1, nome: "ADM" },
      { id: 2, nome: "USER" },
    ],
  },
  { id: 4, nome: "Douglinha", active: true },
];

const colunas: ColumnOptions<Pessoa>[] = [
  actions,
  { property: "id" },
  { property: "nome" },
  {
    title: "Endereço",
    defaultValue: "Não informou o endereço.",
    render: ({ endereco }) => {
      if (endereco?.estado && endereco?.cidade) {
        return `${endereco?.estado} - ${endereco?.cidade}`;
      }
    },
  },
  {
    property: "permissoes",
    render: (pessoa) => pessoa?.permissoes?.map(({ nome }) => nome).join(", "),
    defaultValue: "Não tem nenhuma permissão.",
  },
  { property: "active", defaultValue: "Não informado" },
];

function App() {
  return (
    <div className="shadow">
      <Table data={pessoas} columns={colunas} />
    </div>
  );
}

export default App;
