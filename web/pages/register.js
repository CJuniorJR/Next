import react, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import InputCustomizado from '../components/InputCustomizado';
import '../css/materialize.css';

class register extends Component {
  constructor(){
    super();
    this.state = {nome:"", email:"", login:"", senha:""}
    this.cadastrar = this.cadastrar.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }
  
    cadastrar(event){
      event.preventDefault();
      let usuario = {
        nome: this.state.nome,
        email: this.state.email,
        login: this.state.login,
        senha: this.state.senha
    }

      axios.post('http://localhost:8000/usuario',usuario).then(response => {
        console.log(response.data.nome);
      })

    }
  
    divC(){
      let div = {
        display: 'inline-block',
        padding: '32px 48px 0px 48px',
        border: '1px solid #EEE'
      }
      return div;
    };

    imgStyle(){
      let img = {
        width: '250px'
      }
        return img;
    }

    fRight(){
        let righ = {
          float: 'right'
        }
        return righ;
    }

    setNome(event){
      this.setState({nome: event.target.value})
    }

    setEmail(event){
      this.setState({email: event.target.value})
    }

    setLogin(event){
      this.setState({login: event.target.value})
    }

    setSenha(event){
      this.setState({senha: event.target.value})
    }

    render(){
    return(
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
        <div className="section"></div>
            <main>
    <center>
      <img className="responsive-img" style={this.imgStyle()} src="https://i.imgur.com/ax0NCsK.gif" />
      <div className="section"></div>

      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section"></div>

      <div className="container">
        <div className="z-depth-1 grey lighten-4 row" style={this.divC()}>

          <form className="col s12" method="post" onSubmit={this.cadastrar}>
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>

            <div className='row'>
             <InputCustomizado type="text" name="nome" id="nome" label="Nome" value={this.state.nome} onChange={this.setNome} />
            </div>

            <div className='row'>
             <InputCustomizado type="email" name="email" id="email" label="Email" value={this.state.email} onChange={this.setEmail} />
            </div>

            <div className='row'>
             <InputCustomizado type="text" name="login" id="login" label="Login" value={this.state.login} onChange={this.setLogin} />
            </div>

            <div className='row'>
             <InputCustomizado type="password" name="senha" id="senha" label="Senha" value={this.state.senha} onChange={this.setSenha} />
            </div>

            <br />
            <center>
              <div className='row'>
              <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>
              Registrar</button></div>
            </center>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>

    <div className="section"></div>
    <div className="section"></div>
  </main>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
  </div>
    );
};
};

export default register;