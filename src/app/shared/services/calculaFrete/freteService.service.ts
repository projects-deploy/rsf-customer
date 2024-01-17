import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FreteService {

    constructor(
        private http: HttpClient
    ) { }


    calcularFrete(localidade: string) {
        const regioes: any = {
            'Norte': ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'],
            'Nordeste': ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
            'Centro-Oeste': ['DF', 'GO', 'MT', 'MS'],
            'Sudeste': ['ES', 'MG', 'RJ', 'SP'],
            'Sul': ['PR', 'RS', 'SC']
        };

        let regiaoEncontrada = '';
        for (const regiao in regioes) {
            if (regioes[regiao].includes(localidade)) {
                regiaoEncontrada = regiao;
                break;
            }
        }

        let dias = 0;
        let frete = 0;
        switch (regiaoEncontrada) {
            case 'Norte':
                frete = 20;
                dias = 7;
                break;
            case 'Nordeste':
                frete = 15;
                dias = 5;
                break;
            case 'Centro-Oeste':
                frete = 18;
                dias = 3;
                break;
            case 'Sudeste':
                frete = 12;
                dias = 0;
                break;
            case 'Sul':
                frete = 14;
                dias = 1;
                break;
            default:
                frete = 25;
                break;
        }

        const express = {
            id: 1,
            name: 'Express',
            value: 'express',
            time: 3 + dias,
            selected: false,
            price: frete + (frete * 0.25)
        };

        const sedex = {
            id: 2,
            name: 'Sedex',
            value: 'sedex',
            time: 7 + dias,
            selected: false,
            price: frete + (frete * 0.50)
        };

        const pac = {
            id: 3,
            name: 'PAC',
            value: 'pac',
            time: 14 + dias,
            selected: false,
            price: frete + (frete * 1.015)
        };

        return [
            express,
            sedex,
            pac
        ];
    }

    getAddress(cep: string) {
        return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}
