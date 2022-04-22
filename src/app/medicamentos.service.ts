import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor() { }

  private medicamentos: Array<Medicamento> = [
    new Medicamento(1, '../assets/images/gelocatil.jpg', 'Gelocatil 650gr', 4.50, 'Alivio sintomático del dolor acasional leve o moderado.', '', 0, false, false, false, Category.farmacia),
    new Medicamento(2, '../../assets/images/dalsy.jpg', 'Dalsy', 6.71, 'Ibuprofeno por vía oral. Medicamento pediátrico', '', 0, false, false, false, Category.farmacia),
    new Medicamento(3, '../../assets/images/rhinocort.jpg', 'Rhinocort 64μgr', 8.12, 'Alivio de síntomas nasales. Vía nasal.', 'Alivio de síntomas nasales. Vía nasal. Rhinocort 64 microgramos contiene como principio activo budesonida, que pertenece a un grupo de medicamentos llamados glucocorticoides y se emplea para reducir la inflamación.Rhinocort 64 microgramos reduce la inflamación de la mucosa', 0, true, false, false, Category.farmacia),
    new Medicamento(4, '../../assets/images/valium.jpg', 'Valium 10mg', 1.76, 'El diazepam tiene efectos tranquilizantes, sedantes...', '', 0, true, false, false, Category.farmacia),
    new Medicamento(5, '../../assets/images/muletas.jpg', 'Muletas', 10, 'Alquiler de muletas para uso por lesión', '', 0, false, false, false, Category.ortopedia),
    new Medicamento(6, '../../assets/images/nivea.jpg', 'Crema de manos', 2.30, 'Crema de manos de Nivea para evitar la sequedad de estas.', '', 0, false, false, false, Category.parafarmacia)
  ]

  getMedicamentos(){
    return this.medicamentos;
  }

  updateMedicamanto(medicamento: Medicamento){
    for (let med of this.medicamentos){
      if (med.id === medicamento.id){
        med.units = medicamento.units
        med.receta = medicamento.receta
        med.favorite = medicamento.favorite
        med.bought = medicamento.bought
      }
    }
  }
}


export class Medicamento {
  id: number;
  img_source: string;
  title: string;
  price: number;
  desc_short: string;
  desc_long: string;
  units: number;
  receta: boolean;
  favorite: boolean;
  bought: boolean;
  category: Category;

  constructor(id: number, img_source: string, title: string, price: number, desc_short: string, desc_long: string, units: number, receta: boolean, favorite: boolean, bought: boolean, category: Category){
    this.id = id
    this.img_source = img_source;
    this.title = title;
    this.price = price;
    this.desc_short = desc_short;
    this.desc_long = desc_long
    this.units = units;
    this.receta = receta;
    this.favorite = favorite;
    this.bought = bought;
    this.category = category;

  }
}
enum Category {
  farmacia,
  parafarmacia,
  ortopedia
}