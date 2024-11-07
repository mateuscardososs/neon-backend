# Neon Backend

Este repositório contém o código do backend do projeto **Neon**, desenvolvido para gerenciar operações e fornecer uma interface de API para o frontend e outras integrações. O projeto utiliza Node.js e TypeScript para uma estrutura escalável e segura.

## Funcionalidades

- **Autenticação e Autorização**: Implementação segura de autenticação e autorização para proteção de endpoints.
- **Gerenciamento de Usuários**: APIs para criação, atualização e exclusão de perfis de usuários.
- **Controle de Transações**: Registros e controle de transações financeiras.
- **Relatórios**: Geração de relatórios dinâmicos para análise de dados.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento do backend.
- **TypeScript**: Superset do JavaScript com tipagem estática para maior segurança e facilidade de manutenção.
- **Express**: Framework para criação de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/mateuscardososs/neon-backend.git
    ```

2. Navegue para o diretório do projeto:
    ```bash
    cd neon-backend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie um arquivo `.env` com as seguintes variáveis:
    ```env
    DATABASE_URL= # URL do MongoDB
    PORT= # Porta em que o servidor será executado
    JWT_SECRET= # Chave para geração de tokens JWT
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para sua funcionalidade:
    ```bash
    git checkout -b feature/nova-funcionalidade
    ```
3. Faça commit das suas alterações:
    ```bash
    git commit -m 'Adiciona nova funcionalidade'
    ```
4. Envie para o branch principal:
    ```bash
    git push origin feature/nova-funcionalidade
    ```
5. Abra um Pull Request.

---

Este README cobre as funcionalidades principais e instruções básicas para rodar o projeto. Se houver necessidades específicas, entre em contato.
