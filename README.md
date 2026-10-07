# Monkeypox: uma abordagem geral para profissionais de saúde

Curso interativo da Fiocruz sobre mpox, em formato de apostila vertical (HTML, CSS e JavaScript). Cinco módulos, cada um uma página independente.

## Abrir

```bash
python -m http.server 8000
```

Acesse <http://localhost:8000/modulos/modulo01/> (troque `modulo01` por `modulo02`…`modulo05`).

Servir por HTTP em vez de abrir o arquivo direto evita bloqueio do navegador a scripts e mídia locais.

## Estrutura

```
modulos/moduloNN/
  index.html          o módulo
  creditos.html       créditos
  css/ js/            a página carrega os .min; os .css/.js ao lado são a fonte
  image/ fonts/ documentos/
  se_unasus_pack.*    empacotamento para o ambiente UNA-SUS
```

## Publicar

Copie a pasta do módulo para o servidor ou ambiente do curso. Não há build.

## Homologação

Não há ambiente de homologação.
