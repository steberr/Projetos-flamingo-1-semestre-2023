import './App.css'

function App() {
let nome = "Daniel";
let sobrenome = "De Jesus Oliveira";
const dataNascimento ="03/11/1999";

function soma(a,b){
return a+b
}
function subtracao(a,b){
  return a-b
}
function multiplicacao(a,b){
  return a*b
}
function divisao(a,b){
  return a/b
}
  return (
<section>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat atque cumque quia impedit doloremque dicta amet iste aut fugit inventore voluptatum laboriosam molestiae ullam assumenda, voluptas error, magnam, quo quisquam!</p>
<p>Daniel</p>
<p>Meu nome é : {nome}</p>
<p>Meu sobrenome é : {sobrenome}</p>
<p>Minha Data de Nascimento é : {dataNascimento}</p>
<h2>Soma</h2>
<p>o valor da soma de dois numeros é:{soma(3,3)}</p>
<h2>Subtração</h2>
<p>o valor da Subtração de dois numeros é:{subtracao(6,3)}</p>
<h2>Multiplicação</h2>
<p>o valor da Multiplicação de dois numeros é:{multiplicacao(5,5)}</p>
<h2>Divisão</h2>
<p>o valor da Divisão de dois numeros é:{divisao(24,3)}</p>
</section>
  )
}

export default App
