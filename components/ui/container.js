export function Container({ children, className, ...props }) {
    return (
      <div 
        className={`max-w-container mx-auto px-4 
          2xl:max-w-[1280px] xl:max-w-[1024px] lg:max-w-[768px] md:max-w-[640px] 
          ${className || ''}`
        } 
        {...props}
      >
        {children}
      </div>
    )
  }