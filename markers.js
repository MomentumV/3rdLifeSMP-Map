// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
	// Session One
	{
		// id of the marker group, without spaces/other special chars
		"id" : "session1",
		// name of the marker group, displayed in the webinterface
		"name" : "Session One Markers",
		// icon of the markers belonging to that group (optional)
		"icon" : "poi.png",
		// size of that icon
		"iconSize" : [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault" : true,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"world" : [
				// example marker, pretty format:
				{
					// position ([x, z, y])
					"pos" : [190, 345, 64],
					// title when you hover over the marker
					"title" : "Grandma's worthers originals",
					// text in the marker popup window
					"text" : "Here is where Grian hid two villagers.",
					// override the icon of a single marker (optional)
					//"icon" : "player.png",
					// override the size of the marker icon (optional)
					//"iconSize" : [32, 32]
				},
				// more markers:
				{"pos" : [220, 300, 64], "title" : "The offering"},
				{"pos" : [-131, 333, 64], "title" : "Valley People", 
				 "text" : "Described as 'the nicest part of the map' this is a beautiful beachside hobbit-hole inspired home"},
				{"pos" : [275, 148, 64], "title" : "Ruined Portal"},
				}
			],
		},
	},	
	/*
	// you can also add more complicated markers using the Leaflet API
	// just specify a function which creates the Leaflet API marker objects
	{
		"id" : "test",
		"name" : "Test",
		"createMarker" : function(ui, groupInfo, markerInfo) {
			var latlngs = [];
			// use the ui.mcToLatLng-function to convert Minecraft coords to LatLngs
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p2[0], markerInfo.p2[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p3[0], markerInfo.p3[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p4[0], markerInfo.p4[1], 64));
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], 64));
			
			return L.polyline(latlngs, {"color" : markerInfo.color});
		},
		"markers" : {
			"world" : [
				{
					"p1" : [42, 0],
					"p2" : [0, 0],
					"p3" : [0, 42],
					"p4" : [42, 42],
					"color" : "red",
				},
				{
					"p1" : [73, -42],
					"p2" : [-42, -42],
					"p3" : [-42, 73],
					"p4" : [73, 73],
					"color" : "yellow",
				},
			],
		},
	},
	*/
];
