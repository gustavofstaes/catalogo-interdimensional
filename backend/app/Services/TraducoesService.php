<?php

namespace App\Services;

use Carbon\Carbon;

class TraducoesService
{
    public function status(string $status): string
    {
        return match ($status) {
            'Alive' => 'Vivo',
            'Dead' => 'Morto',
            default => 'Desconhecido'
        };
    }

    public function especie(string $especie): string
    {
        return match ($especie) {
            'Human' => 'Humano',
            'Alien' => 'Alienígena',
            'Robot' => 'Robô',
            'Cronenberg' => 'Cronenberg',
            'Mythological Creature' => 'Criatura Mitológica',
            'Disease' => 'Doença',
            'Humanoid' => 'Humanóide',
            default => $especie
        };
    }

    public function origem(string $origem): string
    {
        if ($origem === 'unknown') {
            return 'Desconhecida';
        }

        return str_replace('Earth', 'Terra', $origem);
    }

    public function dimensao(string $dimensao): string
    {
        if ($dimensao === 'unknown') {
            return 'Desconhecida';
        }

        return str_replace('Dimension', 'Dimensão', $dimensao);
    }

    public function data(string $data): string
    {
        return Carbon::createFromFormat('F j, Y', $data)
            ->locale('pt_BR')
            ->translatedFormat('d \d\e F \d\e Y');
    }
}
