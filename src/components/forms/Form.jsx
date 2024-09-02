import "./form.css";
import { useState } from "react";

const Form = () => {
    const initialForm = {
        nome: "",
        cpf: ""
    };

    const [formState, setFormState] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validacaoNome = (nome) => {
        return nome.trim() !== "";
    };

    const validacaoCpf = (cpf) => {
        const numCpf = /^\d{11}$/;
        return numCpf.test(cpf);
    };

    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name } = target;

        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação dos dados
        const { nome, cpf } = formState;
        const errors = {};
        if (!validacaoNome(nome)) {
            alert("Nome é obrigatório");
        }
        if (!validacaoCpf(cpf)) {
            alert("CPF deve ter 11 dígitos");
        }

        if (Object.keys(errors).length === 0) {
            // Se não há erros, pode enviar os dados
            console.log("Nome: " + formState.nome);
            console.log("CPF: " + formState.cpf);
            setFormState({ ...initialForm });
        } else {
            // Se houver erros, exiba-os
            setErrors(errors);
        }
    };

    return (
        <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form__group_one">
                        <h1>Cadastro de Paciente</h1>

                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput}
                            className="input"
                            placeholder="Insira aqui..."
                        />

                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formState.cpf}
                            onChange={handleInput}
                            className="input"
                            placeholder="Insira aqui..."
                        />

                        <button type="submit" className="text">
                            <span>
                                <b>Enviar</b>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
