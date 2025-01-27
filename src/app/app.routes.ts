import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ServicesComponent } from './services/services.component';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // 404 component

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, 
        data: { 
        title: 'Home Page - MRD', 
        description: 'Welcome to the MRD home page.', 
        keywords: 'home, mrd, angular'
        }
    },  
    { path: 'about', component: AboutComponent ,
        data: { 
        title: 'About Page - MRD', 
        description: 'About Us', 
        keywords: 'about us, about us mrd'
        }
    },
    { path: 'blog', component: BlogComponent,
        data: { 
        title: 'Blog Page - MRD', 
        description: 'Blog', 
        keywords: 'blog, mrd, creation of blog'
        }
    },
    { path: 'doctor', component: DoctorComponent,
        data: { 
        title: 'Doctor Page - MRD', 
        description: 'Our Doctors', 
        keywords: 'about doctor,doctor details'
        }
    },
    {path:'services', component: ServicesComponent,
        data: { 
        title: 'Service Page - MRD', 
        description: 'services detail', 
        keywords: 'services, our services, doctor services'
        }
    },
    { path: '**', component: PageNotFoundComponent },  // route for 404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }