			var BrowserRouter = ReactRouterDOM.BrowserRouter;
			var Route = ReactRouterDOM.Route;
			var Link = ReactRouterDOM.Link;
			var regionList = [
				{
					display : "European Union",
					value : "EU"
				},
				{
					display : "European Free Trade Association",
					value : "EFTA"
				},
				{
					display : "Caribbean Community",
					value : "CARICOM"
				},
				{
					display : "Pacific Alliance",
					value : "PA"
				},
				{
					display : "African Union",
					value : "AU"
				},
				{
					display : "Union of South American Nations",
					value : "USAN"
				},
				{
					display : "Eurasian Economic Union",
					value : "EEU"
				},
				{
					display : "Arab League",
					value : "AL"
				},
				{
					display : "Association of Southeast Asian Nations",
					value : "ASEAN"
				},
				{
					display : "Central American Integration System",
					value : "CAIS"
				},
				{
					display : "Central European Free Trade Agreement",
					value : "CEFTA"
				},
				{
					display : "North American Free Trade Agreement",
					value : "NAFTA"
				},
				{
					display : "South Asian Association for Regional Cooperation",
					value : "SAARC"
				}	
			];

			var Main = React.createClass({
				render : function(){
					return (
						<BrowserRouter>
							<Route exact path="/">
								<App />
							</Route>
						</BrowserRouter>
					)
				}
			});

			ReactDOM.render(<Main />,document.getElementById("mainContainer"));
