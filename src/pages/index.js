/**
 * Copyright (c) tipcon KG and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import clsx from 'clsx';

import HomepageFeatures from '../components/HomepageFeatures';

import Landing from '../theme/sections/landing/landing';
import Announcement from '../theme/sections/anouncement/anouncement'
import Test from '../pages/helloReact';


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
//   const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
//      description={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
      keywords={siteConfig.customFields.keywords}
      >
      <HomepageHeader />

     <div class="alert alert--primary" role="alert">
     <button aria-label="Close" class="clean-btn close" type="button">
     <span aria-hidden="true">×</span>
     </button>  Bitte Beachten Sie die <strong>Corona-Regeln</strong>.
     </div>

      <main>
        <HomepageFeatures />
      </main>


<div class="row">
<div class="col col--3">3
</div>
<div class="col col--3">3
<div class="card-demo">  <div class="card">    <div class="card__header">      <div class="avatar">        <img          class="avatar__photo"          src="https://avatars1.githubusercontent.com/u/4060187?s=460&amp;v=4"        />        <div class="avatar__intro">          <div class="avatar__name">Jared Palmer</div>          <small class="avatar__subtitle">            Consultant, Speaker, Lead Engineer          </small>        </div>      </div>    </div>    <div class="card__image">      <img        src="https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1655&amp;q=80"        alt="Image alt text"        title="Logo Title Text 1"      />    </div>    <div class="card__footer">      <div class="button-group button-group--block">        <button class="button button--secondary">Like</button>        <button class="button button--secondary">Comment</button>        <button class="button button--secondary">Share</button>      </div>    </div>  </div></div>
</div>
<div class="col col--3">3
<div class="card-demo">  <div class="card">    <div class="card__image">      <img        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"        alt="Image alt text"        title="Logo Title Text 1"      />    </div>    <div class="card__body">      <h4>Quaco Lighthouse</h4>      <small>        The Quaco Head Lighthouse is a well maintained lighthouse close to St.        Martins. It is a short, beautiful walk to the lighthouse along the        seashore.      </small>    </div>    <div class="card__footer">      <button class="button button--primary button--block">Visit</button>    </div>  </div></div>
</div>
<div class="col col--3">3
</div>
</div>

<div class="row">
<div class="col col--2">2</div>
<div class="col col--2">2
<div class="card-demo">  <div class="card">    <div class="card__header">      <h3>Lorem Ipsum</h3>    </div>    <div class="card__body">      <p>        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum        suspendisse ultrices gravida.      </p>    </div>    <div class="card__footer">      <button class="button button--secondary button--block">See All</button>    </div>  </div></div></div>
<div class="col col--2">2
<div class="card-demo">  <div class="card">    <div class="card__image">      <img        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"        alt="Image alt text"        title="Logo Title Text 1"      />    </div>    <div class="card__body">      <h4>Quaco Lighthouse</h4>      <small>        The Quaco Head Lighthouse is a well maintained lighthouse close to St.        Martins. It is a short, beautiful walk to the lighthouse along the        seashore.      </small>    </div>    <div class="card__footer">      <button class="button button--primary button--block">Visit</button>    </div>  </div></div></div>
<div class="col col--2">2
<div class="card-demo">  <div class="card">    <div class="card__header">      <h3>Lorem Ipsum</h3>    </div>    <div class="card__body">      <p>        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum        suspendisse ultrices gravida.      </p>    </div>    <div class="card__footer">      <button class="button button--secondary button--block">See All</button>    </div>  </div></div></div>
<div class="col col--2">2</div>
<div class="col col--2">2</div>  </div>

<div class="container">  <div class="row">
<div class="col col--1">col--1</div>
<div class="col col--2 col--offset-1">col--2 col--offset-1</div>
<div class="col col--3 col--offset-2">col--3 col--offset-2</div>  </div> </div>




</Layout>
);
}
