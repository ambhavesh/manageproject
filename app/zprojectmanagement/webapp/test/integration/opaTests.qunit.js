sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zprojectmanagement/test/integration/FirstJourney',
		'zprojectmanagement/test/integration/pages/ProjectSetList',
		'zprojectmanagement/test/integration/pages/ProjectSetObjectPage',
		'zprojectmanagement/test/integration/pages/EmployeeSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectSetList, ProjectSetObjectPage, EmployeeSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zprojectmanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectSetList: ProjectSetList,
					onTheProjectSetObjectPage: ProjectSetObjectPage,
					onTheEmployeeSetObjectPage: EmployeeSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);