import { Link } from "react-router-dom";

const Cargo = () => {
  return (
    <div>
      <h1>Cargo</h1>
      <Link to="/candidatos">Ver candidatos</Link>

      <h2>Vaga: Prefeito de Santos</h2>
      <p>Descrição do Cargo:</p>
      <p>
        O Prefeito de Santos será o principal líder executivo da cidade,
        responsável por gerenciar todas as operações municipais, garantir o
        bem-estar dos cidadãos e promover o desenvolvimento sustentável da
        cidade. O prefeito deve atuar de maneira ética e transparente,
        representando os interesses da população e liderando a cidade em direção
        a melhorias contínuas nos serviços públicos, infraestrutura, saúde,
        educação e segurança.
      </p>
      <section>
        <h3>Responsabilidades:</h3>
        <ul>
          <li>
            Definir e implementar políticas públicas nas áreas de saúde,
            educação, segurança, transporte e habitação.
          </li>
          <li>
            Gerenciar o orçamento municipal, garantindo o uso eficiente dos
            recursos públicos.
          </li>
          <li>
            Coordenar as ações das secretarias municipais e supervisionar o
            trabalho dos secretários.
          </li>
          <li>
            Promover o desenvolvimento econômico, social e cultural da cidade.
          </li>
          <li>
            Estabelecer e manter relações com governos estaduais e federais, bem
            como com o setor privado, buscando parcerias e investimentos.
          </li>
          <li>
            Manter um diálogo constante com a população, ouvindo suas demandas e
            respondendo de forma adequada às suas necessidades.
          </li>
          <li>
            Garantir a execução de obras e projetos públicos de infraestrutura.
          </li>
          <li>
            Liderar com ética, transparência e responsabilidade social,
            respeitando os princípios democráticos.
          </li>
        </ul>
      </section>
      <section>
        <h3>Requisitos:</h3>
        <ul>
          <li>Idade mínima: 21 anos.</li>
          <li>Nacionalidade: Brasileiro nato ou naturalizado.</li>
          <li>
            Filiação partidária: Deve estar vinculado a um partido político.
          </li>
          <li>Escolaridade mínima: Ensino fundamental completo.</li>
          <li>
            Registro no TSE: Estar apto perante a Justiça Eleitoral para
            concorrer.
          </li>
          <li>
            Experiência: Experiência prévia em gestão pública ou áreas afins
            será valorizada.
          </li>
          <li>
            Respeito às leis: Não possuir condenações que impeçam a candidatura.
          </li>
        </ul>
      </section>
      <section>
        <h3>Faixa Salarial:</h3>
        <p>
          R$ 25.000 a R$ 30.000 mensais, além de benefícios estabelecidos pela
          legislação, como plano de saúde e equipe de apoio. A remuneração varia
          conforme o município e ajustes aprovados pela Câmara Municipal.
        </p>
      </section>
      <section>
        <h3>O que valorizamos no candidato:</h3>
        <ul>
          <li>Compromisso com a transparência e a ética na gestão pública.</li>
          <li>
            Visão estratégica de longo prazo para o desenvolvimento de Santos.
          </li>
          <li>
            Habilidade de liderança e gestão de equipes multidisciplinares.
          </li>
          <li>
            Foco em resultados, com capacidade de entregar melhorias palpáveis
            em infraestrutura e serviços.
          </li>
          <li>
            Proximidade com a população e disposição para ouvir e entender as
            demandas locais.
          </li>
        </ul>
      </section>
      <section>
        <h3>Habilidades desejáveis:</h3>
        <ul>
          <li>Forte comunicação e habilidade de negociação.</li>
          <li>
            Capacidade de resolver problemas complexos de maneira inovadora.
          </li>
          <li>Conhecimento em finanças públicas e orçamento.</li>
          <li>Experiência em políticas públicas e legislação.</li>
          <li>
            Relacionamento interpessoal e networking com diferentes stakeholders
            (governo, setor privado e sociedade civil).
          </li>
        </ul>
      </section>
      <section>
        <h3>Local de Trabalho:</h3>
        <p>
          Paço Municipal de Santos e demais unidades da administração pública
          local.
        </p>
      </section>
    </div>
  );
};

export default Cargo;
