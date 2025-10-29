import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Personajes extends Component {
	url = Global.urlApi;

	loadPersonajes = () => {
		let request = "api/Series/PersonajesSerie/" + this.props.idSerie;
		axios.get(this.url + request).then((response) => {
			this.setState({
				personajes: response.data,
			});
		});
	};

	componentDidMount = () => {
		this.loadPersonajes();
	};

	state = {
		personajes: [],
	};

	render() {
		return (
			<div>
				<h1>Personajes de {this.props.idSerie}</h1>
				<Link to={"/serie/" + this.props.idSerie} className="btn btn-danger">
					Volver
				</Link>
				<table className="table table-primary">
					<thead>
						<tr>
							<th>Personaje</th>
							<th>Imagen</th>
						</tr>
					</thead>
					<tbody>
						{this.state.personajes.map((personaje, index) => {
							return (
								<tr key={index}>
									<td>{personaje.nombre}</td>
									<td>
										<img
											src={personaje.imagen}
											alt="imagen de personaje"
											style={{ width: "250px", height: "auto" }}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
