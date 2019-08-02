			var Continent = React.createClass({
				getInitialState : function(){
					return {
						"continentList" : [
							{
								"display" : "Africa",
								"value" : "africa"
							},
							{
								"display" : "Americas",
								"value" : "americas"
							},
							{
								"display" : "Asia",
								"value" : "asia"
							},
							{
								"display" : "Oceania",
								"value" : "oceania"
							},
							{
								"display" : "Europe",
								"value" : "europe"
							}		
						]
					}
				},
				render : function(){
					return (
						<BrowserRouter>
							<div className="row">
								<div className="col-md-3">
									<ul className="list-groups">
									{
										this.state.continentList.map(function(continentObj,index){
											var url = "/WorldInfo/continents/" + continentObj.value;
											return(
												<li className="list-group-item">
													<Link to={url}>{continentObj.display}</Link>
												</li>
											)
									 	})
									}
									</ul>								
								</div>
								<div className="col-md-9">
									<Route exact path="/WorldInfo/continents/:continentCode" component={ContinentInfo} />						
								</div>
							</div>
						</BrowserRouter>
					)
				}
			});