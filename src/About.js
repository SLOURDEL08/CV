import './App.css';
import React from 'react';


function About() {
  return (
    <div className="container-about">
      <div className='left-about'>
        <div className='secdrow-about'>
          <img src='cesde.png' className='profilpic-about' alt='profil pic'/>
          <div className='infos-about'>
            <p className='title-about'>LOURDEL Sébastien</p>
              <div><p className="lbl-about">Date de naissance :</p><p className="replbl-about">08/08/1998</p></div>
              <div><p className="lbl-about">Age :</p><p className="replbl-about">25 ans</p></div>
              <div><p className="lbl-about">Localisation :</p><div className='replbl-about'><img className='flexresponse-img' src='/locali.png' alt='illustrations'/>&nbsp;&nbsp;<p className="replbl-about">Arras</p></div></div>
              <div><p className="lbl-about">E-Mail :</p><div className='replbl-about'><img className='flexresponse-img' src='gmail.png' alt='illustrations'/>&nbsp;&nbsp;<p className="replbl-about">Seb.lourdel8@gmail.com</p></div></div>
              <div><p className="lbl-about">Téléphone :</p><div className='replbl-about'><img className='flexresponse-img' src='phonecall.png' alt='illustrations'/>&nbsp;&nbsp;<p className="replbl-about">06.30.99.50.15</p></div></div>
          </div>
        </div>
        <div className='secdrow-about scdabt'>
          <p className='title-about scdabt'><b>Front End</b> Developpeur</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis, erat vel elementum congue, purus risus blandit ligula, eu fermentum ligula magna in leo. Cconsectetur adipiscing elit. In convallis, erat vel elementum congue, purus risus blandit ligula, eu fermentum ligula magna in leo,  Cconsectetur adipiscing elit. eu fermentum ligula magna in leo. Cconsectetur adipiscing elit. In convallis, erat vel elementum congue, purus risus blandit ligula, eu fermentum ligula magna in leo,  Cconsectetur adipiscing elit.</span>
        </div>
        <div className='thirdrow-about'>
            <p>Téchnologie utilisées :</p>
               <div class="image-container abt">
                    <div class="image-list">
                      <div>
                      <img src="uuhd.png" alt="logo wordpress"/>
                      </div>
                      <div>
                      <img src="js.png" alt="logo javascript"/>
                      </div>
                      <div>
                      <img src="reactlogo.png" alt="logo tagmanager"/>
                      </div>
                      <div>
                      <img src="seo.png" alt="logo seo"/>
                      </div>
                      <div>
                      <img src="uuhd.png" alt="logo git"/>
                      </div>
                      <div>
                      <img src="wp.png" alt="logo wordpress"/>
                      </div>
                      <div>
                      <img src="js.png" alt="logo javascript"/>
                      </div>
                      <div>
                      <img src="uuhd.png" alt="logo wordpress"/>
                      </div>
                      <div>
                      <img src="js.png" alt="logo javascript"/>
                      </div>
                      <div>
                      <img src="reactlogo.png" alt="logo tagmanager"/>
                      </div>
                      <div>
                      <img src="seo.png" alt="logo seo"/>
                      </div>
                      <div>
                      <img src="uuhd.png" alt="logo git"/>
                      </div>
                      <div>
                      <img src="wp.png" alt="logo wordpress"/>
                      </div>
                      <div>
                      <img src="js.png" alt="logo javascript"/>
                      </div>
                    </div>
                  </div>
              
        </div>
      </div>
      <div className='right-about'>
        <div className='containtitle-rightabout'><img src='chapeau.png' /><p className='title-exp'>Formations</p></div>
        <div className='contain-exp'>
          <div className='exp-item'>
            <p>Baccalauréat STMG</p>
            <p>Lycée Arhur Rimbaud - Sin le noble</p>
          </div>
          <div className='exp-item'>
            <p>Formation Développeur web</p>
            <p>POP School Valenciennes</p>
          </div>
          <div className='exp-item'>
            <p>Stage fin de formation</p>
            <p>DK Group Flers-en-escrebieux</p>
          </div>
          <div className='exp-item'>
            <p>Formation Développeur web</p>
            <p>OpenClassRoom - 2023</p>
          </div>
        </div>
        <div className='containtitle-rightabout'><img src='work.png' /><p className='title-exp'>Expériences</p></div>
        <div className='contain-exp'>
          <div className='exp-item'>
            <p>Baccalauréat STMG</p>
            <p>Lycée Arhur Rimbaud - Sin le noble</p>
          </div>
          <div className='exp-item'>
            <p>Formation Développeur web</p>
            <p>POP School Valenciennes</p>
          </div>
          <div className='exp-item'>
            <p>Stage fin de formation</p>
            <p>DK Group Flers-en-escrebieux</p>
          </div>
          <div className='exp-item'>
            <p>Formation Développeur web</p>
            <p>OpenClassRoom - 2023</p>
          </div>
        </div>
        </div>
    </div>
    
  );
}

export default About;
