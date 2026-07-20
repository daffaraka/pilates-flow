<?php

namespace App\Filament\Resources\PilatesClasses\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class PilatesClassForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Select::make('category')
                    ->options([
            'mat' => 'Mat',
            'reformer' => 'Reformer',
            'tower' => 'Tower',
            'chair' => 'Chair',
            'ladder_barrel' => 'Ladder barrel',
            'prenatal' => 'Prenatal',
            'yoga' => 'Yoga',
            'core_mobility' => 'Core mobility',
        ])
                    ->default('mat')
                    ->required(),
                Select::make('level')
                    ->options(['pemula' => 'Pemula', 'menengah' => 'Menengah', 'lanjutan' => 'Lanjutan', 'semua' => 'Semua'])
                    ->default('semua')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                TextInput::make('photo'),
                TextInput::make('duration_minutes')
                    ->required()
                    ->numeric()
                    ->default(60),
                TextInput::make('equipment'),
                TextInput::make('focus_area'),
                TextInput::make('capacity')
                    ->numeric(),
                Toggle::make('is_active')
                    ->required(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
