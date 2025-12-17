# 🍄 Encanadores Mario e Luigi 🛠️

## 🌟 Visão Geral do Projeto

Este projeto é uma **Landing Page promocional** desenvolvida para um serviço fictício de encanamento, inspirado nos icônicos personagens Mario e Luigi. O objetivo principal é apresentar os serviços de forma divertida e profissional, e capturar leads através de um formulário de contato.

O projeto demonstra o uso de HTML, CSS e JavaScript para criar uma experiência de usuário moderna, com um fundo de vídeo imersivo, design responsivo e interações dinâmicas.

## ✨ Funcionalidades Principais

*   **Design Responsivo:** Layout adaptável para visualização perfeita em dispositivos móveis e desktops (implementado via `@media` queries no `style.css`).
*   **Fundo de Vídeo:** Utilização de um vídeo em *loop* e *autoplay* para criar um ambiente visualmente dinâmico e atraente.
*   **Formulário de Contato Deslizante:** Um formulário de orçamento que se sobrepõe à tela com uma transição suave ao clicar no botão "Entre em contato", melhorando a experiência do usuário e focando na conversão.
*   **Integração com FormCarry:** O formulário utiliza o serviço FormCarry para o envio e gerenciamento dos dados de contato.
*   **Efeitos de Interação (Hover):** Efeitos visuais em botões e imagens para indicar interatividade.
*   **Link Flutuante para Contato:** Um ícone de WhatsApp flutuante (redirecionando para o LinkedIn do desenvolvedor, conforme o código) para facilitar o contato rápido.

## 💻 Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica da página. |
| **CSS3** | Estilização, layout (Flexbox) e responsividade. |
| **JavaScript (Vanilla)** | Lógica de interação para o formulário deslizante. |
| **FormCarry** | Serviço de *backend* para receber as submissões do formulário. |

## 📁 Estrutura de Arquivos

A organização do projeto segue uma estrutura simples e clara:

```
Mairo/
├── img/
│   ├── backgroud.jpeg
│   ├── logo.png
│   ├── logo-header.png
│   ├── luigi.png
│   ├── mario.png
│   ├── video.mp4
│   └── whatsapp.png
├── index.html
├── scripts.js
└── style.css
```

| Arquivo/Pasta | Conteúdo |
| :--- | :--- |
| `index.html` | O arquivo principal da Landing Page. |
| `style.css` | Folha de estilos principal do projeto. |
| `scripts.js` | Funções JavaScript para o controle do formulário. |
| `img/` | Pasta contendo todas as imagens e o vídeo do projeto. |

## 🚀 Como Executar o Projeto

Para visualizar e executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jhonathan-dev/Projeto-Site-Mario-formulario]
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Mairo
    ```
3.  **Abra o arquivo `index.html`:**
    Simplesmente abra o arquivo `index.html` em seu navegador de preferência (Chrome, Firefox, Edge, etc.).

O projeto é totalmente estático e não requer a instalação de dependências ou um servidor local para ser visualizado.

## 📝 Configuração do Formulário

O formulário de contato está configurado para enviar dados para o FormCarry.

*   **Endpoint Atual:** `https://formcarry.com/#/######`
*   **Para usar seu próprio endpoint:** Você deve se cadastrar no FormCarry e substituir o valor do atributo `action` na tag `<form>` dentro do arquivo `index.html` pelo seu próprio endpoint.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhoria ou quiser corrigir algum *bug*, sinta-se à vontade para abrir uma *issue* ou enviar um *Pull Request*.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` (a ser criado) para mais detalhes.

---

**Desenvolvido por:** [Jhonathan de Moura/jhonathan-dev]

*Última Atualização: Dezembro de 2025*
