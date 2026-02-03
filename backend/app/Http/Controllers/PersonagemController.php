<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SearchLog;
use App\Services\RickMortyService;
use App\Services\TraducoesService;

class PersonagemController extends Controller
{
    public function __construct(
        private RickMortyService $rickMorty,
        private TraducoesService $tradutor
    ) {}

    public function index(Request $request)
    {
        $nome = $request->query('name');
        $page = (int) $request->query('page', 1);

        if ($nome) {
            SearchLog::create([
                'search_term' => $nome,
                'ip_address' => $request->ip()
            ]);
        }

        try {
            $data = $this->rickMorty->buscarPersonagens($nome, $page);
        } catch (\Exception $e) {
            return response()->json([
                'erro' => $e->getMessage()
            ], 500);
        }

        $resultadoFinal = [];

        foreach ($data['results'] as $personagem) {

            $origemNome = 'Desconhecida';
            $dimensaoNome = 'Desconhecida';

            if (!empty($personagem['origin']['url'])) {
                $origem = $this->rickMorty->buscarOrigem(
                    $personagem['origin']['url']
                );

                if ($origem) {
                    $origemNome = $this->tradutor->origem($origem['name']);
                    $dimensaoNome = $this->tradutor->dimensao($origem['dimension']);
                }
            }

            $episodios = [];

            foreach ($personagem['episode'] as $url) {
                $ep = $this->rickMorty->buscarEpisodio($url);

                if ($ep) {
                    $episodios[] = [
                        'nome' => $ep['name'],
                        'data_exibicao' => $this->tradutor->data($ep['air_date'])
                    ];
                }
            }

            $resultadoFinal[] = [
                'nome' => $personagem['name'],
                'status' => $this->tradutor->status($personagem['status']),
                'especie' => $this->tradutor->especie($personagem['species']),
                'origem' => $origemNome,
                'dimensao' => $dimensaoNome,
                'imagem' => $personagem['image'],
                'episodios' => $episodios
            ];
        }

        return response()->json([
            'pagina_atual' => $page,
            'total_paginas' => $data['info']['pages'] ?? 1,
            'total_personagens' => $data['info']['count'] ?? count($resultadoFinal),
            'resultados' => $resultadoFinal
        ]);
    }
}
