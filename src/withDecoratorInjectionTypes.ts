/* eslint-disable @typescript-eslint/no-explicit-any */

interface DecoratorInjectionProps<TargetProps = any> {
  Target: React.FC<TargetProps>;
  targetProps: TargetProps;
}

type IApllyDecoratorInjection = <TargetProps = any, DecoratorProps = any>(
  Decorator: React.FC<DecoratorInjectionProps<TargetProps>>,
  Target: React.FC<DecoratorProps & TargetProps>
) => React.FC<TargetProps>;

type IMergeDecorators = <TargetProps = any>(
  Decorator: React.FC<DecoratorInjectionProps<TargetProps>>,
  Target: React.FC<DecoratorInjectionProps<TargetProps>>
) => React.FC<DecoratorInjectionProps<TargetProps>>;

type IDecoratorInjectionFC<TargetProps = any> = React.FC<
  DecoratorInjectionProps<TargetProps>
>;

export type {
  DecoratorInjectionProps,
  IApllyDecoratorInjection,
  IDecoratorInjectionFC,
  IMergeDecorators,
};
