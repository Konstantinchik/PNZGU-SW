<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Directions;
use Illuminate\Http\Request;

class DirectionController extends Controller
{
    public function index()
    {
        $directions = Directions::all();
        return response()->json(['success' => true, 'data' => $directions]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string',
            'status' => 'required|integer|in:' . implode(',', [
                    Directions::STATUS_ACTIVE,
                    Directions::STATUS_INACTIVE,
                ]),
        ]);

        $direction = Directions::create($validatedData);

        return response()->json(['success' => true, 'data' => $direction]);
    }

    public function show(Directions $direction)
    {
        return response()->json(['success' => true, 'data' => $direction]);
    }

    public function update(Request $request, Directions $direction)
    {
        $validatedData = $request->validate([
            'title' => 'sometimes|string|max:255',
            'icon' => 'sometimes|string',
            'status' => 'sometimes|integer|in:' . implode(',', [
                    Directions::STATUS_ACTIVE,
                    Directions::STATUS_INACTIVE,
                ]),
        ]);

        $direction->update($validatedData);

        return response()->json(['success' => true, 'data' => $direction]);
    }

    public function destroy(Directions $direction)
    {
        $direction->delete();
        return response()->json(['success' => true]);
    }
}
