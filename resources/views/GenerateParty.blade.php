<!doctype html>
<html>
<head>
@section('title')
<title>Genshin Party Generator</title>
@endsection


<style type="text/css">

</style>
<link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('/css/app.css') }}">

@section('header_content')

@endsection
</head>

<body>
This belongs here:
<br>
Button for Generate party. This triggers combination of (40 C 4). One of them.
<br>

<!-- minimum 3 -->
<input type="number" id="MAXCHAR" value=40></input>

<button type="button" class="btn btn-primary" onclick=RandomFour()>SEARCH COMBINATION</button>

<br>

<h1 id="char1">
    -
</h1>

<h1 id="char2">
    -
</h1>

<h1 id="char3">
    -
</h1>

<h1 id="char4">
    -
</h1>

<hr>
<h1 id="combID">
    X
</h1>

<script src="{{ asset('assets/js/bootstrap.js') }}"></script>
<script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/shuffle.js') }}"></script>
<script src="{{ asset('js/encrypt-decrypt.js') }}"></script>
<script src="{{ asset('js/utility.js') }}"></script>
<script>


</script>
</body>

</html>

