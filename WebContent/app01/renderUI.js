define(renderUI);

function renderUI(){
	var renderRegion = renderRegion;
	
	return {
		"renderRegion" : renderRegion 
	};
	
	function renderRegion(data){
		
		var template = "" + 
		"<table class='table'>" +
			"<tr>"+
				"<th>Name</th>" +
				"<th>Capital</th>" +				
				"<th>Sub-Region</th>" +
				"<th>Population</th>" +
				"<th>Flag</th>" +
			"</tr>";
		template + "</table>";
		$("#region-info").html(template);		
		$.each(data,function(idx,info){			
			var template = "" + 
			"<tr>" +
				"<td>"+info["name"]+"</td>" +
				"<td>"+info["capital"]+"</td>" +				
				"<td>"+info["subregion"]+"</td>" +
				"<td>"+info["population"]+"</td>" +
				"<td><img src='"+info["flag"]+"' alt='"+info["name"]+"' height='50' width='70' /></td>" +
			"</tr>";
			$("#region-info table").append(template);
		});
				
		
		return template;
	};
}
