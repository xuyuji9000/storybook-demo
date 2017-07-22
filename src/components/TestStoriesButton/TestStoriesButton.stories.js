import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TestStoriesButton from './TestStoriesButton'

storiesOf('TestStoriesButton', module)
    .add('with text', () => (
        <TestStoriesButton></TestStoriesButton>
    ))
    .add('new story', () => (
        <div></div>
    ))
