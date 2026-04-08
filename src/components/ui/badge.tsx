import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex w-fit items-center rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.02em] text-muted-foreground backdrop-blur',
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
