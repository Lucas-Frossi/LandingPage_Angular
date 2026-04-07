import { Component, EventEmitter, Input, Output } from '@angular/core';

type btnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})
export class BtnPrimary {
  @Input("btn-text") btnText: string = "";
  @Input() disable: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: btnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

}
