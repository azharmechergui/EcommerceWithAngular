import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Produit } from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {

  produits: Produit[];

  constructor(private produitService: ProduitService) { 
    this.produits = produitService.listeProduit();
  }
  
  ngOnInit(): void {
  }

  supprimerProduit(prod : Produit){
    // console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
    if(conf){
    this.produitService.supprimerProduit(prod);
   }
  } 
}
