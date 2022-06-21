import React from 'react';
import { IApllyDecoratorInjection } from './withDecoratorInjectionTypes';

const withDecoratorInjection: IApllyDecoratorInjection = (Decorator, Target) => (props) =>
  <Decorator Target={Target} targetProps={props} />;

export default withDecoratorInjection;
