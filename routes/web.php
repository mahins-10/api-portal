<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\NewPageController;
use App\Http\Controllers\Documentation;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/employee',[guestController::class,'Title'])->name("Title");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /**
     * Project Custome Routes0
     */
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects-create', [ProjectController::class, 'projectCreate'])->name('create.project');
    Route::post('/projects-create', [ProjectController::class, 'projectStore'])->name("project.store");
    Route::get('/projects-edit/{id}', [ProjectController::class, 'projectEdit'])->name("project.edit");
    Route::put('/projects-edit/{id}', [ProjectController::class, 'projectUpdate'])->name("project.update");
    Route::get('/projects-delete/{id}', [ProjectController::class, 'projectDelete'])->name("project.delete");
    // Route::get('/projects-edit', [ProjectController::class, 'projectEdit']);

    // Page Controller
    Route::get('/page-create', [PageController::class, 'pageCreate'])->name('create.page');
    Route::post('/page-create', [PageController::class, 'pageStore'])->name('page.store');
    Route::get('/page-all-page', [PageController::class, 'allPage'])->name('page.allPage');
    Route::get('/page-by-project/{id}', [PageController::class, 'allPageByProject'])->name('page.allPageByProject');
    Route::get('/page-edit/{id}', [PageController::class, 'pageEdit'])->name('page.edit');
    Route::put('/page-edit/{id}', [PageController::class, 'pageUpdate'])->name('page.update');
    Route::get('/page-delete/{id}', [PageController::class, 'pageDelete'])->name('page.delete');
    Route::get('/page-info', [PageController::class, 'pageInformation'])->name('info.page');
    Route::post('/page-info', [PageController::class, 'pageInfoStore'])->name('info.page.store');
    Route::get('/page-info-edit/{id}', [PageController::class, 'pageInfoEdit'])->name('info.page.edit');
    Route::put('/page-info-edit/{id}', [PageController::class, 'pageInfoUpdate'])->name('info.page.update');
    Route::get('/page-info-delete/{id}', [PageController::class, 'pageInfoDelete'])->name('info.page.delete');

// New Page Controller
Route::get('/newpage-home', [NewPageController::class, 'Home'])->name('newpage.home');
Route::get('/newpage-about', [NewPageController::class, 'About'])->name('newpage.about');
Route::get('/newpage-blog', [NewPageController::class, 'Blog'])->name('newpage.blog');
Route::get('/newpage-service', [NewPageController::class, 'Service'])->name('newpage.service');
Route::get('/newpage-contact', [NewPageController::class, 'Contact'])->name('newpage.contact');
Route::get('/newpage-table', [NewPageController::class, 'Table'])->name('newpage.table');
Route::get('/newpage-dashboard', [NewPageController::class,'Dashboard'])->name('newpage.dashboard');
Route::get('/routing-page', [NewPageController::class,'Routingpage'])->name('routing.page');


//Documentation Controller


Route::get('/documentation-page', [Documentation::class,'Documentation'])->name('documentation.page');
Route::get('/documentation-define', [Documentation::class,'Defining_routes'])->name('documentation.define');
Route::get('/documentation-streaming', [Documentation::class,'Streaming'])->name('documentation.streaming');


});




require __DIR__.'/auth.php';
