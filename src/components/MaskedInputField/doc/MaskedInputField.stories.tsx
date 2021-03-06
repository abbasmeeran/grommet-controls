import React from 'react';
import { Box, Button } from 'grommet';
import { action } from '@storybook/addon-actions';
import { MaskedInputField } from '../MaskedInputField';
import { Form, validators } from '../../../index';

export default {
  title: 'CONTROLS/validation/MaskedInputField',
  component: MaskedInputField,
};


export const main = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <MaskedInputField
      placeholderChar='_'
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholder='US Phone'
      name='phone'
      label='Phone'
      validation={[validators.required()]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

export const inField = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <MaskedInputField
      placeholderChar='_'
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholder='US Phone'
      name='phone'
      label='Phone'
      inField={false}
      validation={[validators.required()]}
    />

    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

export const validation = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <MaskedInputField
      placeholderChar='_'
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholder='US Phone'
      name='phone'
      label='Phone'
      validation={[
        validators.required(),
        validators.minLength(10),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
