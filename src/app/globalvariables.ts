export class Globalvariables {
  /*Constante d'un code selectionné dans les résultats d'une recherche*/
  codeselect = "";
  /*view connect*/
  connect = false;
  constructor() { }
  /*Mock user name*/
  mockusername="";
  updateCodeSelect(newvalue:string){
    this.codeselect = newvalue;
  }
  /*Code id*/
  codeId:number;

  getCodeId():number{
    return this.codeId;
  }
  updateCodeId(newvalue:number){
    this.codeId = newvalue;
  }

  getCodeSelect():string{
    return this.codeselect;
  }
  updateConnect(newvalue:boolean){
    this.connect = newvalue;
  }
  getConnect(){
    return this.connect;
  }

  updateMockuserName(newvalue:string){
    this.mockusername = newvalue;
  }

  getMockUsername():string{
    return this.mockusername;
  }
}
