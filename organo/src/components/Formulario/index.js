import CampoTexto from '../CampoTexto/CampoTexto.js'
import './Formulario.css'


const Formulario = () => {
  <section className="formulario'">
    <from>
      <h2>Preencha os dados para criar o card do colaborador.</h2>
			{/* aqui eu passo as propriedades que o componente vai receber lá onde eu implementei ele */}
			<CampoTexto label="Nome" placeholder="Digite seu nome" />
			<CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
			<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
		</from>
	</section>;
}
export default Formulario;