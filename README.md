<img width="1124" height="976" alt="skifree" src="https://github.com/user-attachments/assets/eb0181b3-add3-4aad-96f2-6ba0265a8408" />

# SkiFree — remake em Three.js

**Jogue agora:** https://skifree2026.vercel.app/

Remake para web do clássico **SkiFree** (Chris Pirih, 1991). O jogo usa os 86
bitmaps originais, as tabelas de estado, os descritores de prova, os pesos de
geração de objetos, os controles e os comportamentos de colisão recuperados do
`SKI.EXE`. A renderização continua ortográfica e fiel ao pixel, com o Three.js
cuidando da cena.

Trilíngue (português do Brasil, inglês e espanhol): o idioma inicial é sugerido pelo país
do visitante e pode ser trocado a qualquer momento pelas bandeiras no canto
superior esquerdo.

## Controles

- **Mouse ou teclado numérico** para virar e fazer manobras; as setas
  equivalem ao teclado numérico.
- `F2` reinicia e `F3` pausa/retoma.
- **Tela sensível ao toque:** segure e mova o dedo para virar; um toque curto
  salta.

## Rodando localmente

```powershell
cd skifree
npm.cmd install
npm.cmd run dev -- --port 5173
```

Gerar o build de produção:

```powershell
npm.cmd run build
```

## Verificação

Checagem de renderização e jogabilidade no navegador (Playwright, requer o
Google Chrome instalado):

```powershell
npm.cmd run verify
```

Checagem de regras sem navegador (recursos, tabelas recuperadas, recuperação de
queda, gestos de toque e seleção de idioma):

```powershell
npm.cmd run verify:logic
```

Veja `ORIGINAL_PARITY_AUDIT.md` para a auditoria de paridade com o executável
original e as extensões web documentadas explicitamente.

## Deploy

- **Vercel** (principal): importe o repositório do GitHub; o Vite é detectado
  automaticamente via `vercel.json`. `api/country.js` é uma Vercel Function que
  lê o cabeçalho `x-vercel-ip-country` para sugerir o idioma inicial.
- **GitHub Pages:** `.github/workflows/pages.yml` publica o `dist/` a cada push
  na `main`.
- **Hospedagem estilo Cloudflare** (`worker/index.js`): `npm run build:sites`
  gera `dist/client` + `dist/server`.

Quando `/api/country` não está disponível, a detecção de idioma recorre às
dicas do navegador (idioma e fuso horário).

## Autor

**Ary Ribeiro** — [linkedin.com/in/aryribeiro](https://www.linkedin.com/in/aryribeiro)

Repositório: https://github.com/aryribeiro/skifree

SkiFree é uma criação original de Chris Pirih. Este projeto é um remake
não oficial, sem fins comerciais, feito por admiração ao jogo.
