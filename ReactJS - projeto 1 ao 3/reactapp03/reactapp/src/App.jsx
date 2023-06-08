import './App.css'

function App() {

  return (
    <div id = "Cadastro">
    <h1>Cadastro de Novos Funcionários</h1>
  <p> 
  <label for="nome_cadastro">Nome Completo</label>
  <input id="nome_cadastro" name="nome_cadastro" required="required" type="text" placeholder="nome do funcionario" />
  </p>
  <p> 
  <label for="cargo">Cargo</label>
  <input id="cargo" name="cargo" required="required" type="text" placeholder="cargo do funcionario" />
  </p>
  <p> 
  <label for="departamento">Departamento</label>
  <input id="departamento" name="departamento" required="required" type="text" placeholder="departamento do funcionario" />
  </p>
  <p> 
  <label for="email">Email</label>
  <input id="email" name="email" required="required" type="text" placeholder="email do funcionario" />
  </p>
  <p> 
  <label for="telefone">Telefone</label>
  <input id="telefone" name="telefone" required="required" type="text" placeholder="telefone do funcionario" />
  </p>
  <p> 
  <label for="data">Data de Nascimento</label>
  <input id="data" name="data" required="required" type="text" placeholder="data de nascimento" />
  </p>
  <p> 
  <label for="endereco">Endereço</label>
  <input id="endereco" name="endereco" required="required" type="text" placeholder="endereço" />
  </p>
  <p> 
  <label for="cidade">Data de Nascimento</label>
  <input id="cidade" name="cidade" required="required" type="text" placeholder="cidade" />
  </p>
  <p> 
  <label for="estado">Estado</label>
  <input id="estado" name="estado" required="required" type="text" placeholder="estado" />
  </p>
  <p> 
  <input type="submit" value="Cadastrar"/> 
  </p>
  
  </div>
  )
}

export default App
