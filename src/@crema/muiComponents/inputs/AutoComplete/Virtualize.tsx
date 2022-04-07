import Autocomplete, {autocompleteClasses} from '@mui/material/Autocomplete';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import {styled, useTheme} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import {ListChildComponentProps, VariableSizeList} from 'react-window';

const LISTBOX_PADDING = 8; // px

function renderRow(properties: ListChildComponentProps) {
  const {data, index, style} = properties;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty('group')) {
    return (
      <ListSubheader key={dataSet.key} component='div' style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component='li' {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((properties, reference) => {
  const outerProperties = React.useContext(OuterElementContext);
  return <div ref={reference} {...properties} {...outerProperties} />;
});

function useResetCache(data: any) {
  const reference = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (reference.current != undefined) {
      reference.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return reference;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
  function ListboxComponent(properties, reference) {
    const {children, ...other} = properties;
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach(
      (item: React.ReactChild & {children?: React.ReactChild[]}) => {
        itemData.push(item, ...(item.children || []));
      },
    );

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
      noSsr: true,
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactChild) => {
      if (child.hasOwnProperty('group')) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridReference = useResetCache(itemCount);

    return (
      <div ref={reference}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width='100%'
            ref={gridReference}
            outerElementType={OuterElementType}
            innerElementType='ul'
            itemSize={index => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  },
);

function random(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let index = 0; index < length; index += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

const OPTIONS = [...Array.from({length: 10_000})]
  .map(() => random(10 + Math.ceil(Math.random() * 20)))
  .sort((a: string, b: string) => a.toUpperCase().localeCompare(b.toUpperCase()));

export default function Virtualize() {
  return (
    <Autocomplete
      id='virtualize-demo'
      sx={{width: 300}}
      disableListWrap
      PopperComponent={StyledPopper}
      ListboxComponent={ListboxComponent}
      options={OPTIONS}
      groupBy={option => option[0].toUpperCase()}
      renderInput={parameters => <TextField {...parameters} label='10,000 options' />}
      renderOption={(properties, option) => [properties, option]}
      renderGroup={parameters => parameters}
    />
  );
}
