<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;



class NewPageController extends Controller
{
    //

    public function Home()
    {
        return Inertia::render('NewPage/Home');
    }

    public function About(){
        return Inertia::render('NewPage/About');
    }

    public function Blog(){
        return Inertia::render('NewPage/Blog');
    }
 
    public function Service(){
        return Inertia::render('NewPage/Service');
    }

    public function Contact(){
        return Inertia::render('NewPage/Contact');
    }

    public function Table(){
        return Inertia::render('NewPage/Table');
    }

    public function Dashboard(){
        return Inertia::render('NewPage/Dashboard');
    }



    // =====================================================================================





    public function routingPage(){
        return Inertia::render('Routing/Index');
    }







}
