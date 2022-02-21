import React from 'react';
import Layout from '@theme/Layout';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

function Announcement() {
  return (
    <Layout title="Hello">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              fontSize: '20px',
            }}>
            <p>
              Edit <code>pages/helloReact.js</code> and save to reload.
            </p>
          </div>
        </Layout>
      );
    }

export default Announcement;
