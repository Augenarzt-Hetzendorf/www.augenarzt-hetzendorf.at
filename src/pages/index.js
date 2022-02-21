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
      <HomepageHeader />

<main>


 <div class="alert alert--primary" role="alert">
 <button aria-label="Close" class="clean-btn close" type="button">
  <span aria-hidden="true">×</span>  </button>
  HINWEIS: Bitte beachten Sie die <strong>CORONA-Regeln</strong>. Bingen Sie zur Behandlung einen aktuelles Corona-Testzertifikat mit.
 </div>

        <HomepageFeatures />


  <div class="container">  <div class="row">
    <div class="col col--6">
    Bild
    </div>
    <div class="col col--6">
    <div class="hero shadow--lw">  <div class="container">    <h1 class="hero__title">Willkommen</h1>
    <p class="hero__subtitle">in der Privatordination für Augenheilkunde in Wien - Hetzendorf.</p>
   <h3> Ihre erfahrene Augensärztin für Vorsorgeuntersuchungen, Uveitis, Augenoperationen und Spezialbehandlungen.</h3>
   <div>
     <a class="button button--lg button--primary" href="/docs/Ueber"> Mehr über mich</a>
   </div>
   <p> </p>
   <p>
      <li> Oberätztin im Krankenhaus Hitzing </li>
      <li> über 20 Jahre Berufserfahrung </li>
   </p>
    </div></div>
    </div>
  </div> </div>



 <div class="hero hero--dark">
 <div class="container">
   <h1 class="hero__title">Wahlärztin</h1>
   <p class="hero__subtitle">Privatordination Dr. Saskia Tipotsch</p>
  <div class="container">
  <div class="row">
    <div class="col col--6">
      <div>
        <a class="button button--lg button--primary" href="/docs/About/wahlaerztin/"> Mehr zur freie Arztwahl </a>
      </div>
      <p> </p>
      <p>
         <li> Oberätztin im Krankenhaus Hitzing </li>
         <li> über 20 Jahre Berufserfahrung </li>
      </p>
      </div>
      <div class="col col--6">
      Als <b>Wahlärztin</b> ist es mir ausgesprochen wichtig, auf die individuellen Bedürfnisse meiner PatientInnen einzugehen.
Ausreichend Zeit ist die Basis für eine erfolgreiche und vertrauensvolle Arzt-PatientInnen Beziehung.
<p>Ziel ist die exakte Diagnosefindung und Erstellung eines entsprechenden Therapieplans.
Als Wahlärztin habe ich keinen Vertrag mit einer Krankenkasse, die Bezahlung erfolgt daher bar.
Sie können die Honorarnote bei Ihrer Krankenkasse einreichen, ein Teil der Kosten wird idR. rückerstattet.</p>
Sollten Augenoperationen notwendig sein, kann ich diese als <b>Belegsärztin</b> in der Privatklink <b>Goldenes Kreuz</b> durchführen.</div>
      </div> </div></div>
 </div>

 <div class="container">
  <div class="row">
  <div class="col col--6">
  <div>
    <img src="/img/landing/family-40.png" />
  </div>  </div>
  <div class="col col--6">
    <div class="hero shadow--lw">  <div class="container">
      <h1 class="hero__title">Schwerpunkte</h1>
      <p class="hero__subtitle">Voruntersuchungen, Beratung inklusive Organisation, Operation sowie Nachsorge bei</p>
      <p> </p>
       <p>
         <li> Kataraktchirurgie (Grauer Star)</li>
         <li> Lidchirurgie </li>
        <li> Netzhautchirurgie </li>
       </p>
       <div>
        <a class="button button--lg button--primary" href="/docs/Leitungen/"> Mehr zur medizinischen Leistungen </a>
       </div>
    </div></div>
  </div> </div>
 </div>

 <div class="container">
   <div class="row">
   <div class="col col--6">
    <p> </p>
   </div>
   <div class="col col--6">
  </div> </div>
 </div>

 <div class="container">
  <div class="row">
  <div class="col col--6">
    <div>
    <div class="hero shadow--lw">  <div class="container">
      <h1 class="hero__title">Medizinische Leistungen</h1>
      <p class="hero__subtitle">Voruntersuchungen, Überprüfungen der Sehschärfe und der Netzhaut</p>
        <p>
          <li> Vorsorgeuntersuchungen, allgemeine Diagnostik </li>
          <li> Überprüfung der Sehschärfe, Brillenverordnung, Beratung zu Brillengläsern und sonstigen Sehbehelfen</li>
          <li> Untersuchungen zum Grüner Star (Glaukom) </li>
          <li> Diagnose von Hornhauterkrankungen, Augenentzündungen, Netzhautveränderungen (Diabetes, Gefäßverschluss) </li>
          <li> Diagnose von Makulaerkrankungen </li>
          <li> Führerscheinuntersuchung </li>
        </p>
      </div></div>
    </div>
  </div>
  <div class="col col--6">
  <p> </p>
     <div>
       <p> </p>
      <img src="/img/landing/eyesight-40.png" />
     </div>
   </div>
  </div></div>

  <div class="container">
    <div class="row">
    <div class="col col--6">
     <p> </p>
    </div>
    <div class="col col--6">
   </div> </div>
  </div>


<div class="container">
  <div class="row">
  <div class="col col--6">
  <p> </p>

  <div class="container">  <div class="row">    <div class="col col--6">
  <h2>Adresse </h2>
  <p> <b>Privatordination Augenarzt-Hetzendorf</b> von Dr. Saskia Tipotsch </p>
  <p>Schönbrunner Alle 46/3 - Erdgeschoss, 1120 Wien; Tel: +43 6707 035530</p>
  </div>
  <div class="col col--6">
  </div>  </div> </div>
  <div class="container">  <div class="row">    <div class="col col--6">
    </div>    <div class="col col--6">
  <h2>So erreichen Sie mich</h2>
  <p> Öffentliche Verkehrsmittel:
  Strassenbahn 62, Bus 62A</p>
  </div>  </div> </div>

<div class="container">  <div class="row">    <div class="col col--6">

<h2>Ordinationszeiten</h2>
Mittwoch 14h – 19h
</div>    <div class="col col--6"></div>  </div> </div>
<div class="container">  <div class="row">    <div class="col col--6"></div>
<div class="col col--6">
<div><button class="button button--info">Info</button></div>
<p> Zur genauen Untersuchung ist oft eine medikamentöse Erweiterung der Pupille nötig.
Bitte beachten Sie, dass in diesem Fall die aktive Teilnahme am Straßenverkehr für mehrere Stunden NICHT erlaubt ist.</p>
</div>  </div> </div>

</div>
 <div class="col col--6">
   <div class="hero shadow--lw">
  <div class="container">
    <h1 class="hero__title">Schön, Sie zu sehen!</h1>
     <p class="hero__subtitle">Adresse | Terminvereinbarung</p>
     <div>
      <a class="button button--lg button--primary" href="/docs/Kontakt/Terminvereinbarung/"> Zur Terminvereinbarung </a>
     </div> </div></div>
  </div> </div>
</div>



      </main>
    </Layout>
  );
}
