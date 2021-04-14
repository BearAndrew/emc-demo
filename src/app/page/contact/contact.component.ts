import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
