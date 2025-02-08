import { Component, inject, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss'],
})
export class CustomLoadingComponent   {

  modalCtrl = inject(ModalController);
  @Input() img!: string;
  @Input() title!: string;
  @Input() message!: string;
  @Input() status!: boolean;
  @Input() btnClass!: string;
  @Input() levelCompleted!: boolean;

  constructor() { }


  exit(){
    this.modalCtrl.dismiss({result: 'success'})
  }

  getShadow(){
    if(this.btnClass == 'exit-text-success'){
        return 'box-success'
    }
    else if (this.btnClass == 'exit-text-danger') {
      return 'box-danger'
    }
    else if(this.btnClass == 'exit-text-warning') {
      return 'box-warning'
    }

    else {
      return ''
    }
  }

}
