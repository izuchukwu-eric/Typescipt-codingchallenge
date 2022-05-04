const Airtable = require("airtable");
var base = new Airtable({apiKey: 'keyRha6sNAIv7Pwhg'}).base('app8ZbcPx7dkpOnP0');

export enum Tables {
  Classes = "Classes",
  Students = "Students"

}

export const getRecord = (tableName: Tables, maxRecords?: number, view : string = "Grid view") => {
  let result: any = {}

  if(maxRecords) result["maxRecords"] = maxRecords
  if(view) result["view"] = view

  return new Promise((resolve, reject) => {
    base(tableName).select({
      filterByFormular: `FIND("${result}", {Name})`
    })
    .eachPage((records: any, getNextPage: () => {}) => {
      return resolve({
        records,
        getNextPage
      })
    }, (error: any) => {
      if(error) {console.error(error); return reject({error})}
    })
  })
};


export const getRecordById = (tableName: Tables, id: string) => {

  return new Promise((resolve, reject) => {
    base(tableName).find(id, (error: any, record: any) => {
      if (error) {
        return reject({
          error
        })
      }
      return resolve({
        record
      })
    })
  })
}
