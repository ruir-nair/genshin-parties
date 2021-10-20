@extends('master')
@section('title','Genshin Party Generator')
@section('content')
This belongs here:
<br>
Button for Generate party. This triggers combination of (41 C 4). One of them.
<br>

<!-- minimum 4 -->
<button type="button" class="btn btn-primary" onclick=RandomFour()>RANDOM!</button> | 
Exclude char(s): <input type="string" id="unobtainable"></input> |

<br>

<input type="number" id="searchComboID"></input>

<hr>

<div class="container">
    <div class="row">
        <div class="col-md-6">
            Set combination from here. We'll calculate comboID.
            <input type="text" id="enterCombination"> </input>
            <button type="button" class="btn btn-secondary" onclick=FindComboID()>CALCULATE</button>
            <h2 id="Result_ComboID">
                Result Combination
            </h2>

        </div>
        <div class="col-md-6">
            Search comboID from here. We'll find combination.
            <input type="number" id="entercomboID"> </input>
            <button type="button" class="btn btn-danger" onclick=ReverseRandom()>REVERSE SEARCH</button>
            <h2 id="Combination">
                Result Combination
            </h2>
        </div>
    </div>
</div>
<hr>
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            <div class="card" style="width: 18rem;">
                <!-- <img id = "FullChara1" src="{{url('assets/images/FullChara/Keqing.png')}}" class="rounded mx-auto d-block card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title" id="char1">Character Name 1</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Normal Attack</li>
                    <li class="list-group-item">Elemental Skill</li>
                    <li class="list-group-item">Elemental Burst</li>
                    <li class="list-group-item">Unique Talent</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title" id="char2">Character Name 2</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Normal Attack</li>
                    <li class="list-group-item">Elemental Skill</li>
                    <li class="list-group-item">Elemental Burst</li>
                    <li class="list-group-item">Unique Talent</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title" id="char3">Character Name 3</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Normal Attack</li>
                    <li class="list-group-item">Elemental Skill</li>
                    <li class="list-group-item">Elemental Burst</li>
                    <li class="list-group-item">Unique Talent</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title" id="char4">Character Name 4</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Normal Attack</li>
                    <li class="list-group-item">Elemental Skill</li>
                    <li class="list-group-item">Elemental Burst</li>
                    <li class="list-group-item">Unique Talent</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<hr>
<h1 id="combID">
    X
</h1>

@endsection