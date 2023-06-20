import React from 'react';

import './App.scss';

import {Col, Container, Row} from "react-bootstrap";
import {Header} from "./components/Header";

function App() {
  const logo = 'img/lendbor-header.png' ;
  // const logo = 'img/lendbor-transparent.gif' ;

  return (
    <>
      <Header />

      <div className="App pt-2">
        <div className="text-center">
          <img src={logo} className="app-header" alt="logo" />
          <h3 className="mt-4">lendbor — бот для управління кредитами та позиками.</h3>
        </div>
        <Container>
          <Row>
            <Col className={'col-3'}></Col>
            <Col className={'col-6'}>
              <p>
                З його допомогою Ви можете:
              </p>
              <ul>
                <li>записати, у кого позичили чи кому позичили гроші</li>
                <li>отримати нагадування про суму та дату погашення боргу позичальником</li>
                <li>суму та дату наступної сплати свого боргу</li>
                <li>записати сплату частини кредиту чи боргу</li>
                <li>позначити борг як сплачений</li>
                <li>позначити закриття кредиту</li>
                <li>переглянути список усіх боргів і кредитів</li>
              </ul>

              <p>
                Посилання на чат-бот в Телеграм:
                <a
                  className="App-link ms-2"
                  href="https://t.me/lendbor_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lendbor Bot
                </a>
              </p>
            </Col>
            <Col className={'col-3'}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
