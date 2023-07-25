import { AbstractControl } from "@angular/forms";

export function domainValidator(control: AbstractControl){

    if(control.value?.includes('@capgemini.com')){
        return null;
    }
    else{
        return {'domainValidator':'@capgemini.com missing'};
    }

}

export function stateValidator(control: AbstractControl){

    if(control.value?.toLowerCase() == 'telangana' || control.value?.toLowerCase() == 'andhra pradesh'){
        return null;
    }
    else{
        return {'stateValidator':'only ts ap accepted'};
    }

}