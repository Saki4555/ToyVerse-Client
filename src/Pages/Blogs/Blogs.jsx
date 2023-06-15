import { Helmet } from "react-helmet-async";


const Blogs = () => {
    return (
        <div className="pt-20 my-container">
            <Helmet><title>ToyVerse | Blogs</title></Helmet>

            <div className=" border-2 border-[#B92D5E] p-7 shadow-md mb-7">
                <h1 className="font-bold text-1 mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>The authorization code flow is the most common and secure way to obtain access and refresh tokens from an authorization server, making it suitable for web applications that can securely store the client credentials and communicate with the server via back-end channels. This process involves four steps: the client redirects the user to the authorization server, requests an authorization code with the desired scope and a refresh token, user authenticates and consents to the scope, and the server returns an authorization code to the client via a redirect URI. Then, the client exchanges the authorization code for an access token and a refresh token using its credentials and code. Finally, the client uses the access token to access the protected resources until it expires, and then uses the refresh token to request a new access token.The implicit flow is a simplified version of the authorization code flow which does not require the client to exchange an authorization code for an access token. This flow is suitable for single-page applications or mobile apps which cannot store the client credentials or use back-end channels. It consists of two steps: first, the client redirects the user to the authorization server and requests an access token with the desired scope; second, after the user authenticates and consents to the scope, the server returns an access token to the client via a redirect URI</p>
            </div>

            <div className=" border-2 border-[#B92D5E] p-7 mb-7">
                <h1 className="font-bold text-1 mb-4">Compare SQL and NoSQL databases?</h1>
                <p> MySQL is a relational database that is based on a tabular design. NoSQL is non-relational and has a document-based design. A MySQL database is currently more popular in the market than NoSQL because the latter is still fairly new.SQL is a query language, while SQL Server is a database management system. SQL is a query language for working with a relational database, while SQL Server is proprietary software that performs SQL queries.Most SQL databases require you to scale-up vertically (migrate to a larger, more expensive server) when you exceed the capacity requirements of your current server. Conversely, most NoSQL databases allow you to scale-out horizontally, meaning you can add cheaper commodity servers whenever you need to</p>
            </div>

            <div className=" border-2 border-[#B92D5E] p-7 mb-7">
                <h1 className="font-bold text-1 mb-4">What is express js? What is Nest JS?</h1>
                <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.Express is a minimalist and flexible framework that provides a simple and intuitive API for building web applications with Node.js. Some of its key features and benefits include.NestJS is a framework that is built on top of Express and provides additional features and benefits. Some of its key features and benefits include:

                    Dependency injection: NestJS provides built-in support for dependency injection, which makes it easier to manage dependencies and write modular and scalable code.

                    Modular architecture: NestJS follows a modular architecture, which allows developers to break their applications into smaller and more manageable modules.</p>
            </div>

            <div className=" border-2 border-[#B92D5E] p-7 mb-7">
                <h1 className="font-bold text-1 mb-4">What is MongoDB aggregate and how does it work?</h1>
                <p>$match stage – filters those documents we need to work with, those that fit our needs
                    $group stage – does the aggregation job
                    $sort  stage – sorts the resulting documents the way we require (ascending or descending)
                    The input of the pipeline can be a single collection, where others can be merged later down the pipeline.

                    The pipeline then performs successive transformations on the data until our goal is achieved.

                    This way, we can break down a complex query into easier stages, in each of which we complete a different operation on the data. So, by the end of the query pipeline, we will have achieved all that we wanted.

                    This approach allows us to check whether our query is functioning properly at every stage by examining both its input and the output. The output of each stage will be the input of the next.</p>
            </div>

        </div>
    );
};

export default Blogs;