import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-testing-requirments',
  templateUrl: './testing-requirments.component.html',
  styleUrls: ['./testing-requirments.component.scss']
})
export class TestingRequirmentsComponent implements OnInit {
   fileName: any;
   edit = 'show';
   delete = false;
   tableElements: any = [];
  constructor() {
      this.tableElements = [
          {releaseName: 'test version 1.0', testingType: 'Regression',
              low: '12', medium: '12', heigh: '12', persentage: '12%', show: 'show' , hide: 'hide'},
          {releaseName: 'test version 1.0', testingType: 'Regression',
            low: '12', medium: '12', heigh: '12', persentage: '12%', show: 'show' , hide: 'hide'},
          {releaseName: 'test version 1.0', testingType: 'Regression',
           low: '12', medium: '12', heigh: '12', persentage: '12%', show: 'show' , hide: 'hide'},
          {releaseName: 'test version 1.0', testingType: 'Regression',
             low: '12', medium: '12', heigh: '12', persentage: '12%', show: 'show' , hide: 'hide'}
      ];
      console.log(this.tableElements);
  }

  ngOnInit() {
  }
    fileEvent(fileInput: Event) {
        // @ts-ignore
        const file = fileInput.target.files[0];
       this.fileName = file.name;
       console.log(this.fileName);
    }
    clearFile() {
    this.fileName = '';
    }

    // editChange() {
    //     this.edit = !this.edit;
    // }
    deleteFunction() {
      this.delete = !this.delete;
    }
}
