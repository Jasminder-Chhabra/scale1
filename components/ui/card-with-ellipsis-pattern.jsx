import { cn } from '@/lib/utils'

export function PatternCard({
  children,
  className,
  patternClassName,
  gradientClassName
}) {
  return (
    <div
      className={cn(
        "border w-full rounded-md overflow-hidden",
        "bg-background",
        "border-border",
        "p-3",
        className
      )}>
      <div
        className={cn(
          "size-full bg-repeat bg-[length:30px_30px]",
          "bg-dot-pattern-light dark:bg-dot-pattern",
          patternClassName
        )}>
        <div
          className={cn(
            "size-full bg-gradient-to-tr",
            "from-background/90 via-background/40 to-background/10",
            gradientClassName
          )}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function PatternCardBody({
  className,
  ...props
}) {
  return <div className={cn("text-left p-4 md:p-6", className)} {...props} />;
}
