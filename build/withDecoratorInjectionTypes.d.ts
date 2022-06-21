/// <reference types="react" />
interface DecoratorInjectionProps<TargetProps = any> {
    Target: React.FC<TargetProps>;
    targetProps: TargetProps;
}
declare type IApllyDecoratorInjection = <TargetProps = any, DecoratorProps = any>(Decorator: React.FC<DecoratorInjectionProps<TargetProps>>, Target: React.FC<DecoratorProps & TargetProps>) => React.FC<TargetProps>;
declare type IMergeDecorators = <TargetProps = any>(Decorator: React.FC<DecoratorInjectionProps<TargetProps>>, Target: React.FC<DecoratorInjectionProps<TargetProps>>) => React.FC<DecoratorInjectionProps<TargetProps>>;
declare type IDecoratorInjectionFC<TargetProps = any> = React.FC<DecoratorInjectionProps<TargetProps>>;
export type { DecoratorInjectionProps, IApllyDecoratorInjection, IDecoratorInjectionFC, IMergeDecorators, };
