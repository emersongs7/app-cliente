import { Component } from '@angular/core';
import { FinanceService } from './finance.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  
  taxaCalculada = '0.00';

  riscos = [ ];

  constructor(private service: FinanceService) {
    this.riscos = [ 'A', 'B', 'C' ];
  }

  salvar(form: any){
    const param = {
      nome: form.value.nome,
      limite: form.value.limite,
      risco : form.value.risco,     
      taxa: this.taxaCalculada
    };
    this.service.adicionar(param);
    form.reset();    
  }

  calculoTaxa(value){
    if(value == 'A'){
      this.taxaCalculada = '0.00';
    }else if(value == 'B'){
      this.taxaCalculada = '0.10';
    }else{
      this.taxaCalculada = '0.20';
    }
  }

}
