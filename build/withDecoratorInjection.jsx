import React from 'react';
const withDecoratorInjection = (Decorator, Target) => (props) => <Decorator Target={Target} targetProps={props}/>;
export default withDecoratorInjection;
