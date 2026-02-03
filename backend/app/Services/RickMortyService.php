<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class RickMortyService
{
    public function buscarPersonagens(?string $nome, int $page): array
    {
        $params = ['page' => $page];

        if (!empty($nome)) {
            $params['name'] = $nome;
        }

        $response = Http::get(
            'https://rickandmortyapi.com/api/character',
            $params
        );

        if ($response->status() === 404) {
            return [
                'info' => [
                    'pages' => 0,
                    'count' => 0
                ],
                'results' => []
            ];
        }

        if ($response->failed()) {
            throw new \Exception('Erro ao acessar a API externa');
        }

        return $response->json();
    }

    public function buscarOrigem(string $url): ?array
    {
        $response = Http::get($url);
        return $response->ok() ? $response->json() : null;
    }

    public function buscarEpisodio(string $url): ?array
    {
        $response = Http::get($url);
        return $response->ok() ? $response->json() : null;
    }
}
