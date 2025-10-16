# Playwright Automation

Projeto de automação de testes end-to-end utilizando Playwright para testar a aplicação UI Test Automation Playground.

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd playwright-automation
```

2. Instale as dependências:
```bash
npm install
```

3. Instale os navegadores do Playwright:
```bash
npx playwright install
```

## 🧪 Executando os Testes

### Comandos Básicos

```bash
# Executar todos os testes
npx playwright test

# Executar testes com interface visual (modo headless)
npx playwright test --ui

# Executar testes com navegador visível
npx playwright test --headed

# Executar testes em modo debug
npx playwright test --debug

# Gerar código de teste automaticamente
npx playwright codegen
```

### Comandos Avançados

```bash
# Executar testes específicos
npx playwright test tests/homePageSuite.spec.ts

# Executar testes em um navegador específico
npx playwright test --project=chromium

# Executar testes com relatório detalhado
npx playwright test --reporter=html

# Executar testes em modo paralelo
npx playwright test --workers=4

# Executar testes com retry automático
npx playwright test --retries=2
```

### Modo UI (Interface Visual)

O modo UI é uma das funcionalidades mais úteis do Playwright:

```bash
npx playwright test --ui
```

Este comando abre uma interface visual onde você pode:
- Ver todos os testes disponíveis
- Executar testes individuais
- Ver o código dos testes
- Executar testes em modo debug
- Ver screenshots e vídeos dos testes

### Codegen (Gerador de Código)

O Playwright Codegen é uma ferramenta incrível que gera código de teste automaticamente enquanto você interage com a aplicação:

```bash
# Gerar código para o site atual
npx playwright codegen

# Gerar código para um site específico
npx playwright codegen https://example.com

# Gerar código com navegador específico
npx playwright codegen --browser=chromium

# Gerar código e salvar em arquivo específico
npx playwright codegen --target=typescript --output=tests/meu-teste.spec.ts
```

**Como usar o Codegen:**

1. Execute o comando `npx playwright codegen`
2. Uma janela do navegador será aberta
3. Navegue pela aplicação normalmente (cliques, digitação, etc.)
4. O Playwright irá gerar o código automaticamente no terminal
5. Copie o código gerado para seus arquivos de teste

**Exemplo de uso:**
```bash
# Para gerar código testando o site do projeto
npx playwright codegen http://uitestingplayground.com/
```

## 📁 Estrutura do Projeto

```
playwright-automation/
├── pages/                    # Page Object Models
│   └── homePage.page.ts     # Página inicial
├── tests/                   # Arquivos de teste
│   ├── example.spec.ts      # Exemplos de teste
│   ├── homePage.spec.ts     # Testes da página inicial
│   └── homePageSuite.spec.ts # Suite de testes da home
├── utils/                   # Utilitários e helpers
│   ├── data/               # Dados de teste
│   └── helpers/            # Funções auxiliares
│       ├── api/            # Helpers para API
│       └── ui/             # Helpers para UI
├── playwright.config.ts     # Configuração do Playwright
├── package.json            # Dependências do projeto
└── tsconfig.json           # Configuração do TypeScript
```

## 🔧 Configuração

### playwright.config.ts

O arquivo de configuração principal contém:

- **Base URL**: `http://uitestingplayground.com/`
- **Navegadores**: Chromium (configurado), Firefox e WebKit (comentados)
- **Relatórios**: HTML reporter habilitado
- **Paralelização**: Habilitada para execução mais rápida
- **Retry**: 2 tentativas em CI, 0 em desenvolvimento

### Variáveis de Ambiente

Para usar variáveis de ambiente, descomente as linhas no `playwright.config.ts`:

```typescript
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
```

## 📊 Relatórios

Após executar os testes, os relatórios são gerados em:

- **HTML Report**: `playwright-report/index.html`
- **Test Results**: `test-results/`
- **Traces**: Para debug de testes que falharam

Para visualizar o relatório HTML:
```bash
npx playwright show-report
```

## 🎯 Page Object Model

O projeto utiliza o padrão Page Object Model para organizar os testes:

### Exemplo de Uso

```typescript
import { HomePage } from '../pages/homePage.page';

test('should navigate to home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await expect(page).toHaveTitle(/UI Test Automation Playground/);
});
```

## 🐛 Debug

### Modo Debug Interativo

```bash
npx playwright test --debug
```

### Debug com Navegador Específico

```bash
npx playwright test --debug --project=chromium
```

### Trace Viewer

Para visualizar traces de testes que falharam:
```bash
npx playwright show-trace test-results/[test-name]/trace.zip
```

## 📝 Escrevendo Testes

### Estrutura Básica

```typescript
import { test, expect } from '@playwright/test';

test('nome do teste', async ({ page }) => {
  // Seu código de teste aqui
  await page.goto('/');
  await expect(page).toHaveTitle(/Expected Title/);
});
```

### Usando Page Objects

```typescript
import { HomePage } from '../pages/homePage.page';

test('teste com page object', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await homePage.clickOnDynamicIdLink();
});
```

### Test Steps

```typescript
test('teste com steps', async ({ page }) => {
  await test.step('Navegar para a página', async () => {
    await page.goto('/');
  });

  await test.step('Verificar título', async () => {
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

## 🔄 CI/CD

Para executar em pipelines de CI/CD:

```bash
# Instalar dependências
npm ci

# Instalar navegadores
npx playwright install --with-deps

# Executar testes
npx playwright test
```

## 📚 Recursos Úteis

- [Documentação Oficial do Playwright](https://playwright.dev/)
- [Playwright Test Generator (Codegen)](https://playwright.dev/docs/codegen)
- [Playwright Inspector](https://playwright.dev/docs/debug)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright UI Mode](https://playwright.dev/docs/test-ui-mode)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
