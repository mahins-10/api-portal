<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageInformationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'project_id'        => 'required',
            'page_id'           => 'required',
            'meta_title'        => 'required',
            'meta_description'  => 'required',
            'canonical_tag'     => 'required',
            'image_alt'         => 'required',
            'status'            => 'required',
        ];
    }
}
