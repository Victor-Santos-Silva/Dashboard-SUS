import "./form.css";
import { useState } from "react";

const Form = () => {
    const initialForm = {
        nome: "",
        cpf: ""
    };
    const [formState, setFormState] = useState(initialForm)

    const handleInput = (event) => {
        const target = event.currentTarget;

        const { value, name } = target;

        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nome: " + formState.nome);
        console.log("CPF: " + formState.cpf);
        setFormState({ ...initialForm })
    }

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
                            class="input"
                            placeholder="Insira aqui..."
                        />

                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formState.cpf}
                            onChange={handleInput}
                            class="input"
                            placeholder="Insira aqui..."
                        />
                        <button type="submit" class="text">
                            <span>
                                <b>
                                    Enviar
                                </b>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;