import React from 'react';
import './table.scss';
import { EstacoesEnum, IluminacaoEnum, PropagacaoEnum, RegaEnum } from './Enums';

function Table({
  dados = {nome: '', outrosNomes: [{nome: ''}]}
  }) {
  return (
    <ul className="table">
      <li className="table__row table__row--dark">
        <span className="table__title">
          Nome popular
        </span>
        <span className="table__content">
          { dados.nome || '—'}
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Outros Nomes
        </span>
        <span className="table__content">
          { dados.outrosNomes
              ? dados.outrosNomes.map(dado => { return dado.nome }).join(', ')
              : '—'
          }
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Ordem
        </span>
        <span className="table__content">
          { dados.ordem || '—'}
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Gênero
        </span>
        <span className="table__content">
          { dados.genero || '—'}
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Família
        </span>
        <span className="table__content">
          { dados.familia || '—'}
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Sub-família
        </span>
        <span className="table__content">
          { dados.subfamilia || '—'}
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Espécie
        </span>
        <span className="table__content">
          <em>{ dados.especie || '—'}</em>
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Tribo
        </span>
        <span className="table__content">
          { dados.tribo || '—'}
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Subtribo
        </span>
        <span className="table__content">
          { dados.subtribo || '—'}
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Origem
        </span>
        <span className="table__content">
          { dados.origem
              ? dados.origem.map(dado => { return dado.nome }).join(', ')
              : '—'
          }
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Propagação
        </span>
        <span className="table__content">
        { dados.propagacao
              ? dados.propagacao.map(dado => { return PropagacaoEnum[dado] }).join(', ')
              : '—'
          }
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Floração
        </span>
        <span className="table__content">
        { dados.floracao
              ? dados.floracao.map(dado => { return EstacoesEnum[dado] }).join(', ')
              : '—'
          }
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Plantio
        </span>
        <span className="table__content">
        { dados.plantio
              ? dados.plantio.map(dado => { return EstacoesEnum[dado] }).join(', ')
              : '—'
          }
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Frutos
        </span>
        <span className="table__content">
        { dados.frutos
              ? 'Possui'
              : 'Não possui'
          }
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Iluminação
        </span>
        <span className="table__content">
        { dados.tipoIluminacao
              ? dados.tipoIluminacao.map(dado => { return IluminacaoEnum[dado] }).join(', ')
              : '—'
          }
        </span>
      </li>
      <li className="table__row table__row--bright">
        <span className="table__title">
          Perfumada
        </span>
        <span className="table__content">
        { dados.perfumada
              ? 'Sim'
              : 'Não'
          }
        </span>
      </li>
      <li className="table__row table__row--dark">
        <span className="table__title">
          Água na rega
        </span>
        <span className="table__content">
        { dados.rega
              ? RegaEnum[dados.rega]
              : '—'
          }
        </span>
      </li>
    </ul>
  );
}

export default Table;