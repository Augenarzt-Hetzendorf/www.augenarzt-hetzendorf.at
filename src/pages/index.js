import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Announcement from '../theme/announcement/announcement';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Kontakt/Terminvereinbarung">
            TERMINVEREINBARUNG ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Priv.Doz.Dr.med. Saskia Tipotsch bei ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

<main>

<div class="container">
 <div class="row">
 <div class="col col--6">
   <div>
   <div class="hero shadow--lw">  <div class="container">
     <h1 class="hero__title">Schön, Sie zu sehen! </h1>
     <p class="hero__subtitle">in der Privatordination Augenarzt-Hetzendorf von Priv.Doz.Dr.med. Saskia Tipotsch.</p>
     </div>
     </div>
   </div>
 </div>
 <div class="col col--6">
 <p> </p>
    <div>
     <img src="/img/branding/augenarzt-hetzendorf.svg" />
    </div>
  </div>
 </div></div>

 <div class="container">
  <div class="row">
  <div class="col col--6">
  <div>
    <img src="/img/landing/family-40.png" />
  </div>  </div>
  <div class="col col--6">
    <div class="hero shadow--lw">  <div class="container">
     <div>
      <p24>
      Als <a href="/docs/About/wahlaerztin/">Wahlärztin</a> ist es mir ausgesprochen wichtig,
      auf die individuellen Bedürfnisse meiner PatientInnen einzugehen.
      </p24>
      <p> </p>
      <p24>
      Ausreichend Zeit ist die Basis für eine erfolgreiche und vertrauensvolle Arzt-PatientInnen Beziehung.
      </p24>
      <p> </p>
        <a class="button button--lg button--primary" href="/docs/Kontakt/Terminvereinbarung/"> Zur Terminvereinbarung </a>
    </div></div>
  </div> </div>
 </div>
  </div>

         <div class="hero hero--dark">
          <div class="container">
            <h1 class="hero__title">Medizinische Leistungen</h1>
            <p class="hero__subtitle">Diagnosen - Beratung - Therapie - Vorsorge - Augenoperationen</p>
            </div>
         </div>

         <HomepageFeatures />


 <div class="hero shadow--lw">
  <div class="container">
    <p20>
      <li> Diagnose und Nachbehandlungen von <a href="/docs/Leistungen/Uveitis-Untersuchungen/">Augenentzündungen mit Schwerpunkt auf Uvitis</a>. </li>
      <li> Diagnose von Augenentzündungen - Gerstenkorn - Hordeolum. </li>
      <li> Diagnose und Nachbehandlungen von Netzhautveränderungen - Diabetes, Gefäßverschluss. </li>
      <li> Diagnose und Nachbehandlungen zu Grüner Star (Glaukom) und Grauen Star (Katarakt). </li>
      <li> Diagnose und Nachbehandlungen zu Makuladegeneration (ADM).</li>
      <li>  <a href="/docs/Leistungen/Vorsorgeuntersuchungen/">VorsorgeuUntersuchungen</a> und allgemeine Augendiagnostik. </li>
      <li> Beratung zu Brillengläsern und sonstigen Sehbehelfen. </li>
      <li> Augennotfall-Untersuchungen </li>
        <p> </p>
        <p> </p>
                 <a class="button button--lg button--primary" href="/docs/Dienstleistungen/"> Mehr zur medizinischen Leistungen </a>
   </p20>
      </div>
 </div>

 <div class="hero hero--dark">
  <div class="container">
    <h1 class="hero__title">Priv.Doz.Dr.med. Saskia Tipotsch</h1>
    <p class="hero__subtitle">Ihre erfahrene Augensärztin für Uveitis, Vorsorgeuntersuchungen, Augenoperationen und Spezialbehandlungen</p>
    </div>
 </div>


  <div class="container">
   <div class="row">
   <div class="col col--6">
     <div>
     <div class="hero shadow--lw">  <div class="container">
     <p24>
     Ärztin zu sein bedeutet für mich, meiner Berufung nachzugehen.
     Ich begeistere mich jeden Tag über die stetig neuen Aufgaben, die die Augenheilkunde mit sich bringt –
     ebenso wie über die Fortschritte, die die Medizin täglich macht.
     </p24>
        <p> </p>
        <p20>
        <li> Oberätztin im Krankenhaus Hitzing </li>
        <li> über 20 Jahre Berufserfahrung </li>
        </p20>
        <p> </p>
       <p>
        <a class="button button--lg button--primary" href="/docs/Ueber"> Mehr über mich</a>
        </p>
       </div></div>
     </div>
   </div>
   <div class="col col--6">
   <p> </p>
      <div>
        <p> </p>
       <img src="/fotos/Saskia-Tipotsch.jpg" />
      </div>
    </div>
   </div></div>

   <div class="hero shadow--lw">
    <div class="container">
      <p class="hero__subtitle">So erreichen Sie die Privatordination Augenarzt-Hetzendorf von Dr. Saskia Tipotsch</p>
      <p> <a href="/docs/Kontakt/Terminvereinbarung/">Ordinationszeiten nach Terminvereinbarung</a> unter +43 6707 035530 oder ordination(at)Augenarzt-Hetzendorf.at </p>
      <p20> Schönbrunner Alle 46/3 - Erdgeschoss, 1120 Wien </p20> <p> </p>
      <p> </p>
      <p>
       <a class="button button--lg button--primary" href="/docs/Kontakt"> Mehr zur Anfahrt </a>
       </p>


      <div><button class="button button--info">Info</button></div>
      <p> Zur genauen Untersuchung ist oft eine medikamentöse Erweiterung der Pupille nötig.
      Bitte beachten Sie, dass in diesem Fall die aktive Teilnahme am Straßenverkehr für mehrere Stunden NICHT erlaubt ist.</p>
      </div>
   </div>

      </main>
    </Layout>
  );
}
