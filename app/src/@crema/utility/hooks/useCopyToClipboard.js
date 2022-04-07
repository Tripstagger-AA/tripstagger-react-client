import React from 'react';

export const useCopyToClipboard = text => {
  const copyToClipboard = string_ => {
    const element = document.createElement('textarea');
    element.value = string_;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.append(element);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    element.select();
    const success = document.execCommand('copy');
    element.remove();
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    return success;
  };

  const [copied, setCopied] = React.useState(false);

  const copy = React.useCallback(() => {
    if (!copied) setCopied(copyToClipboard(text));
  }, [text]);
  React.useEffect(() => () => setCopied(false), [text]);

  return [copied, copy];
};
