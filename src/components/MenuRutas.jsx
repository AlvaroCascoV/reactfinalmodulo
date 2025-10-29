import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "./../Global";
import axios from "axios";
import logo from "./app/logo.svg";

export default class Menu extends Component {
	url = Global.urlApi;
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
			<nav className="navbar navbar-expand-sm bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img src={logo} style={{ width: "60px" }} alt="Logo" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link active" to="/">
									Inicio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/lista">
									Lista
								</NavLink>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="/"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Entidades
								</a>
								<ul className="dropdown-menu">
									{this.state.series.map((serie, index) => {
										return (
											<li key={index}>
												<NavLink
													className="dropdown-item"
													to={"/serie/" + serie.idSerie}
												>
													{serie.nombre}
												</NavLink>
											</li>
										);
									})}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
