export class Globalvariables {

  constructor() { }
  /*Constante d'un code selectionné dans les résultats d'une recherche*/
  codeselect = "";
  /*view connect*/
  connect = false;
  /*Mock user name*/
  mockusername="";
  updateCodeSelect(newvalue:string){
    this.codeselect = newvalue;
  }
  /*Code id*/
  codeId:number;

  /*code*/
  code;

  getCode(){
    return this.code;
  }

  updateCode(newvalue){
    this.code = newvalue;
  }
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
