var strUpdates = new Array;
var intUpdatesMinMax = new Array;
var intUpdatesPath = new Array;
var strUpdatesIconPath = new Array;
var intUpdates = 0;

function Update(UpdateName){
	strUpdates[intUpdates]=UpdateName;
	intApps=intApps+1;
}

//BEGIN LIST (add new Updates below here)
Update("Install Pic SU000001");
Update("Applist SU000002");
Update("menuofficelist SU000003");
//END LIST (add new Updates above here)
parent.Update(1.01);