const { default: Break } = require("../Common/Break");

const CodeComparisonHeader = ({ children }) => (
  <>
    <p className="text-xl mt-4">{children}</p>
    <Break />
  </>
);

export default CodeComparisonHeader;
