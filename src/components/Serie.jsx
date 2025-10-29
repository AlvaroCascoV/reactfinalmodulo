import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Serie extends Component {
	url = Global.urlApi;

	findSerie = () => {
		let request = "api/series/" + this.props.idSerie;
		axios.get(this.url + request).then((response) => {
			this.setState({
				Serie: response.data,
			});
		});
	};

	componentDidMount = () => {
		this.findSerie();
	};
	componentDidUpdate = (oldprops) => {
		if (oldprops.idSerie !== this.props.idSerie) {
			this.findSerie();
		}
	};

	state = {
		serie: [],
	};
	render() {
		return (
			<div>
				<h1>Detalles de Serie {this.props.idSerie}</h1>
				<div>
					<ul className="list-group">
						{this.state.serie && (
							<div>
								<li className="list-group-item">
									ID: {this.state.serie.idSerie}
								</li>
								<li className="list-group-item">
									Nombre: {this.state.serie.nombre}
								</li>
								<li className="list-group-item">
									<Link
										className="btn btn-success"
										to="/personaje"
										state={{ idSerie: this.state.serie.idSerie }}
									>
										Personajes
									</Link>
								</li>
							</div>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
// [
//   {
//     "idSerie": 0,
//     "nombre": "string",
//     "imagen": "string",
//     "puntuacion": 0,
//     "anyo": 0
//   }
// ]
