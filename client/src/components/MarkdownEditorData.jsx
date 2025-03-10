import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;


const MarkdownEditorData = () => {
    const [markdown, setMarkdown] = useState(mdStr);
  return (
    <MarkdownEditor
    value={markdown}
      height="200px"
      onChange={(value, viewUpdate) => setMarkdown(value)}
  />
  )
}

export default MarkdownEditorData