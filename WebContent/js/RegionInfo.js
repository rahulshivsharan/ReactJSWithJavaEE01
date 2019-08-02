			var RegionInfo = React.createClass({
				getInitialState : function(){
					return {
						"regionCode" : this.props.match.params.regionCode,
						"regionReqObj" : [],
						"isLoading" : false
					}
				},
				componentDidMount : function(){
					this.getRegionInfo();
				},
				componentDidUpdate : function(nextProps, prevState,snapshot){
					if(this.props.match.params.regionCode !== nextProps.match.params.regionCode){
						this.getRegionInfo();	
					}
				},
				getRegionInfo : function(){
					var selectedInfoList = [], 
						selectedRegion = this.state.regionCode,
						url = "https://restcountries.eu/rest/v2/regionalbloc/" + selectedRegion,
						date = new Date(),
						me = this;
					
					url += "?date"+ date.getTime();
					
					
					me.setState({
						"regionReqObj" : [],						
						"isLoading" : true
					});
					
					jQuery.get(url,function(response){						
						me.setState({
							"regionReqObj" : response,
							"isLoading" : false
						});
					}).fail(function(error){
						console.log("error ",error);
					}).always(function(){
						console.log(" Get Reqion Info completed ");
					});
				},
				render : function(){
					if(this.state.isLoading === true){
						return (<div className='spinner-border' role='status'><span className='sr-only'>Loading...</span></div>);
					}else{
						return(
							<table className="table table-striped">	
								<caption>{this.props.name}</caption>
								<thead className="thead-light">								
									<tr>
										<th>Name</th>
										<th>Native Name</th>	
										<th>Region</th>		
										<th>Sub-Region</th>
										<th>Code</th>	
										<th>Capital</th>	
										<th>Demonym</th>
										<th>Languages</th>
										<th>Flag</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.regionReqObj.map(function(infoObj,index){										
											return (
												<tr>
													<td>{infoObj["name"]}</td>
													<td>{infoObj["nativeName"]}</td>	
													<td>{infoObj["region"]}</td>	
													<td>{infoObj["subregion"]}</td>		
													<td>{infoObj["alpha2Code"]}</td>
													<td>{infoObj["capital"]}</td>																		
													<td>{infoObj["demonym"]}</td>
													<td>	
														<ul>
															{
																			
																infoObj.languages.map(function(langObj,j){
																	return (
																		<li>{langObj["name"]}</li>
																	)
																})
															}
														</ul>
													</td>
													<td><img src={infoObj["flag"]} alt={infoObj["name"]} /></td>
												</tr>
											)
										})
									}
								</tbody>	
							</table>
						)
					}
					
				}
			});