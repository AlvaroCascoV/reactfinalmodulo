import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class CreatePersonaje extends Component {
	url = Global.urlApi;
	cajaNombre = React.createRef();
	cajaImagen = React.createRef();
	selectSerie = React.createRef();

	insertPersonaje = (e) => {
		e.preventDefault();
		console.log("Insertar");
		let nuevoPersonaje = {
			idPersonaje: 1, //da igual,autoincrement
			nombre: this.cajaNombre.current.value,
			imagen: this.cajaImagen.current.value,
			idSerie: parseInt(this.selectSerie.current.value),
		};
		let request = "api/personajes";
		console.log("REquest: " + this.url + request);
		axios.post(this.url + request, nuevoPersonaje).then((response) => {
			console.log("Insertado");
			window.location.href = "/";
		});
	};

	loadSeries = () => {
		let request = "api/Series";
		axios.get(this.url + request).then((response) => {
			this.setState({
				series: response.data,
			});
		});
	};

	componentDidMount = () => {
		this.loadSeries();
	};

	state = {
		series: [],
	};

	render() {
		return (
			<div>
				<h1>Crear personaje</h1>
				<form onSubmit={this.insertar}>
					<div className="form-group">
						<label>Nombre</label>
						<input type="text" className="form-control" ref={this.cajaNombre} />
					</div>
					<div className="form-group">
						<label>Imagen</label>
						<input type="text" className="form-control" ref={this.cajaImagen} />
					</div>
					<div className="form-group">
						<label>Serie</label>
						<select ref={this.selectSerie} className="form-select">
							<option />
							{this.state.series.map((serie, index) => {
								return (
									<option key={index} value={serie.idSerie}>
										{serie.nombre}
									</option>
								);
							})}
						</select>
					</div>
					<button className="btn btn-success" onClick={this.insertPersonaje}>
						Insertar
					</button>
				</form>
			</div>
		);
	}
}
