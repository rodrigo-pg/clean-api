# BDD Specs

## Narrativa 1 - Cadastro

```
Dado que quero cadastrar uma pessoa no sistema
Quando submeter o cpf, nome, e habilidades
Então a pessoa deve ser cadastrada no sistema
```

### Exceção - CPF inválido
```
Dado que quero cadastrar uma pessoa no sistema
Quando submeter um cpf inválido
Então devo retornar uma exceção
```

### Exceção - Nome inválido
```
Dado que quero cadastrar uma pessoa no sistema
Quando submeter um nome inválido
Então devo retornar uma exceção
```