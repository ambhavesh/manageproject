const cds = require('@sap/cds');

module.exports = (srv => {
    // srv.on("fetchEmployee", async (req) => {
    //     const db = await cds.connect.to('db');
    //     let { companyId } = req.data;
    //     let sEmployeeTable = '8868CB2F65694124A03D5578B6773837.MANAGEPROJECT_DB_SCHEMA_T_EMPLOYEE';
    //     let sCompanyTable = '8868CB2F65694124A03D5578B6773837.MANAGEPROJECT_DB_SCHEMA_M_COMPANY';
    //     let sQuery = `SELECT DISTINCT E.empId,E.empName FROM ${sEmployeeTable} as E 
    //                 INNER JOIN ${sCompanyTable} as C ON C.companyId=E.empCompany_companyId 
    //                 WHERE C.companyId=${companyId}`;
    //     try {
    //         let tx = db.tx();
    //         const aEmployee = await tx.run(sQuery);
    //         const oEmployee = {
    //             "status": 200,
    //             "value": aEmployee
    //         };
    //         const { res } = req.http;
    //         res.send(oEmployee);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // });
});