import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
	// versao antiga, preciso pegar a que está na pasta do nti
	const times = [
		"Programação",
		"Front-End",
		"Data Science",
		"Devops",
		"UX e Design",
		"Mobile",
		"Inovação e Gestão",
	];

    // ouvindo o evento do formulário
    // posso colocar essa função pra chamar a função que eu quero
	const aoSalvar = evento => {
		evento.preventDefault();
		console.log("Form foi submetido");
	};

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoTexto
					obrigatorio={true}
					label="Nome"
					placeholder="Digite seu nome"
				/>
				<CampoTexto
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite seu cargo"
				/>
				<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
				<ListaSuspensa obrigatorio={true} label="Time" itens={times} />
				<Botao>Criar Card</Botao>
			</form>
		</section>
	);
};

export default Formulario;
