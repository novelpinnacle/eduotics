import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FrontEndService } from 'src/app/services/frontend.service';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css'],
    standalone: false
})
export class ContactFormComponent implements OnInit {

  disableButton: boolean = false
  status: string

  @ViewChild("form") form: NgForm

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {

  }

  submit(data) {
    this.disableButton = true
    this.frontEndService.saveContactInquiry(data).subscribe((result: any) => {
      this.disableButton = false

      this.status = result.message

      setTimeout(() => this.status = null, 5000)

      if (result.success) {
        this.form.resetForm()
      }

    })
  }

}
