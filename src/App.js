import './App.css';
import { BsRecordCircleFill } from 'react-icons/bs'
import Navbar from './navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <h1>Minha trajetória</h1>
      <h3>Kaio Vinicius</h3>
      <hr/>

      <div className="inhaDoTempo">

        <div className="topico">
          <BsRecordCircleFill/>
          <div className="text1">
            <h2>Start - 2018</h2>
            <p>O começo de toda essa jornada se deu em 2018 quando comecei a aprender mais sobre robótica e programação, era duas coisas que eu sempre tive curiosidade de saber como funcionava.</p>
          </div>
        </div>


        <div className="topico2">
          <BsRecordCircleFill/>
          <div className="text2">
            <h2>Aprofundando - 2019</h2>
            <p>Então certo dia decidir me aprofundar mais nessa área da tecnologia. Fui pegando cada vez mais gosto por essa área, fui colocando os conhecimentos que eu tinha em prática, dai surgiu meus primeiros robôs feitos de eletrônicos que eu desmontava, era só um robô que andava para frente e para trás mais àquilo foi o que eu precisava para ficar bastante feliz com o que eu tinha feito e me da motivação para continuar.</p>
          </div>
        </div>


        <div className="topico">
          <BsRecordCircleFill/>
          <div className="text1">
            <h2>Programação - 2020</h2>
            <p>O ano de 2020 foi um grande ano, foi quando participei de vários eventos de programação, onde eu pode ver um pouco mais sobre como a internet funciona ver mais a fundo, diversos temas como evolução da internet, segurança da informação, inteligência artificial entre outros assuntos. Quando eu via a complexidade de tudo pensava varias coisas como a tecnologia poderia mudar todo o mundo cada vez mais.</p>
          </div>
        </div>


        <div className="topico2">
          <BsRecordCircleFill/>
          <div className="text2">
            <h2>A decisão - 2021/1</h2>
            <p>Sem dúvidas o ano de 2021/1 foi um divisor de águas, foi um ano cheio de grandes decisões, eu tinha terminado o ensino médio a pouco tempo, foi o momento de eu escolher qual faculdade eu queria, acho que passei cerca de um mês decidindo o que eu iria fazer, porque era uma decisão que teria um grande peso na minha vida. Então decidir fazer engenharia da computação, depois de pesquisar muito vi que era essa área que mais eu me encontrava.</p>
          </div>
        </div>


        <div className="topico">
          <BsRecordCircleFill/>
          <div className="text1">
            <h2>Faculdade - 2021/2</h2>
            <p>No segundo semestre de 2021 comecei a faculdade, apesar das dificuldades que tive no começo eu estava gostando muito, e realmente fiz a escolha certa, dai tive contato com o mercado de trabalho na área da tecnologia, então vi que tinha que focar em uma área e me profissionalizar, no final do semestre comecei a estudar bastante sobre a área web, mais especificamente sobre desenvolvimento front-end.</p>
          </div>
        </div>

        <div className="topico2">
          <BsRecordCircleFill/>
          <div className="text2">
            <h2>Atualmente - 2022</h2>
            <p>Atualmente meu objetivo está relacionado a me profissionaliza e por todos meus conhecimentos em prática, esses últimos meses tenho feito vários projetos e estudando bastante e me envolvendo mais com o essa área de desenvolvimento. Tenho focado bastante em me torna um desenvolvedor front-end, e me profissionalizar cada fez mais nessa área, agora e só manter o foco e continuar crescendo cada vez mais para assim alcançar todos meus objetivos!</p>
          </div>
        </div>

      </div>

      <footer>
        <div className="wave">
        
        </div>
      </footer>
      
    </div>
  );
}

export default App;
