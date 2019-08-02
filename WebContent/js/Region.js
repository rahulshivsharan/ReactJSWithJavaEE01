			var Region = React.createClass({
				getInitialState : function(){
					return {
						"regionList" : regionList 
					}
				},
				render : function(){
					return (
						<BrowserRouter>
							<div className="row">
								<div className="col-md-3">
									<ul className="list-groups">
									{
										this.state.regionList.map(function(regionObj,index){
											var url = "/WorldInfo/regions/" + regionObj.value;
											return(				
												<li className="list-group-item">
													<Link to={url}>{regionObj.display}</Link>
												</li>	
											)
									 	})
									}
									</ul>									
								</div>
								<div className="col-md-9">
									<Route exact path="/WorldInfo/regions/:regionCode" component={RegionInfo} />						
								</div>
							</div>
						</BrowserRouter>
					)
				}
			});