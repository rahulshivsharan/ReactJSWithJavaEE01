			var App = React.createClass({			   				
	           render : function(){
		          return (
						<BrowserRouter>
							<div>
								<div className="container-fluid">
									<nav className="navbar navbar-expand-lg navbar-light bg-light">
										<Link className="navbar-brand" to="/WorldInfo">World Info</Link>
										<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarForWorldInfo" aria-controls="navbarForWorldInfo" aria-expanded="false" aria-label="Toggle navigation">
    										<span className="navbar-toggler-icon"></span>
  										</button>
										<div className="collapse navbar-collapse" id="navbarForWorldInfo">
											<ul className="navbar-nav">
												 <li className="nav-item">
        											<Link className="nav-link" to="/WorldInfo/regions">Region Bloc</Link>
      											 </li>
      											 <li className="nav-item">
        											<Link className="nav-link" to="/WorldInfo/continents">Continents</Link>
      											 </li>
											</ul>
										</div>
									</nav>
									<div className="row">
										<div className="col-md-12">
											<Route exact path="/WorldInfo" component={DefaultView} />
											<Route exact path="/WorldInfo/regions" component={Region} />
											<Route exact path="/WorldInfo/continents" component={Continent} />										
										</div>
									</div>
								</div>
							</div>	
						</BrowserRouter>
					)
				}
			});