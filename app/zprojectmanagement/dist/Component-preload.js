//@ui5-bundle zprojectmanagement/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"zprojectmanagement/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("zprojectmanagement.Component",{metadata:{manifest:"json"}})});
},
	"zprojectmanagement/i18n/i18n.properties":'# This is the resource bundle for zprojectmanagement\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Manage Project\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=Manage Project\n',
	"zprojectmanagement/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"zprojectmanagement","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.2","toolsId":"361592a6-7b0e-42f9-a084-5f17552f855e"},"dataSources":{"mainService":{"uri":"srv-api/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"project-manage":{"semanticObject":"project","action":"manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.4","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zprojectmanagement.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProjectSetList","target":"ProjectSetList"},{"pattern":"ProjectSet({key}):?query:","name":"ProjectSetObjectPage","target":"ProjectSetObjectPage"},{"pattern":"ProjectSet({key})/allotedEmployee({key2}):?query:","name":"EmployeeSetObjectPage","target":"EmployeeSetObjectPage"}],"targets":{"ProjectSetList":{"type":"Component","id":"ProjectSetList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/ProjectSet","variantManagement":"Page","navigation":{"ProjectSet":{"detail":{"route":"ProjectSetObjectPage"}}}}}},"ProjectSetObjectPage":{"type":"Component","id":"ProjectSetObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/ProjectSet","navigation":{"allotedEmployee":{"detail":{"route":"EmployeeSetObjectPage"}}}}}},"EmployeeSetObjectPage":{"type":"Component","id":"EmployeeSetObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/ProjectSet/allotedEmployee"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"mpar"}}'
}});