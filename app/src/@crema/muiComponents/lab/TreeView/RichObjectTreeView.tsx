import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import * as React from 'react';

interface RichObjectTreeView {
  id: string;
  name: string;
  children?: readonly RichObjectTreeView[];
}

const data: RichObjectTreeView = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

export default function RichObjectTreeView() {
  const renderTree = (nodes: RichObjectTreeView) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label='rich object'
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
    >
      {renderTree(data)}
    </TreeView>
  );
}