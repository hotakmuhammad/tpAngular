import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { TitleComponent } from './components/title/title.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { PresentationComponent } from './components/shop-details/presentation/presentation.component';
import { AboutComponent } from './components/shop-details/about/about.component';
import { LocationComponent } from './components/shop-details/location/location.component';
import { InformationComponent } from './components/shop-details/information/information.component';
import { DescriptionComponent } from './components/product-details/sigleProductDetail/description/description.component';
import { FicheTechniqueComponent } from './components/product-details/sigleProductDetail/fiche-technique/fiche-technique.component';
import { DonnerAvisComponent } from './components/product-details/sigleProductDetail/donner-avis/donner-avis.component';
import { DemandeDevisComponent } from './components/product-details/sigleProductDetail/demande-devis/demande-devis.component';



export const routes: Routes = [

    {
        path: '',
        component: TitleComponent,
    },
    {
        path: 'products', 
        component: ProductsComponent
     
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent,
        children: [
            {
                path: 'description',
                component: DescriptionComponent
            },
            {
                path: 'fiche-technique',
                component: FicheTechniqueComponent
            },
            {
                path: 'donner-avis',
                component: DonnerAvisComponent
            },
            {
                path: 'demande-devis',
                component: DemandeDevisComponent
            }
        ]
    },
    {
        path: 'boutique',
        component: BoutiqueComponent,
        children: [
            {
                path: 'presentation',
                component: PresentationComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'locations',
                component: LocationComponent
            },
            {
                path: 'information',
                component: InformationComponent
            }
        ]

   


    },

];
