import React, { useContext } from "react";
import "./erro.css"
import { ApiContext } from "../../context"; // Substitua pelo caminho correto

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, resetClicked: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    handleReset = () => {
        const { setFetchState, setDadosState } = this.context;
        setFetchState({ apiKey: "ea29630a0fa8096384c9b535470337bf", cidade: "brasil" }); 
        setDadosState([]); 
        this.setState({ hasError: false, resetClicked: true });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.resetClicked && !this.state.resetClicked) {
            this.setState({ hasError: false });
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="erro">
                    <h1>Insira um Pais/Cidade valido.</h1>
                    {!this.state.resetClicked && (
                        <button onClick={this.handleReset}>Tentar novamente</button>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}



ErrorBoundary.contextType = ApiContext;
