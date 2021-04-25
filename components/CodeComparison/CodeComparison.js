const { default: CodeExample } = require("./CodeExample");

const CodeComparison = ({ js, elixir }) => {
  return (
    <div className="grid grid-cols-1 gap-2 justify-evenly w-full my-2">
      <div>
        <CodeExample language="javascript" code={js} />
      </div>
      <div>
        <CodeExample language="elixir" code={elixir} />
      </div>
    </div>
  );
};

export default CodeComparison;
