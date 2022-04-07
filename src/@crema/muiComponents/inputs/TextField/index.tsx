import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTextFieldsSource from '!raw-loader!./BasicTextField';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorTextFieldsSource from '!raw-loader!./Color';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComposedTextFieldSource from '!raw-loader!./Components';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedInputsSource from '!raw-loader!./Customization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedInputBaseSource from '!raw-loader!./CustomizedInputBase';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FormPropsTextFieldsSource from '!raw-loader!./FormProps';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FullWidthTextFieldSource from '!raw-loader!./FullWidth';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import HelperTextMisalignedSource from '!raw-loader!./HelperTextMisaligned';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InputWithIconSource from '!raw-loader!./Icons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InputAdornmentsSource from '!raw-loader!./InputAdornments';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InputsSource from '!raw-loader!./Inputs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LayoutTextFieldsSource from '!raw-loader!./Margin';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultilineTextFieldsSource from '!raw-loader!./Multiline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SelectTextFieldsSource from '!raw-loader!./Select';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TextFieldSizesSource from '!raw-loader!./Sizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StateTextFieldsSource from '!raw-loader!./UncontrolledControlled';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ValidationTextFieldsSource from '!raw-loader!./Validation';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicTextFields from './BasicTextField';
import ColorTextFields from './Color';
import ComposedTextField from './Components';
import CustomizedInputs from './Customization';
import CustomizedInputBase from './CustomizedInputBase';
import FormPropertiesTextFields from './FormProps';
import FullWidthTextField from './FullWidth';
import HelperTextMisaligned from './HelperTextMisaligned';
import InputWithIcon from './Icons';
import InputAdornments from './InputAdornments';
import Inputs from './Inputs';
import LayoutTextFields from './Margin';
import MultilineTextFields from './Multiline';
import SelectTextFields from './Select';
import TextFieldSizes from './Sizes';
import StateTextFields from './UncontrolledControlled';
import ValidationTextFields from './Validation';

const TextField = () => {
  return (
    <>
      <AppComponentHeader
        title='Text Field'
        description='Text fields let users enter and edit text.'
        refUrl='https://mui.com/components/text-fields/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic TextField'
            component={BasicTextFields}
            source={BasicTextFieldsSource}
            noScrollbar
            description='The TextField wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Form props'
            component={FormPropertiesTextFields}
            source={FormPropsTextFieldsSource}
            noScrollbar
            description='Standard form attributes are supported e.g. required, disabled, type, etc. as well as a helperText which is used to give context about a field input, such as how the input will be used.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Validation'
            component={ValidationTextFields}
            source={ValidationTextFieldsSource}
            noScrollbar
            description='The error prop toggles the error state. The helperText prop can then be used to provide feedback to the user about the error.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Multiline'
            component={MultilineTextFields}
            source={MultilineTextFieldsSource}
            noScrollbar
            description='The multiline prop transforms the text field into a <textarea> element. Unless the rows prop is set, the height of the text field dynamically matches its content (using TextareaAutosize).'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Select'
            component={SelectTextFields}
            source={SelectTextFieldsSource}
            noScrollbar
            description='The select prop makes the text field use the Select component internally.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Icons'
            component={InputWithIcon}
            source={InputWithIconSource}
            noScrollbar
            description='There are multiple ways to display an icon with a text field.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Input Adornments'
            component={InputAdornments}
            source={InputAdornmentsSource}
            noScrollbar
            description='The main way is with an InputAdornment. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Sizes'
            component={TextFieldSizes}
            source={TextFieldSizesSource}
            noScrollbar
            description='Fancy smaller inputs? Use the size prop.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Margin'
            component={LayoutTextFields}
            source={LayoutTextFieldsSource}
            noScrollbar
            description='The margin prop can be used to alter the vertical spacing of the text field. Using none (default) does not apply margins to the FormControl whereas dense and normal do.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Full width'
            component={FullWidthTextField}
            source={FullWidthTextFieldSource}
            noScrollbar
            description='fullWidth can be used to make the input take up the full width of its container.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Uncontrolled vs. Controlled'
            component={StateTextFields}
            source={StateTextFieldsSource}
            noScrollbar
            description='The component can be controlled or uncontrolled.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Components'
            component={ComposedTextField}
            source={ComposedTextFieldSource}
            noScrollbar
            description='TextField is composed of smaller components ( FormControl, Input, FilledInput, InputLabel, OutlinedInput, and FormHelperText ) that you can leverage directly to significantly customize your form inputs.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard title='Inputs' component={Inputs} source={InputsSource} noScrollbar />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Color'
            component={ColorTextFields}
            source={ColorTextFieldsSource}
            noScrollbar
            description='The color prop changes the highlight color of the text field when focused.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Customization'
            component={CustomizedInputs}
            source={CustomizedInputsSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Customized Input Base'
            component={CustomizedInputBase}
            source={CustomizedInputBaseSource}
            noScrollbar
            description='Customization does not stop at CSS. You can use composition to build custom components and give your app a unique feel.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Helper Text Misaligned'
            component={HelperTextMisaligned}
            source={HelperTextMisalignedSource}
            noScrollbar
            description='The helper text prop affects the height of the text field.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TextField;
