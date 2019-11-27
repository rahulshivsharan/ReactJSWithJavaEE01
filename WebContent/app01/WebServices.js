define(employeeFn);

function employeeFn(){
	return {
		"getRegionInfo" : getRegionInfo 
	}
}

function getRegionInfo(regionName){
	var date = new Date();
	var url = 'https://restcountries.eu/rest/v2/region/'+regionName+'?datetime='+date.getTime();
	return $.get(url);
}
