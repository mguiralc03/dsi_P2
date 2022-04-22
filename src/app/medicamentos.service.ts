import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor() { }

  private medicamentos: Array<Medicamento> = [
    new Medicamento(1, '../assets/images/gelocatil.jpg', 'Gelocatil 650gr', 4.50, 'Alivio sintomático del dolor acasional leve o moderado.', 'Gelocatil es un analgésico, un medicamento para aliviar el dolor de intensidad leve a moderado como el dolor de cabeza, muelas, musculares, espalda y además es útil para bajar la fiebre. La dosis de paracetamol oscila entre los 650 mg y 1 g según las diferentes presentaciones de la familia Gelocatil.', 0, false, false, false, Category.farmacia),
    new Medicamento(2, '../../assets/images/dalsy.jpg', 'Dalsy', 6.71, 'Ibuprofeno por vía oral. Medicamento pediátrico', 'Medicamento que se usa para tratar la fiebre, la hinchazón, el dolor y el enrojecimiento al impedir que el cuerpo elabore sustancias que causan inflamación. Es un tipo de antiinflamatorio no esteroideo .', 0, false, false, false, Category.farmacia),
    new Medicamento(3, '../../assets/images/rhinocort.jpg', 'Rhinocort 64μgr', 8.12, 'Alivio de síntomas nasales. Vía nasal.', 'Alivio de síntomas nasales. Vía nasal. Rhinocort 64 microgramos contiene como principio activo budesonida, que pertenece a un grupo de medicamentos llamados glucocorticoides y se emplea para reducir la inflamación.Rhinocort 64 microgramos reduce la inflamación de la mucosa', 0, true, false, false, Category.farmacia),
    new Medicamento(4, '../../assets/images/valium.jpg', 'Valium 10mg', 1.76, 'El diazepam tiene efectos tranquilizantes y sedantes', ' Benzodiacepina de acción prolongada. Facilita la neurotransmisión fisiológica de carácter inhibidor mediada por GABA en distintas zonas del sistema nervioso central provocando un efecto ansiolítico, sedante, anticonvulsivante y miorrelajante.', 0, true, false, false, Category.farmacia),
    new Medicamento(5, '../../assets/images/muletas.jpg', 'Muletas', 10, 'Alquiler de muletas para uso por lesión', 'La muleta es un apoyo para el cuerpo humano diseñado con el propósito de asistir al caminar cuando una de las extremidades inferiores requiere soporte adicional durante el desplazamiento, comúnmente cuando el ser humano sufre algún tipo de incapacidad para caminar con alguna de estas.', 0, false, false, false, Category.ortopedia),
    new Medicamento(6, '../../assets/images/nivea.jpg', 'Crema de manos', 2.30, 'Crema de manos de Nivea para evitar la sequedad de estas.', 'Su fórmula con Dexpantenol repara en profundidad y suaviza instantáneamente la delicada piel de las manos extrasecas y agrietadas. Además, cuenta con una textura fundente y ligera que penetra en la piel de forma suave y se absorbe rápidamente sin dejar sensación grasa.', 0, false, false, false, Category.parafarmacia)
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