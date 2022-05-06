import React from "react";
import { Table } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogs">
      <div className="single-question" style={{ textAlign: "left" }}>
        <h3>Difference between JavaScript and Node js</h3>
        <h5>JavaScript:</h5>
        <p>
          JavaScript is a scripting langauge. Javascript updated version is ECMA
          script. Javascript is high level programming language that uses the
          concept of OOPs but it is based on prototype injeritance.
        </p>
        <h5>NodeJs</h5>
        <p>
          NodeJs is cross platform and open source JavaScript runtime
          environment that allows the Javascript to be run on the server side.
          NodeJs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
        </p>
        <h5>Difference:</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Javascript</th>
              <th>Node Js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website.{" "}
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
            <tr>
              <td>2</td>
              <td> Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Is is basically used on thd client side.</td>
              <td>It is mostly used on the server side.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Javasceipt is a capable enough to add html and play with the
                DOM.
              </td>
              <td>Nodejs does not have capability to add html tags.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Javascript can run in any browser engine as like js core in
                safari and Spidermonkey in Firefox.
              </td>
              <td>
                V8 is a javascript engine inside of nodejs that parses and runs
                Javascript.
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Javascript is used in frontend development.</td>
              <td>NodeJs used in server side development.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                Some of the javascript frameworks are RamdaJs, TypedJs, etc.
              </td>
              <td>Some of the Nodejs modules are lodash, express etc.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                It is the upgraded version of ECMA script that uses Chrome's V8
                engine written in C++
              </td>
              <td>NodeJs written is C, C++ and javascript.</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="single-question" style={{ textAlign: "left" }}>
        <h3> Differences between sql and nosql databases.</h3>
        <h4>The Main Differences</h4>
        <h5>1.Type:</h5>
        <p>
          SQL database are primarily called as relational databases; whereas
          NoSWL database are primarily called as non-relational or distributed
          database.
        </p>
        <h5>2. Language</h5>
        <p>
          SQL databases defines and manipulates data based structured query
          language (SQL). Seeing from a side this language is extremely
          powerful. SQL is one of the most versatile and widely-used options
          available which makes it a safe choice especially for great complex
          queries. A NoSQL database has dynamic schema for unstructured data.
          Data is stored in many ways which means it can be document-oriented,
          column-oriented, graph-based or organized as a KeyValue store.
        </p>
        <h5>Key Highlights for Difference:</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>SQL</th>
              <th>No SQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Relational database management system.</td>
              <td>Non relational or distributed database system.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>These database have fixed or staric or predefined schema.</td>
              <td>They have dynamic schema.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                These database are not suited for hierarchical data storage.
              </td>
              <td>
                These databasees are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>These database are best suited for complex queries.</td>
              <td>These databases are not so good for complex queries.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vertically scalable</td>
              <td>Horizontally scalable</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Follows ACID property</td>
              <td>
                Follows CAP(consistency, availability, parition tolerance)
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="single-question" style={{ textAlign: "left" }}>
        <h3> When should you use nodejs and when should you use mongodb.</h3>
        <h4>1. When should you use nodejs:</h4>
        <p>
          We will try to determine when to use Node js to achieve the best
          application performance.
        </p>
        <h5>1.Real-time application:</h5>
        <p>
          As we have found that nodejs can ensure great speed and perfornamce,
          one to the textbook nodejs use cases is real time messating, or
          chatting. The envireonment can support heavy traffic of multiple short
          messags, or chatfooms when messages are displayed to many user at the
          sme time.
        </p>
        <h5>2. IoT applications</h5>
        <p>
          The synergy of nodejs ioT is the bist possible for implementing ioT
          development projects. First node is a first and powerful, and threfore
          capable of handiling large data flows. Second you can easily integrate
          Node.js with toT protocols.
        </p>
        <h5>3. Data streaming applications:</h5>
        <p>
          The term “streaming” means exactly that – sending large amounts of
          data in smaller packages instead of a single batch. This ability is
          especially critical for audio or video streaming applications. Node.js
          is perfectly suited for this task
        </p>
        <h5>4. Applications relying on scalability:</h5>
        <p>
          The superb scalability supported by Node.js answers the “why Node.js”
          question for apps required to withstand high peak loads. This is the
          reason why Uber chose Node.js to develop its app.
        </p>
        <h5>5. Complex single-page applications:</h5>
        <p>
          In SPAs, the whole application is loaded in a single page. This
          usually means there are a couple of requests made in the background
          for specific components. Node.js’s event loop comes to the rescue
          here, as it processes requests in a non-blocking fashion
        </p>
        <h5>6. REST API-based applications:</h5>
        <p>
          JavaScript is used both in the frontend and backend of sites. Thus, a
          server can easily communicate with the frontend via REST APIs using
          Node.js. Node.js also provides packages like Express.js and Koa that
          make it even easier to build web applications.
        </p>
        <h4>2. When should you use mongodb:</h4>
        <p>
          MongoDB works best with unstructured data, so it’s great for Big Data
          systems, MapReduce applications, news site forums, and social
          networking applications. Use MongoDB when:
        </p>
        <p>
          1. You’re using cloud computing. MongoDB is ideal for cloud computing.
          Cloud-based storage needs to easily distribute data across multiple
          servers, which suits MongoDB’s nature perfectly.
        </p>
        <p>
          2.You need your data fast and easily accessible. Use MongoDB when
          you’re running performance-critical applications. MongoDB offers high
          data availability, providing instant and automatic data recovery.
        </p>
        <p>
          3. You don’t have a database administrator. Perhaps you have a tiny
          business or are launching a start-up company, and you don’t yet have
          the resources to recruit a full-time Database Administrator. However,
          MongoDB is low maintenance, so the absence of an administrator won’t
          be as painful.
        </p>
        <p>
          4. You have lots of unstructured data. MongoDB (and NoSQL databases in
          general) has no storable data type limits.
        </p>
        <p>
          5. You’re using Agile methodologies for development. Relational
          databases are anything but agile, and they will slow you down. On the
          other hand, a database like MongoDB doesn’t require the level of
          preparation that its relational counterpart requires.
        </p>
        <p>
          6. You have schema issues. If you have an unstable or undefined
          schema, use MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Blog;
