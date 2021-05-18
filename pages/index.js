import Head from "next/head";
import {
  elixirCase,
  elixirChaining,
  elixirDestructuring,
  elixirDestructuring2,
  elixirFilter,
  elixirFunction,
  elixirIf,
  elixirImports,
  elixirMap,
  elixirReduce,
  elixirVars,
  elixirComparisonOperators,
  jsCase,
  jsChaining,
  jsDestructuring,
  jsDestructuring2,
  jsFilter,
  jsFunction,
  jsImports,
  jsIf,
  jsMap,
  jsReduce,
  jsVars,
  jsComparisonOperators,
} from "../codeSamples";
import CodeComparison from "../components/CodeComparison/CodeComparison";
import CodeComparisonDescription from "../components/CodeComparison/CodeComparisonDescription";
import CodeComparisonHeader from "../components/CodeComparison/CodeComparisonHeader";
import Collabsible from "../components/Common/Collapsible";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elixir for a JS Dev</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          ccontent="elixir,javascript,web development,programming,react"
        />
        <meta
          name="description"
          content="Tools and examples to help a Javascript developer learn Elixir"
        />
      </Head>
      <main className="flex flex-col h-screen max-w-4xl p-4 m-auto">
        <Header />
        <div className="flex-grow mb-10">
          <p className="mt-4 text-xl">
            Expand a section to learn about a particular topic.
          </p>
          <Collabsible title="Basics" startsOpen>
            <>
              <CodeComparisonHeader>
                Variable Declaration (or binding)
              </CodeComparisonHeader>
              <CodeComparison js={jsVars} elixir={elixirVars} />
              <CodeComparisonDescription>
                "=" is called the match operator. The match operator is similar
                to triple equals in Javascript.
                <br />
                Unlike JS, all elixir data is immutable and must be assigned a
                value at the time the variable is declared.
              </CodeComparisonDescription>
              <CodeComparisonHeader>Comparison Operators</CodeComparisonHeader>
              <CodeComparison
                js={jsComparisonOperators}
                elixir={elixirComparisonOperators}
              />
              <CodeComparisonHeader>Imports</CodeComparisonHeader>
              <CodeComparison js={jsImports} elixir={elixirImports} />
              <CodeComparisonHeader>Functions</CodeComparisonHeader>
              <CodeComparison js={jsFunction} elixir={elixirFunction} />
              <CodeComparisonDescription>
                The ampersand operator is the capture operator, documented{" "}
                <a
                  target="_blank"
                  className="underline"
                  href="https://elixir-lang.org/getting-started/modules-and-functions.html#function-capturing"
                >
                  here.
                </a>
              </CodeComparisonDescription>
              <CodeComparisonHeader>Method Chaining</CodeComparisonHeader>
              <CodeComparison js={jsChaining} elixir={elixirChaining} />
              <CodeComparisonDescription>
                The pipe operator is a very powerful tool in Elixir - read more
                about it{" "}
                <a
                  target="_blank"
                  className="underline"
                  href="https://elixirschool.com/en/lessons/basics/pipe-operator/"
                >
                  here.
                </a>
              </CodeComparisonDescription>
              <CodeComparisonHeader>Destructuring</CodeComparisonHeader>
              <CodeComparison
                js={jsDestructuring}
                elixir={elixirDestructuring}
              />
              <CodeComparisonDescription>
                <a
                  target="_blank"
                  className="underline"
                  href="https://elixir-lang.org/getting-started/pattern-matching.html"
                >
                  Pattern Matching
                </a>{" "}
                is the Elixir equivalent of destructuring. In Elixir it is
                common to have multiple functions defined with the same name
                that match on different properties:
              </CodeComparisonDescription>
              <CodeComparison
                js={jsDestructuring2}
                elixir={elixirDestructuring2}
              />
              <CodeComparisonDescription>
                There are more examples of pattern matching in action in the
                Control Flow section of this site.
              </CodeComparisonDescription>
            </>
          </Collabsible>
          <Collabsible title="Control Flow">
            <CodeComparisonHeader>Case Statements</CodeComparisonHeader>
            <CodeComparison js={jsCase} elixir={elixirCase} />
            <CodeComparisonDescription>
              In addition to case statements, Elixir also has the{" "}
              <a
                target="_blank"
                className="underline"
                href="https://elixir-lang.org/getting-started/case-cond-and-if.html#cond"
              >
                cond
              </a>{" "}
              keyword, which is useful for checking different conditions and
              finding the first one that isn't nil or false, similar to else if
              statements.
            </CodeComparisonDescription>
            <CodeComparisonHeader>If Else Statements</CodeComparisonHeader>
            <CodeComparison js={jsIf} elixir={elixirIf} />
          </Collabsible>
          <Collabsible title="Common List Operations">
            <>
              <CodeComparisonHeader>Map</CodeComparisonHeader>
              <CodeComparison js={jsMap} elixir={elixirMap} />
              <CodeComparisonHeader>Filter</CodeComparisonHeader>
              <CodeComparison js={jsFilter} elixir={elixirFilter} />
              <CodeComparisonHeader>Reduce</CodeComparisonHeader>
              <CodeComparison js={jsReduce} elixir={elixirReduce} />
            </>
          </Collabsible>
          {/* <Collabsible title="Async Tasks">
            <>
              <CodeComparisonHeader>Coming Soon!</CodeComparisonHeader>
            </>
          </Collabsible> */}
        </div>
        <Footer />
      </main>
    </>
  );
}
