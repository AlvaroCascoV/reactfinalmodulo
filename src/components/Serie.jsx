import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Serie extends Component {
	url = Global.urlApi;

	findSerie = () => {
		let request = "api/series/" + this.props.idSerie;
		axios.get(this.url + request).then((response) => {
			this.setState({
				serie: response.data,
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
				<div>
					<ul className="list-group">
						{this.state.serie && (
							<div>
								<li className="list-group-item">
									<img
										src={this.state.serie.imagen}
										alt="imagen de serie"
										style={{ width: "250px", height: "auto" }}
									/>
								</li>
								<li className="list-group-item">
									IMDB: {this.state.serie.puntuacion}
								</li>
								<li className="list-group-item">
									<NavLink
										className="btn btn-primary"
										to={"/personajes/" + this.state.serie.idSerie}
									>
										Personajes
									</NavLink>
								</li>
							</div>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
