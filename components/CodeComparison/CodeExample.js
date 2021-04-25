const { a11yDark, CodeBlock } = require("react-code-blocks");

const CodeExample = ({ code, language }) => {
  return (
    <div className="mt-2">
      <p className="text-lg my-2">
        {language === "elixir" ? "Elixir" : "Javascript"}
      </p>
      <CodeBlock
        showLineNumbers={false}
        text={code}
        language={language}
        theme={a11yDark}
      />
    </div>
  );
};

export default CodeExample;
