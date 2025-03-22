import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;


const MarkdownEditorData = ({setFieldValue,default_value}) => {
    // const [markdown, setMarkdown] = useState(default_value);
  return (
    <MarkdownEditor
    value={default_value}
      height="200px"
      onChange={(value, viewUpdate) => setFieldValue(value)}
  />
  )
}

export default MarkdownEditorData