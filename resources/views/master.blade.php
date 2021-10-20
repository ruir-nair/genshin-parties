<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv = "X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>

    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>
<body>


    <!--SIDEBAR FOR MENU -->
    <!-- Character lists -->
    <!-- -->

    <!-- MAIN PANEL -->
    <div class="br-mainpanel">
        <div class=" pd-b-10 pd-t-30 pd-l-30 pd-r-30">
            @yield('header_content')
        </div>

        <div class="br-pagebody mg-t-5 pd-x-30">
            @yield ('content')
        </div>

        <footer class="br-footer">
            <div class="footer-left">
                <div class="mg-b-2">{{ config('constants.name_app') }} {{ config('constants.version_app') }}. Copyright &copy;2021. Nair. All Rights Reserved.</div>
            </div>
        </footer>
    </div>



    <script src="{{ asset('assets/js/bootstrap.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/jquery-3.6.0.js') }}"></script>
    <script src="{{ asset('assets/js/jquery-3.6.0.min.js') }}"></script>
    <script src="{{ asset('js/shuffle.js') }}"></script>
    <script src="{{ asset('js/encrypt-decrypt.js') }}"></script>
    <script src="{{ asset('js/utility.js') }}"></script>
</body>
</html>