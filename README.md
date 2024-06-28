# react-safe-password

## Descrição

**react-safe-password** é um projeto React que permite aos usuários gerar senhas seguras e aleatórias. Além de gerar senhas completamente aleatórias, o projeto oferece a opção de incluir uma palavra personalizada fornecida pelo usuário na senha gerada. Isso proporciona uma camada adicional de personalização e memorabilidade sem comprometer a segurança.

## Funcionalidades

- **Geração de Senhas Aleatórias**: Cria senhas fortes utilizando combinações de letras maiúsculas, letras minúsculas, números e símbolos.
- **Personalização com Palavra do Usuário**: Permite incluir uma palavra específica escolhida pelo usuário na senha gerada.
- **Interface Intuitiva**: Interface de usuário simples e amigável construída com React e Ant Design.
- **Copiar para Área de Transferência**: Função para copiar a senha gerada diretamente para a área de transferência com um clique.

## Uso

1. Acesse a aplicação no Vercel: [react-safe-password](https://react-safe-password.vercel.app)
2. Configure as opções de senha, como inclusão de letras maiúsculas, minúsculas, números e símbolos.
3. (Opcional) Insira uma palavra personalizada para ser incluída na senha.
4. Clique no botão "Generate Password" para gerar a senha.
5. Copie a senha gerada para a área de transferência utilizando o botão "Copy Password".

## Importância de Senhas Seguras

No ambiente de cibersegurança, a importância de senhas seguras não pode ser subestimada. Senhas fortes e únicas são a primeira linha de defesa contra ataques cibernéticos, como tentativas de invasão, roubo de identidade e acesso não autorizado a informações sensíveis. Utilizar senhas fracas ou repetidas em diferentes serviços aumenta significativamente o risco de comprometer a segurança dos dados.

### CWE-521: Weak Password Requirements

**CWE-521: Weak Password Requirements** é uma fraqueza de segurança que ocorre quando um sistema permite o uso de senhas que não atendem a requisitos mínimos de força e complexidade. Isso pode incluir senhas curtas, senhas sem caracteres especiais, ou senhas que são fáceis de adivinhar ou quebrar usando técnicas de força bruta ou dicionário.

#### Importância de Requisitos de Senhas Fortes

Senhas fracas são uma das principais causas de compromissos de segurança em sistemas de TI. Quando as senhas não são complexas o suficiente, elas podem ser facilmente adivinhadas ou quebradas por atacantes, colocando dados sensíveis e sistemas críticos em risco. Estabelecer requisitos de senha fortes é essencial para proteger contra acessos não autorizados e outras ameaças cibernéticas.

#### Exemplos de Requisitos de Senha Fortes

Para evitar a fraqueza CWE-521, os sistemas devem impor políticas de senha que incluam:

- **Comprimento Mínimo**: Senhas devem ter um comprimento mínimo (por exemplo, 8 caracteres ou mais).
- **Complexidade**: Senhas devem incluir uma combinação de letras maiúsculas, letras minúsculas, números e caracteres especiais.
- **Proibição de Senhas Comuns**: Senhas não devem estar em uma lista de senhas comuns ou facilmente adivinháveis.
- **Expiração de Senhas**: Senhas devem expirar após um determinado período, obrigando os usuários a criar novas senhas periodicamente.
- **Verificação de Histórico de Senhas**: Impedir que usuários reutilizem suas senhas antigas.

#### Mitigações

Para mitigar os riscos associados a senhas fracas (CWE-521), as seguintes práticas podem ser implementadas:

1. **Políticas de Senha Rígidas**: Implemente políticas que exijam senhas longas e complexas.
2. **Educação do Usuário**: Eduque os usuários sobre a importância de criar senhas fortes e únicas.
3. **Autenticação Multifator (MFA)**: Adote MFA para adicionar uma camada extra de segurança, além das senhas.
4. **Ferramentas de Gestão de Senhas**: Utilize gerenciadores de senhas para ajudar os usuários a criar e armazenar senhas fortes e únicas.

### Referência

Para mais detalhes sobre o CWE-521, visite a página oficial da [CWE-521: Weak Password Requirements](https://cwe.mitre.org/data/definitions/521.html).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

For the English version of this README, click [here](README_EN.md).