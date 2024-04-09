<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePersonRequest;
use App\Http\Requests\UpdatePersonRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::all();

        return PersonResource::collection($people);
    }

    public function store(StorePersonRequest $request)
    {
        $person = Person::query()->create($request->validated());

        return response([]);
    }

    public function show(Person $person)
    {
        return new PersonResource($person);
    }

    public function update(UpdatePersonRequest $request, Person $person)
    {
        $person->update($request->validated());

        return response([]);
    }

    public function destroy(Person $person)
    {
        $person->delete();

        return response([]);
    }
}
