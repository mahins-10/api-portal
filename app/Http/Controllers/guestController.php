<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class guestController extends Controller
{
    //
    public function adminlayout()
    {
        return Inertia::render('Title');
    }

    public function employee(){
        return Inertia::render('Meta Description');
    }
}



