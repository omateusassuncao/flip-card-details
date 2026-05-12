## Card Digital Interativo

Construir um card digital de apresentação pessoal com flip 3D animado, baseado nas duas imagens enviadas (frente: foto/perfil; verso: gráfico de equilíbrio + conquistas).

### Estrutura

- Página única (`src/routes/index.tsx`) com fundo decorativo (gradiente teal/cyan harmonizando com as imagens) e o card centralizado (~520×520px, responsivo).
- Componente `FlipCard` com perspective 3D e rotação Y de 180° via CSS transform; estado `isFlipped` controla o lado visível.
- Pequenos botões circulares com ícone de "rotacionar" (Lucide `RotateCw`) nos 4 cantos do card; clicar em qualquer um aciona o flip. Animação suave (~700ms cubic-bezier).

### Frente do card (`CardFront`)

- Fundo teal com número "25" grande em verde ao fundo (decorativo).
- Foto do perfil (`Gemini_Generated_Image_uqzhhnuqzhhnuqzh_2.png`) ao centro/topo.
- Logo "itaú" no topo direito, bandeira do Brasil + "TCLA" na lateral direita.
- Faixas inferiores com:
  - Nome: **MATEUS ASSUNÇÃO**
  - "33 ANOS | CASADO | JACAREÍ-SP"
  - "INTEGRAÇÃO DO MODELO | SEGUROS PJ"

### Verso do card (`CardBack`)

- Título "EQUILÍBRIO DE VIDA & SAÚDE".
- **Gráfico radar (pentagonal)** com 5 eixos clicáveis usando `recharts` (`RadarChart`):
  - Saúde Mental (80), Família (85), Lazer (75), Conhecimento (85), Saúde Física (70)
  - Cada vértice/label é clicável → abre Dialog (shadcn) com detalhes.
- **Card inferior** com 8 itens em duas colunas, cada um clicável:
  - Coluna esquerda: 10 Anos de Carreira • 7 Anos de Itaú (2 Períodos) • 3 Áreas Diferentes • PRAD 2024 & 2025
  - Coluna direita: 6 Anos Exp. Power Platform • 5 Certificações Microsoft + 1 AWS • Eng. Controle e Automação (UFLA) • PósTech Arquitetura de Software .NET com Azure
- Frase no rodapé: *"Disciplina é liberdade, Compaixão é fortaleza, ter Bondade é ter Coragem."*

### Pop-ups (Dialog shadcn)

Cada item abre um modal com título, ícone e imagens. 

Todos os textos  e imagens ficarão num arquivo de dados (`src/data/card-details.ts`) para fácil edição posterior.

### Arquivos a criar/modificar

```
src/assets/card-front-photo.png        (cópia da imagem 2)
src/assets/card-back-reference.png     (cópia da imagem 1, opcional)
src/data/card-details.ts               (textos dos pop-ups)
src/components/FlipCard.tsx            (lógica 3D + corner buttons)
src/components/CardFront.tsx
src/components/CardBack.tsx
src/components/RadarStats.tsx          (gráfico recharts clicável)
src/components/DetailDialog.tsx        (modal reutilizável)
src/routes/index.tsx                   (substitui placeholder)
src/styles.css                         (tokens teal/orange + utilities perspective/backface)
```

### Detalhes técnicos

- Tokens de cor adicionados em `oklch`: teal de fundo, verde Brasil, laranja Itaú, amarelo do gráfico — usados via classes semânticas (`bg-card-bg`, `text-itau-orange`, etc.).
- CSS utilities: `.perspective-1000`, `.preserve-3d`, `.backface-hidden`, `.rotate-y-180`.
- Recharts já disponível? Verificar; se não, instalar via `bun add recharts`.
- shadcn `Dialog` já presente.
- Acessibilidade: botões de canto com `aria-label="Virar card"`; itens clicáveis são `<button>`.
- Responsivo: card escala para caber em viewports móveis (max-width 95vw).