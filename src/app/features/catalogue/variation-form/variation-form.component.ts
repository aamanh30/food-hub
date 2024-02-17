import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormGroup
} from '@angular/forms';
import {
  AddOn,
  Customization,
  CustomizedMenuItem
} from 'src/app/shared/models';

@Component({
  selector: 'app-variation-form',
  templateUrl: './variation-form.component.html',
  styleUrls: ['./variation-form.component.scss']
})
export class VariationFormComponent {
  @Output() addItem = new EventEmitter<Partial<CustomizedMenuItem>>();
  @Input() menuItem: CustomizedMenuItem | undefined;
  @Input() customizations: AbstractControl<unknown, unknown> | null =
    new UntypedFormGroup({});
  @Input() addOns: AbstractControl<unknown, unknown> = new UntypedFormGroup({});

  onCustomizationChanged(index: number): void {
    const customizations = (<Customization[]>(
      ((<FormArray>this.customizations).value ?? [])
    )).map((customization, i) => ({
      ...customization,
      selected: i === index
    }));

    this.customizations?.setValue(customizations);
  }

  onAddOnsChanged(index: number, { target }: Event): void {
    const addOns = (<AddOn[]>((<FormArray>this.addOns).value ?? [])).map(
      (addOn, i) => ({
        ...addOn,
        selected:
          i === index ? !!(<HTMLInputElement>target)?.checked : addOn.selected
      })
    );

    this.addOns?.setValue(addOns);
  }

  onAddItem(): void {
    this.addItem.emit({
      customizations: <Customization[]>this.customizations?.value ?? [],
      addOns: <AddOn[]>this.addOns?.value ?? []
    });
  }
}
