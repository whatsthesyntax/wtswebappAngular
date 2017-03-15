import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { CodesService } from '../codes.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-seecode',
  templateUrl: './seecode.component.html',
  styleUrls: ['./seecode.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})

export class SeecodeComponent implements OnInit {
  codeselect="";
  codeId:number;
  public tags=[];
  public langage = "";
  logowts = "./assets/index.png";
  constructor(private textarea: TextareaService,
    private router: Router,
  private codeService: CodesService) { }

  ngOnInit() {
    this.codeId = APP_GLOBAL.getCodeId();
    this.codeselect = APP_GLOBAL.getCodeSelect();
    this.codeService.getCode(this.codeId).subscribe((d) => {
      this.tags = d.tags;
      this.langage = d.langage.langage;
    });
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  saveCode(){
    alert('Veuillez vous connecter pour sauvegarder ce code');
    this.router.navigateByUrl('connexion');
  }
}
