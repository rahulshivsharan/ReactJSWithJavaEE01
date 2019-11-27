require(["WebServices","renderUI","jquery"],mainFn);

function mainFn(services,ui,$){
	var getSelectedRegion = getSelectedRegion;
	
	$(".continent_menu").click(getSelectedRegion);
	
	function getSelectedRegion(){
		var regionName = $(this).text();
		console.log("Selected Region "+regionName);
		var p = services.getRegionInfo(regionName);
		$.when(p).then(function(data){			
			template = ui.renderRegion(data);
			
		});
	} // end of method 'getSelectedRegion'
	
} // end of method 'mainFn'

