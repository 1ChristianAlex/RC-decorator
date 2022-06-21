import React from 'react';
const withMergedDecorator = (Decorator, DecoratorToMerge) => {
    const ComponentWithDecorator = ({ Target, targetProps }) => React.createElement(Decorator, {
        Target: (targetMergeProps) => React.createElement(DecoratorToMerge, {
            Target,
            targetProps: Object.assign(Object.assign({}, targetMergeProps), targetProps),
        }),
        targetProps,
    });
    return ComponentWithDecorator;
};
export default withMergedDecorator;
