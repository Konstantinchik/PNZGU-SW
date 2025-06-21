<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplicationCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'file' => 'required|mimes:pdf,doc,docx',
            'direction_id' => 'required',

            'users' => 'required|array',
            'users.*.name' => 'required|string',
            'users.*.phone' => 'required|string',
            'users.*.place' => 'required|string',
            'users.*.position' => 'required|string',
            'users.*.email' => 'required|email',
            'users.*.status' => 'required|integer|in:1,2',
        ];
    }
}
