<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Http\Requests\ProjectRequest;

class ProjectController extends Controller
{
    function index()
    {
        $projects = Project::latest()->get();
        return Inertia::render('Project/index', compact('projects'));
    }

    function projectCreate()
    {
        return Inertia::render('Project/projectCreate');
    }

    function projectStore(ProjectRequest $request)
    {
        $project = new Project();
        $project->name = $request->input('name');
        $project->url = $request->input('url');
        $project->status = $request->input('status');
        $project->save();
    }

    function projectEdit( $id)
    {
        $project = Project::where('id',$id)->first();
        return response()->json([
            'status' => true,
            'project' => $project,
            'message' => 'success'
        ], 200);
    }

    function projectUpdate(ProjectRequest $request)
    {
        $project = Project::where('id',$request->id)->first();
        $project->name = $request->input('name');
        $project->url = $request->input('url');
        $project->status = $request->input('status');
        $project->update();
    }

    function projectDelete($id)
    {
        $project = Project::where('id',$id)->first();
        $project->delete();
    }
    // function projectEdit()
    // {
    //     return Inertia::render('Project/projectEdit');
    // }

    // function pageCreate()
    // {
    //     return Inertia::render('Project/PageCreate');
    // }
}
