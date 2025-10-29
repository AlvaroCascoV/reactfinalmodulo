import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class UpdatePersonaje extends Component {
	url = Global.urlApi;
	selectSerie = React.createRef();
	selectPersonaje = React.createRef();

	loadPersonajes = () => {
		let request = "api/personajes";
		axios.get(this.url + request).then((response) => {
			this.setState({
				personajes: response.data,
			});
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

	updatePersonaje = (e) => {
		e.preventDefault();
		let request =
			"api/Personajes/" +
			this.selectPersonaje.current.value +
			"/" +
			this.selectSerie.current.value;
		console.log(this.url + request);
		axios.put(this.url + request).then((response) => {
			console.log(response);
			window.location.href = "/personajes/" + this.selectSerie.current.value;
		});
	};

	findSerie = () => {
		let request = "api/series/" + this.selectSerie.current.value;
		axios.get(this.url + request).then((response) => {
			this.setState({
				serieSelec: response.data,
			});
			console.log(response.data);
		});
	};
	findPersonaje = () => {
		let request = "api/personajes/" + this.selectPersonaje.current.value;
		axios.get(this.url + request).then((response) => {
			this.setState({
				personajeSelec: response.data,
			});
			console.log(response.data);
		});
	};

	componentDidMount = () => {
		this.loadPersonajes();
		this.loadSeries();
	};

	state = {
		personajes: [],
		series: [],
		serieSelec: [],
		personajeSelec: [],
	};

	render() {
		return (
			<div>
				<h1>Modificar personaje</h1>
				<form onSubmit={this.updatePersonaje}>
					<div className="form-group">
						<label>Serie</label>
						<select
							ref={this.selectSerie}
							className="form-select"
							onChange={this.findSerie}
						>
							{this.state.series.map((serie, index) => {
								return (
									<option
										key={index}
										value={serie.idSerie}
										data-nombreserie={serie.nombre}
									>
										{serie.nombre}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<label>Personaje</label>
						<select
							ref={this.selectPersonaje}
							className="form-select"
							onChange={this.findPersonaje}
						>
							{this.state.personajes.map((personaje, index) => {
								return (
									<option
										key={index}
										value={personaje.idPersonaje}
										data-nombrepersonaje={personaje.nombre}
									>
										{personaje.nombre}
									</option>
								);
							})}
						</select>
					</div>

					<button className="btn btn-success" onClick={this.insertPersonaje}>
						Modificar Personaje
					</button>

					<div style={{ display: "flex" }}>
						{this.state.serieSelec.nombre && (
							<div>
								<span>{this.state.serieSelec.nombre}</span>
								<br />
								<img src={this.state.serieSelec.imagen} alt="imagen" />
							</div>
						)}
						{this.state.personajeSelec.nombre && (
							<div>
								<span>{this.state.personajeSelec.nombre}</span>
								<br />
								<img src={this.state.personajeSelec.imagen} alt="imagen" />
							</div>
						)}
					</div>
				</form>
			</div>
		);
	}
}
