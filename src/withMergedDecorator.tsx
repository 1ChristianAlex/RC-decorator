import React from 'react';
import { IMergeDecorators } from './withDecoratorInjectionTypes';

const withMergedDecorator: IMergeDecorators = (Decorator, DecoratorToMerge) => {
  const ComponentWithDecorator: typeof DecoratorToMerge = ({ Target, targetProps }) =>
    React.createElement(Decorator, {
      Target: (targetMergeProps) =>
        React.createElement(DecoratorToMerge, {
          Target,
          targetProps: { ...targetMergeProps, ...targetProps },
        }),
      targetProps,
    });

  return ComponentWithDecorator;
};

export default withMergedDecorator;
