<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;


class Documentation extends Controller
{
    //

    public function Documentation(){
        return Inertia::render('Documentation/Index');
    }

    public function Defining_routes(){
        return Inertia::render('Documentation/Defining_routes');
    }

    public function Streaming(){
        return Inertia::render('Documentation/Streaming');
    }
}

   







