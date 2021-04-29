// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
	// Session One Events
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
			"thirdlife" : [

				{"pos" : [0, 255, 93], "title" : "Impulse finds pants and bread"},
				{"pos" : [-108, 225, 64], "title" : "Refugee Dance Party"},
				{"pos" : [80, 17, 64], "title" : "Tango meets Smallbeans"},
				{"pos" : [79, 87, 62], "title" : "Tango on fire from zombie and get shield"},
				{"pos" : [130, 108, 68], "title" : "Etho gets shield from Smallbeans and Tango"},
				{"pos" : [272, 294, 69], "title" : "Tango and Smallbeans meet Grian and BigB"},
				{"pos" : [190, 345, 73], "title" : "worthers originals"},
				{"pos" : [220, 300, 64], "title" : "The offering"},
				{"pos" : [275, 148, 64], "title" : "Ruined Portal"},
				{"pos" : [-122, -324, 64], "title" : "Former Dark Oak Forest"},
				{"pos" : [-250, 325, 64], "title" : "The Unkown Dark Oak Forest"},

				
				
			],
		},
	},	
	//bases
	{
		// id of the marker group, without spaces/other special chars
		"id" : "bases",
		// name of the marker group, displayed in the webinterface
		"name" : "Bases",
		// icon of the markers belonging to that group (optional)
		"icon" : "home.png",
		// size of that icon
		"iconSize" : [32, 32],
		// whether this marker group is shown by default (optional)
		"showDefault" : true,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"thirdlife" : [
				{"pos" : [197, 71, 78], "title" : "Renchanting"},
				{"pos" : [-131, 333, 62], "title" : "Valley People"},				
				{"pos" : [-302, -90, 100], "title" : "Monopoly Mountain"},
				{"pos" : [-108, 230, 64], "title" : "Refugee Camp"},
				{"pos" : [-18, -10, 90], "title" : "Skizzle Point"},
				{"pos" : [254, 200, 68], "title" : "The Crastle"},
				{"pos" : [-307, 207, 72], "title" : "BigB"},
				
			],
		},
	},	
		//deaths
	{
		// id of the marker group, without spaces/other special chars
		"id" : "deaths",
		// name of the marker group, displayed in the webinterface
		"name" : "Player Deaths",
		// icon of the markers belonging to that group (optional)
		"icon" : "tombstone.png",
		// size of that icon
		"iconSize" : [32, 32],
		// whether this marker group is shown by default (optional)
		"showDefault" : false,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"thirdlife" : [
				{"pos" : [220, 329, 64], "title" : "Scar", "text":"Scar blown up by a creeper that Grian lead to him.", "icon" : "scar-yellow.png"},
				{"pos" : [-249, 9, 64], "title" : "Skizz", "text":"Skizz was defeated by an Enderman in the desert.", "icon" : "skizz-yellow.png"},
				{"pos" : [256, 201, 64], "title" : "Bdubs", "text":"Bdubs towered too high, and a phantom knocked him to his death.", "icon" : "bdubs-yellow.png"},
				
			],
		},
	},	
		//spawns
	{
		// id of the marker group, without spaces/other special chars
		"id" : "spawn locations",
		// name of the marker group, displayed in the webinterface
		"name" : "Starting points",
		// icon of the markers belonging to that group (optional)
		//"icon" : "home.png",
		// size of that icon
		//"iconSize" : [32, 32],
		// whether this marker group is shown by default (optional)
		"showDefault" : true,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"thirdlife" : [

				{"pos" : [10, 267, 94], "title" : "Bdubs", "icon":"Bdubs.png"},
				{"pos" : [8, 263, 96], "title" : "Cleo", "icon":"Cleo.png"},
				{"pos" : [70, 255, 74], "title" : "Impulse", "icon":"Impulse.png"},
				{"pos" : [65, -4, 74], "title" : "Smallbeans", "icon":"Smallbeans.png"},
				{"pos" : [113, 150, 80], "title" : "Etho", "icon":"Etho.png"},
				{"pos" : [-24, -110, 69], "title" : "Scott", "icon":"Smajor1995.png"},
				{"pos" : [180, 331, 78], "title" : "BigB", "icon":"BigB.png"},
				{"pos" : [202, 344, 75], "title" : "LittleWood", "icon":"LittleWood.png"},
				{"pos" : [259, 157, 63], "title" : "Grian", "icon":"Grian.png"},
				{"pos" : [36, 112, 63], "title" : "ReNDoG", "icon":"ReNDoG.png"},
				{"pos" : [77, 34, 67], "title" : "Tango", "icon":"Tango.png"},
				{"pos" : [-90, 327, 87], "title" : "Scar", "icon":"Scar.png"},
				{"pos" : [-294, 140, 62], "title" : "Solidarity", "icon":"Solidarity.png"},
				{"pos" : [-284, -7, 66], "title" : "Skizz", "icon":"Skizz.png"},
			],
		},
	},	
	/*{
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

        return L.polyline(latlngs, {"color" : markerInfo.color}, {"title" : markerInfo.title});
    },
    "markers" : {
        "thirdlife" : [
            {
                "p1" : [42, 0],
                "p2" : [0, 0],
                "p3" : [0, 42],
                "p4" : [42, 42],
                "color" : "red",
				"title" : "inner"
            },
            {
                "p1" : [73, -42],
                "p2" : [-42, -42],
                "p3" : [-42, 73],
                "p4" : [73, 73],
                "color" : "yellow",
            },
			//{"pos" : [-50, -50, 80], "title" : "Test", "icon":"poi2.png"},
        ],
    },
},*/

];
