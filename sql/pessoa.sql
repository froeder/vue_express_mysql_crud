CREATE TABLE `pessoa` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `endereco_rua` varchar(255) NOT NULL,
  `endereco_cidade` varchar(255) NOT NULL,
  `endereco_bairro` varchar(255) NOT NULL,
  `endereco_estado` varchar(255) NOT NULL,
  `endereco_pais` varchar(255) NOT NULL,
  `endereco_cep` int(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_nascimento` varchar(255) NOT NULL,
  `data_criacao` varchar(255) NOT NULL,
  `tipo_usuario` varchar(255) NOT NULL,
  `instituicao` varchar(255) NOT NULL,
  `profissao` varchar(255) NOT NULL,
  `endereco_numero` varchar(255) NOT NULL,
  `endereco_complemento` varchar(255) NOT NULL,
  `escolaridade` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for table `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for table `pessoa`
--
ALTER TABLE `pessoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;