import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Node from './node';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  let db = genDB(dels)

  return (
    <div id="page-wrap">
      <div id="contact-info" className="vcard">

        <h1 className="fn">Name</h1>

        <p>
          Cell: <span className="tel">9999-999-999</span><br />
          Email: <a className="email" href="mailto:abc@abc.co">abc@abc.com</a>
        </p>
      </div>

      <div id="objective">
        <p>
          abcd,egfhi,afewfwe,fasfkssdofkwsopefk
        </p>
      </div>
      <dl>
        {db.map(n => <Node now={n} />)}
      </dl>
    </div>
  );
}
