<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


## About App
* <b>алгоритм установки laravel-vue-spa</b>

- `$ git clone git@github.com:vivelekostas/laravel-vue-spa.git`
- `alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'`
- `sail downdocker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs` 
- `$ cp .env.example .env`
- `$ sail artisan key:generate` 
- `$ sail artisan migrate` 
- `$ sail npm install` 
- `$ sail npm run dev` 


