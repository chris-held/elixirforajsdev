import Head from "next/head";
import { elixirFunction, elixirImports, jsFunction } from "../codeSamples";
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
      </Head>
      <main className="m-auto p-4 max-w-4xl flex flex-col h-screen">
        <Header />
        <div className="flex-grow mb-10">
          <p className="text-xl mt-4">
            Expand a section to learn about a particular topic.
          </p>
          <Collabsible title="Basics" startsOpen>
            <>
              <CodeComparisonHeader>Variable Declaration</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" />
              <CodeComparisonDescription>
                Unlike JS, all elixir data is immutable and must be assigned a
                value at the time the variable is declared.
              </CodeComparisonDescription>
              <CodeComparisonHeader>Imports</CodeComparisonHeader>
              <CodeComparison
                js="import React, { useState } from 'react';"
                elixir={elixirImports}
              />
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
            </>
          </Collabsible>
          <Collabsible title="Common List Operations">
            <>
              <CodeComparisonHeader>Coming Soon!</CodeComparisonHeader>
              {/* <CodeComparisonHeader>Map</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" />
              <CodeComparisonHeader>Filter</CodeComparisonHeader>
              <CodeComparison
                js={`
                const foo = 1; 
                const bar = 2;
                `}
                elixir="foo = 1"
              />
              <CodeComparisonHeader>Some</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" />
              <CodeComparisonHeader>Reduce</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" /> */}
            </>
          </Collabsible>
          <Collabsible title="Async Tasks">
            <>
              <CodeComparisonHeader>Coming Soon!</CodeComparisonHeader>
              {/* <CodeComparisonHeader>Map</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" />
              <CodeComparisonHeader>Filter</CodeComparisonHeader>
              <CodeComparison
                js={`
                const foo = 1; 
                const bar = 2;
                `}
                elixir="foo = 1"
              />
              <CodeComparisonHeader>Some</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" />
              <CodeComparisonHeader>Reduce</CodeComparisonHeader>
              <CodeComparison js="const foo = 1;" elixir="foo = 1" /> */}
            </>
          </Collabsible>
        </div>
        <Footer />
      </main>
    </>
  );
}
