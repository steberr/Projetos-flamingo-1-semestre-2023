import './App.css'

function App() {
  const nome = "Daniel"
  let idade = 23
  function soma(a,b) {
    return a + b
  }
  return (
    <div className='ads'>
      <p>Ola seja bem vindo! {nome}</p>
      <p>Minha Idade: {idade}</p>
      <p>A soma de 9+9={soma(9, 9)}</p>
    </div>
  )
}

export default App
