import React, { useContext } from "react";
import { ApiContext } from "../../context"; // Substitua pelo caminho correto

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Atualiza o state para que a próxima renderização mostre a UI alternativa.
        return { hasError: true };
    }

    handleReset = () => {
        const { setFetchState } = this.context; // Obtendo a função setFetchState do contexto
        // Adicione a lógica aqui para resetar o estado para o valor inicial (por exemplo, cidade: "Itapevi")
        setFetchState((prev) => ({ ...prev, cidade: "Itapevi" })); // Atualiza apenas a cidade
        this.setState({ hasError: false }); // Resetando o estado de hasError
    };

    componentDidCatch(error, errorInfo) {
        console.error("Erro capturado:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Você pode renderizar qualquer UI alternativa
            return (
                <div>
                    <h1>Algo deu errado.</h1>
                    <button onClick={this.handleReset}>Voltar para Itapevi</button>
                </div>
            );
        }

        return this.props.children;
    }
}

// Adicionando o contexto ao componente de classe
ErrorBoundary.contextType = ApiContext;
