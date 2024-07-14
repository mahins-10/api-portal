<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\PageRequest;
use App\Models\Page;
use App\Models\Project;
use App\Models\MetaDetail;
use App\Http\Requests\PageInformationRequest;
use Illuminate\Support\Str;

class PageController extends Controller
{
    function pageCreate()
    {
        $projects = Project::latest()->get();
        $pages = Page::with('project')->latest()->get();
        return Inertia::render('Page/PageCreate', compact('pages', 'projects'));
    }

    function allPage()
    {
        $allPages = Page::latest()->get();
        return response()->json([
                'status' => true,
                'allPages' => $allPages
            ],200);
    }

    function allPageByProject($id)
    {
        $allPagesByProject = Page::where('project_id',$id)->latest()->get();
        return response()->json([
                'status' => true,
                'allPagesByProject' => $allPagesByProject
            ],200);
    }
    function pageStore(PageRequest $request)
    {
        $page               = new Page();
        $page->title        = $request->input('title');
        $page->project_id   = $request->input('project_id');
        $page->page_slug    = Str::slug($request->input('page_slug'),'-');
        $page->save();
    }

    function pageEdit($id)
    {
        $page = Page::where('id',$id)->first();
        return response()->json([
            'status' => true,
            'page'   => $page
        ],200);
    }

    function pageUpdate(PageRequest $request, $id)
    {
        $page               = Page::where('id',$id)->first();
        $page->title        = $request->input('title');
        $page->project_id   = $request->input('project_id');
        $page->page_slug    = Str::slug($request->input('page_slug'),'-');
        $page->update();
    }
    
    function pageDelete($id)
    {
        $page = Page::where('id',$id)->first();
        $page->delete();
    }

    function pageInformation()
    {
        $projects = Project::latest()->get();
        $pages    = Page::latest()->get();
        $pageInfo = MetaDetail::with(['project', 'page'])->latest()->get();
        return Inertia::render('Page/PageInformation', compact('pageInfo','pages','projects'));
    }

    function pageInfoStore(PageInformationRequest $request)
    {
        $metaInfo = new MetaDetail();
        $metaInfo->project_id       = $request->input('project_id');
        $metaInfo->page_id          = $request->input('page_id');
        $metaInfo->meta_title       = $request->input('meta_title');
        $metaInfo->meta_description = $request->input('meta_description');
        $metaInfo->canonical_tag    = $request->input('canonical_tag');
        $metaInfo->image_alt        = $request->input('image_alt');
        $metaInfo->status           = $request->input('status');
        $metaInfo->save();
        
    }

    function pageInfoEdit($id)
    {
        $pageInfo = MetaDetail::where('id',$id)->first();
        return response()->json([
            'status' => true,
            'pageInfo'   => $pageInfo
        ],200);
    }

    function pageInfoUpdate(PageInformationRequest $request, $id)
    {
        $metaInfo = MetaDetail::where('id',$id)->first();
        $metaInfo->project_id       = $request->input('project_id');
        $metaInfo->page_id          = $request->input('page_id');
        $metaInfo->meta_title       = $request->input('meta_title');
        $metaInfo->meta_description = $request->input('meta_description');
        $metaInfo->canonical_tag    = $request->input('canonical_tag');
        $metaInfo->image_alt        = $request->input('image_alt');
        $metaInfo->status           = $request->input('status');
        $metaInfo->update();
        
    }

    function pageInfoDelete($id)
    {
        $pageInfo = MetaDetail::where('id',$id)->first();
        $pageInfo->delete();
    }
}
