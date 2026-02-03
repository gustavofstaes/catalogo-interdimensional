<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonagemController;

Route::get('/personagens', [PersonagemController::class, 'index']);
